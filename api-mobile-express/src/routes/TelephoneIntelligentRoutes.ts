import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import TelephoneIntelligentService from '@src/services/TelephoneIntelligentService';
import { ITelephoneIntelligent } from '@src/models/TelephoneIntelligent';
import { DictionnaireFiltreRequete } from "../models/FiltresRecherche";
import { IReq, IRes } from './types/express/misc';
import { Request, Response } from 'express';

// **** Functions **** //

/**
 * Récupère tous les téléphones intelligents.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getAll(_: IReq, res: IRes) {
    const telephonesIntelligents = await TelephoneIntelligentService.getAll();
    return res.status(HttpStatusCodes.OK).json({ telephonesIntelligents: telephonesIntelligents });
}

/**
 * Récupère un téléphone intelligent par son id.
 * @param req - La requête HTTP reçue contenant l'id du téléphone intelligent.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getById(req: IReq, res: IRes) {
    // Récupèrer l'id du téléphone intelligent dans l'URL.
    const id = req.params.id;
    const telephoneIntelligent = await TelephoneIntelligentService.getById(id);
    return res.status(HttpStatusCodes.OK).json({ telephoneIntelligent: telephoneIntelligent });
}

/**
 * Récupère les 10 téléphones intelligents les plus récemment sortis.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getDixPlusRecents(_: IReq, res: IRes) {
    const telephonesIntelligents = await TelephoneIntelligentService.getDixPlusRecents();
    return res.status(HttpStatusCodes.OK).json({ telephonesIntelligents: telephonesIntelligents });
}

/**
 * Récupère tous les téléphones intelligents d'une compagnie.
 * @param req - La requête HTTP reçue contenant le nom de la compagnie.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getAllTelephonesIntelligentsFromCompagnie(req: IReq, res: IRes) {
    // Récupérer le nom de la compagnie dans l'URL.
    const nomCompagnie = req.params.nomCompagnie;
    const telephonesIntelligents = await TelephoneIntelligentService.getAllTelephonesIntelligentsFromCompagnie(nomCompagnie);
    return res.status(HttpStatusCodes.OK).json({ telephonesIntelligents: telephonesIntelligents });
}

/**
 * Récupère toutes les valeurs distinctes de la clé passée en paramètre dans la base de données.
 * Par exemple, on peut récupérer toutes les valeurs distinctes de la clé "nomCompagnie".
 * @param req - La requête HTTP reçue contenant la clé de la base de données.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getAllValeursByCleBd(req: IReq, res: IRes) {
    // Récupérer la clé dans l'URL.
    const cleBd = req.params.cleBd;
    const valeursDistinctes = await TelephoneIntelligentService.getAllValeursByCleBd(cleBd);
    return res.status(HttpStatusCodes.OK).json({ valeursDistinctes: valeursDistinctes });
}

/**
 * Récupère les téléphones intelligents qui respectent les critères de recherche.
 * @param req - La requête HTTP reçue contenant les filtres de recherche.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getRecherche(req: Request<{ body: Record<string, any> }>, res: Response) {
    // Utiliser le corps de la requête pour construire une requête MongoDB.
    const query = buildMongoDbQuery(req.body);
    // Récupérer les téléphones intelligents qui correspondent à la recherche.
    const telephonesIntelligents = await TelephoneIntelligentService.getRecherche(query);
    return res.status(HttpStatusCodes.OK).json({ telephonesIntelligents: telephonesIntelligents });
}

/**
 * Construit la requête MongoDB à partir des données dans le corps de la requête
 * pour la route de recherche des téléphones intelligents.
 * @param requestBody - Le corps de la requête contenant les filtres de recherche.
 */
function buildMongoDbQuery(requestBody: Record<string, any>): Record<string, any> {
    // Déclarer la requête MongoDB initialement vide.
    const requeteMongoDb: Record<string, any> = {};

    // key: Nom du filtre dans la requête.
    // value: Valeur du filtre fournie dans la requête.
    // Boucler pour chaque filtre dans le corps de la requête.
    for (const [key, value] of Object.entries(requestBody)) { // Converti l'objet en tableau de paires clé-valeur.
        // Récupérer les propriétés de ce filtre.
        const proprietesFiltre = DictionnaireFiltreRequete[key];
        // Si un filtre avec ce nom n'existe pas dans le dictionnaire, ignorer le filtre.
        if (!proprietesFiltre) continue;

        // Déconstruire l'objet en 2 variables.
        const { nomChampBd, operator } = proprietesFiltre;

        if (operator === "$regex") {
            /**
             * Ajouter un filtre sur une des clés dans la BD qui est égal au regex.
             * ex:
             * {
             *      "nom": {
             *          $regex: "valeur",
             *          $options: "i"
             *      }
             * }
             */
            requeteMongoDb[nomChampBd] = {
                $regex: value,
                $options: "i"
            };
        } else if (operator === "$eq") {
            // Ajouter un filtre sur une des clés dans la BD qui est égal à la valeur fournie.
            requeteMongoDb[nomChampBd] = value;
        } else {
            /**
             * Créer la clé dans la requête MongoDB, seulement si elle n'existe pas.
             * ex:
             * {
             *      "poidsG": {}
             * }
             */
            if (!requeteMongoDb[nomChampBd]) requeteMongoDb[nomChampBd] = {};

            /**
             * Puis, ajouter le filtre à l'intérieur de la clé.
             * ex:
             * {
             *      "poidsG": {
             *          $gte: 10
             *      }
             * }
             * ou s'il y en a déjà un:
             * {
             *      "poidsG": {
             *          $gte: 10,
             *          $lte: 200
             *      }
             * }
             */
            requeteMongoDb[nomChampBd][operator] = value; // À l'intérieur de la clé du nom du champ dans la BD, à l'intérieur de la clé de l'opérateur.
        }
    }

    return requeteMongoDb;
}

/**
 * Ajoute un téléphone intelligent.
 * @param req - La requête HTTP reçue contenant les données du téléphone intelligent à ajouter.
 * @param res - La réponse HTTP envoyée au client.
 */
async function add(req: IReq<{ telephoneIntelligent: ITelephoneIntelligent }>, res: IRes) {
    let { telephoneIntelligent } = req.body;
    telephoneIntelligent = await TelephoneIntelligentService.addOne(telephoneIntelligent);
    return res.status(HttpStatusCodes.CREATED).json({ telephoneIntelligent: telephoneIntelligent });
}

/**
 * Met à jour un téléphone intelligent.
 * @param req - La requête HTTP reçue contenant les nouvelles données du téléphone intelligent.
 * @param res - La réponse HTTP envoyée au client.
 */
async function update(req: IReq<{ telephoneIntelligent: ITelephoneIntelligent }>, res: IRes) {
    let { telephoneIntelligent } = req.body;
    telephoneIntelligent = await TelephoneIntelligentService.updateOne(telephoneIntelligent);
    return res.status(HttpStatusCodes.OK).json({ telephoneIntelligent: telephoneIntelligent });
}

/**
 * Supprime un téléphone intelligent par son id.
 * @param req - La requête HTTP reçue contenant l'id du téléphone intelligent à supprimer.
 * @param res - La réponse HTTP envoyée au client.
 */
async function delete_(req: IReq, res: IRes) {
    const id = req.params.id;
    await TelephoneIntelligentService.delete(id);
    return res.status(HttpStatusCodes.OK).end();
}

/**
 * Récupère tous les noms de compagnies de téléphones intelligents.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getAllCompagnies(_: IReq, res: IRes) {
    const compagnies = await TelephoneIntelligentService.getAllValeursByCleBd('nomCompagnie');
    return res.status(HttpStatusCodes.OK).json({ compagnies });
}

/**
 * Récupère les compagnies de téléphones intelligents qui sont épinglées pour la page d'accueil.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getPinnedCompagnies(_: IReq, res: IRes) {
    const compagniesEpinglees = await TelephoneIntelligentService.getPinnedCompagnies();
    return res.status(HttpStatusCodes.OK).json({ compagnies: compagniesEpinglees });
}

/**
 * Récupère tous les matériaux utilisés dans les téléphones intelligents.
 * @param res - La réponse HTTP envoyée au client.
 */
async function getAllMateriaux(_: IReq, res: IRes) {
    const materiaux = await TelephoneIntelligentService.getAllMateriaux();
    return res.status(HttpStatusCodes.OK).json({ materiaux });
}

// **** Export default **** //

export default {
    getAll,
    getById,
    getDixPlusRecents,
    getAllValeursByCleBd,
    getAllTelephonesIntelligentsFromCompagnie,
    getRecherche,
    add,
    update,
    delete: delete_,
    getAllCompagnies,
    getPinnedCompagnies,
    getAllMateriaux,
} as const;
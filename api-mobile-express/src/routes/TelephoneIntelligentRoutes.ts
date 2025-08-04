import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import TelephoneIntelligentService from '@src/services/TelephoneIntelligentService';
import { ITelephoneIntelligent } from '@src/models/TelephoneIntelligent';
import { IReq, IRes } from './types/express/misc';

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
async function getRecherche(req: IReq, res: IRes) {
    // Récupérer les filtres de recherche dans l'URL.
    const filtresRecherche = req.query;
    console.log('Filtres de recherche:', filtresRecherche);
    const telephonesIntelligents = await TelephoneIntelligentService.getRecherche(filtresRecherche);
    return res.status(HttpStatusCodes.OK).json({ telephonesIntelligents: telephonesIntelligents });
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
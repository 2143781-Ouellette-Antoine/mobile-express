import { NextFunction, Request, Response, Router } from 'express';
import jetValidator from 'jet-validator';
import { Types as MongooseTypes } from 'mongoose';
import Paths from '../constants/Paths';
import TelephoneIntelligentRoutes from './TelephoneIntelligentRoutes';
import TelephoneIntelligentModel from '@src/models/TelephoneIntelligent';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { DictionnaireFiltreRequete } from '@src/models/FiltresRecherche';
import { isBoolean } from 'util';

// **** Variables **** //

const validate = jetValidator();

/******************************************************************************
                                  Routeurs
      Les routeurs sont des conteneurs ou sous-conteneurs de routes de l'API.
******************************************************************************/

const apiRouter = Router(); // `/api`
const compagniesRouter = Router(); // `/api/compagnies`
const materiauxRouter = Router(); // `/api/materiaux`
const telephonesIntelligentsRouter = Router(); // `/api/telephones-intelligents`

// **** Functions **** //

/**
 * Valide les données d'un téléphone intelligent.
 * @param req - La requête HTTP reçue contenant les données du téléphone intelligent.
 * @param res - La réponse HTTP envoyée au client.
 * @param next - Méthode qui permet de passer au middleware suivant.
 */
function validateTelephoneIntelligent(req: Request, res: Response, next: NextFunction) {
    if (req.body === null) {
        res
            .status(HttpStatusCodes.BAD_REQUEST)
            .send({ error: 'Les données du téléphone intelligent doivent être dans un objet nommé "telephoneIntelligent".' })
            .end();
        return;
    }

    if (req.body.telephoneIntelligent === null) {
        res
            .status(HttpStatusCodes.BAD_REQUEST)
            .send({ error: 'Les données du téléphone intelligent ne peuvent pas être vides.' })
            .end();
        return;
    }

    // Récupérer les données du téléphone intelligent depuis le corps de la requête.
    const nouveauTelephoneIntelligent = new TelephoneIntelligentModel(req.body.telephoneIntelligent);
    // Valider le format des données reçues.
    const error = nouveauTelephoneIntelligent.validateSync();
    if (error !== null && error !== undefined) {
        res.status(HttpStatusCodes.BAD_REQUEST).send(error).end();
    } else {
        next();
    }
}

/**
 * Valide la présence d'un id valide dans le corps de la requête.
 * @param req - La requête HTTP reçue.
 * @param res - La réponse HTTP envoyée au client.
 * @param next - Méthode qui permet de passer au middleware suivant.
 */
function validateBodyHasId(req: Request, res: Response, next: NextFunction) {
    // S'il n'y a pas d'id.
    if (!req.body.telephoneIntelligent._id) {
        res.status(HttpStatusCodes.BAD_REQUEST).send({ error: 'L\'id du téléphone intelligent est requis.' }).end();
        return;
    }
    // Si l'id n'est pas un id MongoDB valide (ObjectId).
    if (!MongooseTypes.ObjectId.isValid(req.body.telephoneIntelligent._id)) {
        res.status(HttpStatusCodes.BAD_REQUEST).send({ error: 'L\'id du téléphone intelligent doit être un ObjectId valide.' }).end();
        return;
    }
    next();
}

/**
 * Valide la présence d'un id valide dans l'URL.
 * @param req - La requête HTTP reçue.
 * @param res - La réponse HTTP envoyée au client.
 * @param next - Méthode qui permet de passer au middleware suivant.
 */
function validateUrlHasId(req: Request, res: Response, next: NextFunction) {
    // S'il n'y a pas d'id.
    if (!req.params.id) {
        res.status(HttpStatusCodes.BAD_REQUEST).send({ error: 'L\'id du téléphone intelligent est requis.' }).end();
        return;
    }
    // Si l'id n'est pas un id MongoDB valide (ObjectId).
    if (!MongooseTypes.ObjectId.isValid(req.params.id)) {
        res.status(HttpStatusCodes.BAD_REQUEST).send({ error: 'L\'id du téléphone intelligent n\'a pas le format d\'un id MongoDB valide (ObjectId).' }).end();
        return;
    }
    next();
}

/**
 * Valide et convertit les filtres de recherche dans le corps de la requête.
 * @param req - La requête HTTP reçue.
 * @param res - La réponse HTTP envoyée au client.
 * @param next - Méthode qui permet de passer au middleware suivant.
 */
function validateFiltresRecherche(req: Request<{ body: Record<string, any> }>, res: Response, next: NextFunction) {
    // key: Nom du filtre dans la requête.
    // value: Valeur du filtre fournie dans la requête.
    // Boucler pour chaque filtre dans le corps de la requête.
    for (const [key, value] of Object.entries(req.body)) {
        // Récupérer les propriétés de ce filtre.
        const proprietesFiltre = DictionnaireFiltreRequete[key];
        // Si un filtre avec ce nom n'existe pas dans le dictionnaire, bloquer la requête.
        if (!proprietesFiltre) {
            return res.status(400).json({ error: `Filtre inconnu: '${key}'` });
        }

        // Actions selon le type de variable du filtre (qui a été défini dans le dictionnaire).
        switch (proprietesFiltre.type) {
            case "number":
                // Si la valeur n'est pas un nombre ou est un tableau de nombres, bloquer la requête.
                if (Array.isArray(value) || isNaN(Number(value))) {
                    return res.status(400).json({ error: `Le filtre '${key}' doit être un nombre.` });
                }
                // Écraser la valeur à la clé actuelle par la valeur convertie en nombre.
                req.body[key] = Number(value);
                break;

            case "boolean":
                // Si la valeur n'est pas true ou false, bloquer la requête.
                if (typeof value !== 'boolean') {
                    return res.status(400).json({ error: `Le filtre '${key}' doit être true ou false.` });
                }
                // Écraser la valeur à la clé actuelle par la valeur convertie en booléen.
                req.body[key] = value == true; // (value == "true") retourne un booléen.
                break;

            case "string":
                if (Array.isArray(value)) {
                    return res.status(400).json({ error: `Le filtre '${key}' doit être une chaîne de caractères.` });
                }
                break;

            case "array":
                if (typeof value === "string") {
                    // Séparer la chaîne de caractères en un tableau.
                    req.body[key] = value.split(","); // S'il n'y a qu'une valeur, ce sera un tableau de 1 élément.
                } else if (!Array.isArray(value)) {
                    // Si la valeur ne peut pas être convertie en tableau, bloquer la requête.
                    return res.status(400).json({ error: `Le filtre '${key}' doit être un tableau.` });
                }
                break;
        }
    }

    // Si la requête n'a pas été bloquée, passer à l'intergiciel suivant.
    next();
};

/******************************************************************************
                                    Routes
******************************************************************************/

// Get all
telephonesIntelligentsRouter.get(Paths.TelephonesIntelligents.GetAll, TelephoneIntelligentRoutes.getAll);
// Get by id
telephonesIntelligentsRouter.get(
    Paths.TelephonesIntelligents.GetById,
    validateUrlHasId,
    TelephoneIntelligentRoutes.getById
);
// Get dix plus récents
telephonesIntelligentsRouter.get(
    Paths.TelephonesIntelligents.GetDixPlusRecents,
    TelephoneIntelligentRoutes.getDixPlusRecents
);
// Get tous les téléphones d'une compagnie
telephonesIntelligentsRouter.get(
    Paths.TelephonesIntelligents.GetAllFromCompagnie,
    validate(['nomCompagnie', 'string', 'params']), // Valide le paramètre :nomCompagnie dans l'URL
    TelephoneIntelligentRoutes.getAllTelephonesIntelligentsFromCompagnie
);
// Get toutes les valeurs distinctes d'une clé de la base de données
telephonesIntelligentsRouter.get(
    Paths.TelephonesIntelligents.GetAllValeursByCleBd,
    validate(['cleBd', 'string', 'params']), // Valide le paramètre :cleBd dans l'URL
    TelephoneIntelligentRoutes.getAllValeursByCleBd
);
// Post recherche avec filtres
telephonesIntelligentsRouter.post(
    Paths.TelephonesIntelligents.GetRecherche,
    validateFiltresRecherche,
    TelephoneIntelligentRoutes.getRecherche
);
// Create
telephonesIntelligentsRouter.post(
    Paths.TelephonesIntelligents.Post,
    validateTelephoneIntelligent,
    TelephoneIntelligentRoutes.add
);
// Update
telephonesIntelligentsRouter.put(
    Paths.TelephonesIntelligents.Put,
    validateBodyHasId,
    validateTelephoneIntelligent,
    TelephoneIntelligentRoutes.update
);
// Delete
telephonesIntelligentsRouter.delete(
    Paths.TelephonesIntelligents.Delete,
    validateUrlHasId,
    TelephoneIntelligentRoutes.delete
);

// Get all compagnies de téléphones intelligents
compagniesRouter.get(Paths.Compagnies.GetAll, TelephoneIntelligentRoutes.getAllCompagnies);
// Get compagnies épinglées pour la page d'accueil
compagniesRouter.get(
    Paths.Compagnies.GetCompagniesEpingleesAccueil,
    TelephoneIntelligentRoutes.getPinnedCompagnies
);
// Get all matériaux
materiauxRouter.get(Paths.Materiaux.GetAll, TelephoneIntelligentRoutes.getAllMateriaux);

/******************************************************************************
                            Appliquer les routeurs
******************************************************************************/

// `compagniesRouter`, `materiauxRouter` et `telephonesIntelligentsRouter` sont à l'intérieur de `apiRouter`.
apiRouter.use(Paths.Compagnies.Base, compagniesRouter); // Sa base est `/compagnies`.
apiRouter.use(Paths.Materiaux.Base, materiauxRouter); // Sa base est `/materiaux`.
apiRouter.use(Paths.TelephonesIntelligents.Base, telephonesIntelligentsRouter); // Sa base est `/telephones-intelligents`.

// **** Export default **** //

export default apiRouter;
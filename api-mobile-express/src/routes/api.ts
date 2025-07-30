import { NextFunction, Request, Response, Router } from 'express';
import jetValidator from 'jet-validator';
import Paths from '../constants/Paths';
import TelephoneIntelligentRoutes from './TelephoneIntelligentRoutes';
import TelephoneIntelligentModel from '@src/models/TelephoneIntelligent';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

// **** Variables **** //

const validate = jetValidator();

/******************************************************************************
                                  Routeurs
      Les routeurs sont des conteneurs ou sous-conteneurs de routes de l'API.
******************************************************************************/

const apiRouter = Router(); // `/api`
const compagniesRouter = Router(); // `/api/compagnies`
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

/******************************************************************************
                                    Routes
******************************************************************************/

// Get all
telephonesIntelligentsRouter.get(Paths.TelephonesIntelligents.GetAll, TelephoneIntelligentRoutes.getAll);
// Get by id
telephonesIntelligentsRouter.get(
    Paths.TelephonesIntelligents.GetById,
    validate(['id', 'string', 'params']), // Valide le paramètre :id dans l'URL
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
// Get recherche avec filtres
// telephonesIntelligentsRouter.get(
//     Paths.TelephonesIntelligents.GetRecherche,
//     validateFiltresRecherche,
//     TelephoneIntelligentRoutes.getRecherche
// );
// Create
telephonesIntelligentsRouter.post(
    Paths.TelephonesIntelligents.Post,
    validateTelephoneIntelligent,
    TelephoneIntelligentRoutes.add
);
// Update
telephonesIntelligentsRouter.put(
    Paths.TelephonesIntelligents.Put,
    validateTelephoneIntelligent,
    TelephoneIntelligentRoutes.update
);
// Delete
telephonesIntelligentsRouter.delete(
    Paths.TelephonesIntelligents.Delete,
    validate(['id', 'string', 'params']), // Valide le paramètre :id dans l'URL
    TelephoneIntelligentRoutes.delete
);

// Get all compagnies de téléphones intelligents
compagniesRouter.get(Paths.Compagnies.GetAll, TelephoneIntelligentRoutes.getAllCompagnies);
// Get compagnies épinglées pour la page d'accueil
compagniesRouter.get(
    Paths.Compagnies.GetCompagniesEpingleesAccueil,
    TelephoneIntelligentRoutes.getPinnedCompagnies
);

/******************************************************************************
                            Appliquer les routeurs
******************************************************************************/

// `compagniesRouter`, `pucesRouter`, `certificationsResistanceEauRouter` et `telephonesIntelligentsRouter` sont à l'intérieur de `apiRouter`.
apiRouter.use(Paths.Compagnies.Base, compagniesRouter); // Sa base est `/compagnies`.
apiRouter.use(Paths.TelephonesIntelligents.Base, telephonesIntelligentsRouter); // Sa base est `/telephones-intelligents`.

// **** Export default **** //

export default apiRouter;
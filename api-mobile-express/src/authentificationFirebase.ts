import admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

var serviceAccount = require('../firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

/**
 * Intergiciel pour l'authentification Firebase pour les routes protégées.
 * Vérifie si le token d'authentification est présent dans l'en-tête de la requête.
 * Si le token est valide, passe à la prochaine fonction middleware.
 * Si le token est invalide ou manquant, renvoie une erreur 403 ou 401.
 * @param req La requête HTTP.
 * @param res La réponse HTTP.
 * @param next Méthode pour passer au middleware suivant.
 */
export const firebaseAuthentication = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    /**
     * Ignorer la vérification si la route ne fait pas partie des routes protégées:
     *  - POST /telephones-intelligents
     *  - PUT /telephones-intelligents
     *  - DELETE /telephones-intelligents/id/:id
     */
    if (
        !(
            // Si ne fait pas partie de cette liste.
            (req.method === 'POST' && req.path === '/telephones-intelligents') ||
            (req.method === 'PUT' && req.path === '/telephones-intelligents') ||
            (req.method === 'DELETE' && req.path.startsWith('/telephones-intelligents/id/'))
        )
    ) {
        // Passer par dessus la vérification de l'authentification.
        return next();
    }

    const authHeader = req.headers.authorization;
    console.log('body: ', req.body);
    console.log('start firebaseAuthentication');

    if (authHeader) {
        const idToken = authHeader.split(' ')[1];
        console.log('idToken:', idToken);

        admin
            .auth()
            .verifyIdToken(idToken)
            .then(function (decodedToken) {
                console.log('Next()');
                next();
            })
            .catch(function (error) {
                console.log('catch Error:', error);
                const errorMessage = {
                    error: error,
                };
                res.status(403).send(errorMessage);
                res.end();
            });
    } else {
        console.log('no header');
        const errorMessage = {
            error: 'Entête authorization manquante',
        };
        res.status(401).send(errorMessage);
    }
};
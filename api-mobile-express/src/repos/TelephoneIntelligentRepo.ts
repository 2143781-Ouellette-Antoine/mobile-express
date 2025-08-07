import logger from 'jet-logger';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { RouteError } from '@src/other/classes';
import TelephoneIntelligentModel, { ITelephoneIntelligent } from '@src/models/TelephoneIntelligent';

// **** Functions **** //

/**
 * Vérifie si un téléphone intelligent avec cet id existe dans la base de données.
 * @param id - L'id du téléphone intelligent à vérifier.
 * @returns {Promise<boolean>} true si le téléphone intelligent avec cet id existe, sinon false.
 */
async function persists(id: string): Promise<boolean> {
    try {
        const telephoneIntelligent = await TelephoneIntelligentModel.findById(id);
        return telephoneIntelligent !== null;
    } catch (error) {
        logger.err('Erreur lors de la vérification de l\'existence du téléphone intelligent:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la vérification de l\'existence du téléphone intelligent.');
    }
}

/**
 * Récupère tous les téléphones intelligents depuis la base de données.
 * @returns {Promise<ITelephoneIntelligent[]>} Un tableau contenant tous les téléphones intelligents.
 */
async function getAll(): Promise<ITelephoneIntelligent[]> {
    try {
        const telephonesIntelligents = await TelephoneIntelligentModel.find().sort({ dateSortie: -1 });
        return telephonesIntelligents;
    } catch (error) {
        logger.err('Erreur lors de la récupération des téléphones intelligents:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la récupération des téléphones intelligents.');
    }
}

/**
 * Récupère un téléphone intelligent par son id depuis la base de données.
 * @param id - L'id du téléphone intelligent à récupérer.
 * @returns {Promise<ITelephoneIntelligent | null>} Le téléphone intelligent correspondant à l'id, ou null si aucun téléphone n'est trouvé.
 */
async function getById(id: string): Promise<ITelephoneIntelligent | null> {
    try {
        const telephoneIntelligent = await TelephoneIntelligentModel.findById(id);
        return telephoneIntelligent;
    } catch (error) {
        logger.err('Erreur lors de la récupération du téléphone intelligent:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la récupération du téléphone intelligent.');
    }
}

/**
 * Récupère les 10 téléphones intelligents les plus récemment sortis depuis la base de données.
 * @returns {Promise<ITelephoneIntelligent[]>} Un tableau contenant les 10 téléphones intelligents les plus récemment sortis.
 */
async function getDixPlusRecents(): Promise<ITelephoneIntelligent[]> {
    try {
        const telephonesIntelligents = await TelephoneIntelligentModel.find().sort({ dateSortie: -1 }).limit(10);
        return telephonesIntelligents;
    } catch (error) {
        logger.err('Erreur lors de la récupération des téléphones intelligents les plus récemment sortis:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la récupération des téléphones intelligents les plus récemment sortis.');
    }
}

/**
 * Récupère tous les téléphones intelligents d'une compagnie depuis la base de données.
 * @param nomCompagnie - Le nom de la compagnie pour laquelle on veut récupérer les téléphones intelligents.
 * @returns {Promise<ITelephoneIntelligent[]>} Un tableau contenant tous les téléphones intelligents de la compagnie spécifiée.
 */
async function getAllTelephonesIntelligentsFromCompagnie(nomCompagnie: string): Promise<ITelephoneIntelligent[]> {
    try {
        const telephonesIntelligents = await TelephoneIntelligentModel.find({ 'nomCompagnie': nomCompagnie });
        return telephonesIntelligents;
    } catch (error) {
        logger.err(`Erreur lors de la récupération des téléphones intelligents de la compagnie:`, error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, `Une erreur interne est survenue lors de la récupération des téléphones intelligents de la compagnie.`);
    }
}

/**
 * Récupère toutes les valeurs distinctes de la clé passée en paramètre dans la base de données.
 * Par exemple, on peut récupérer toutes les valeurs distinctes de la clé "nomCompagnie".
 * @param {string} cleBd le nom de la clé dans la base de données pour laquelle on veut récupérer les valeurs distinctes.
 * @returns {Promise<string[]>} Un tableau contenant toutes les valeurs distinctes de la clé.
 */
async function getAllValeursByCleBd(cleBd: string): Promise<string[]> {
    try {
        // Récupérer les valeurs distinctes de cette clé dans la base de données.
        const valeursDistinctes = await TelephoneIntelligentModel.distinct(cleBd);

        // Trier les valeurs par ordre alphabétique en respectant les règles de la langue locale.
        const valeursTriees = valeursDistinctes.sort(
            // La méthode .sort() accepte une méthode de comparaison personnalisée.
            // La méthode de comparaison personnalisée compare deux valeurs à la fois.
            // Les deux valeurs sont comparées avec localeCompare() qui prend en compte
            // les règles de la langue locale comme les accents.
            (valeurA, valeurB) => valeurA.localeCompare(valeurB, 'fr-CA')
        );

        return valeursTriees;
    } catch (error) {
        logger.err('Erreur lors de la récupération de toutes les valeurs distinctes de cette clé:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la récupération de toutes les valeurs distinctes de cette clé.');
    }
}

/**
 * Retourne les téléphones intelligents qui respectent les critères de recherche.
 * @param {Record<string, any>} requeteMongoDB La requête MongoDB à exécuter.
 * @return {Promise<ITelephoneIntelligent[]>} Un tableau des téléphones intelligents qui correspondent
 * aux filtres de recherche.
 */
async function getRecherche(requeteMongoDB: Record<string, any>): Promise<ITelephoneIntelligent[]> {
    try {
        const telephonesIntelligents = await TelephoneIntelligentModel.find(requeteMongoDB);
        return telephonesIntelligents;
    } catch (error) {
        logger.err('Erreur lors de la recherche de téléphones intelligents:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la recherche de téléphones intelligents.');
    }
}

/**
 * Ajoute un téléphone intelligent dans la base de données.
 * @param telephoneIntelligent - L'objet téléphone intelligent à ajouter.
 * @returns {Promise<ITelephoneIntelligent>} Le téléphone intelligent ajouté.
 */
async function add(telephoneIntelligent: ITelephoneIntelligent): Promise<ITelephoneIntelligent> {
    try {
        const nouveauTelephoneIntelligent = new TelephoneIntelligentModel(telephoneIntelligent);
        await nouveauTelephoneIntelligent.save();
        return nouveauTelephoneIntelligent;
    } catch (error) {
        logger.err('Erreur lors de la création du téléphone intelligent:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la création du téléphone intelligent.');
    }
}

/**
 * Met à jour un téléphone intelligent dans la base de données.
 * @param telephoneIntelligent - L'objet téléphone intelligent contenant les nouvelles données.
 * @returns {Promise<ITelephoneIntelligent>} Le téléphone intelligent mis à jour.
 */
async function update(telephoneIntelligent: ITelephoneIntelligent): Promise<ITelephoneIntelligent> {
    try {
        const telephoneIntelligentToUpdate = await TelephoneIntelligentModel.findById(telephoneIntelligent._id);
        if (telephoneIntelligentToUpdate === null) {
            throw new RouteError(HttpStatusCodes.NOT_FOUND, 'Téléphone intelligent non trouvé');
        }

        telephoneIntelligentToUpdate.nom = telephoneIntelligent.nom;
        telephoneIntelligentToUpdate.nomCompagnie = telephoneIntelligent.nomCompagnie;
        telephoneIntelligentToUpdate.dateSortie = telephoneIntelligent.dateSortie;
        telephoneIntelligentToUpdate.hauteurMm = telephoneIntelligent.hauteurMm;
        telephoneIntelligentToUpdate.largeurMm = telephoneIntelligent.largeurMm;
        telephoneIntelligentToUpdate.epaisseurMm = telephoneIntelligent.epaisseurMm;
        telephoneIntelligentToUpdate.poidsG = telephoneIntelligent.poidsG;
        telephoneIntelligentToUpdate.materiauAvant = telephoneIntelligent.materiauAvant;
        telephoneIntelligentToUpdate.materiauArriere = telephoneIntelligent.materiauArriere;
        telephoneIntelligentToUpdate.materiauCadre = telephoneIntelligent.materiauCadre;
        telephoneIntelligentToUpdate.resistanceEau = telephoneIntelligent.resistanceEau;
        telephoneIntelligentToUpdate.technologieEcran = telephoneIntelligent.technologieEcran;
        telephoneIntelligentToUpdate.tailleEcranPouces = telephoneIntelligent.tailleEcranPouces;
        telephoneIntelligentToUpdate.resolutionEcranLargeurPixels = telephoneIntelligent.resolutionEcranLargeurPixels;
        telephoneIntelligentToUpdate.resolutionEcranHauteurPixels = telephoneIntelligent.resolutionEcranHauteurPixels;
        telephoneIntelligentToUpdate.tauxRafraichissementEcranHz = telephoneIntelligent.tauxRafraichissementEcranHz;
        telephoneIntelligentToUpdate.nomPuce = telephoneIntelligent.nomPuce;
        telephoneIntelligentToUpdate.vitessePuceGhz = telephoneIntelligent.vitessePuceGhz;
        telephoneIntelligentToUpdate.descriptionCoeursPuce = telephoneIntelligent.descriptionCoeursPuce;
        telephoneIntelligentToUpdate.nomGraphiquesPuce = telephoneIntelligent.nomGraphiquesPuce;
        telephoneIntelligentToUpdate.technologieStockage = telephoneIntelligent.technologieStockage;
        telephoneIntelligentToUpdate.systemeExploitation = telephoneIntelligent.systemeExploitation;
        telephoneIntelligentToUpdate.maxVersionSystemeExploitation = telephoneIntelligent.maxVersionSystemeExploitation;
        telephoneIntelligentToUpdate.modelePortUsb = telephoneIntelligent.modelePortUsb;
        telephoneIntelligentToUpdate.possedeRechargeSansFil = telephoneIntelligent.possedeRechargeSansFil;
        telephoneIntelligentToUpdate.capaciteBatterieMah = telephoneIntelligent.capaciteBatterieMah;
        telephoneIntelligentToUpdate.typeAuthentification = telephoneIntelligent.typeAuthentification;
        telephoneIntelligentToUpdate.possedeNfc = telephoneIntelligent.possedeNfc;
        telephoneIntelligentToUpdate.possedePortAudio = telephoneIntelligent.possedePortAudio;
        telephoneIntelligentToUpdate.possedeCarteMicroSD = telephoneIntelligent.possedeCarteMicroSD;
        telephoneIntelligentToUpdate.generationReseauMobile = telephoneIntelligent.generationReseauMobile;
        telephoneIntelligentToUpdate.descriptionCartesSim = telephoneIntelligent.descriptionCartesSim;
        telephoneIntelligentToUpdate.urlImagePrincipale = telephoneIntelligent.urlImagePrincipale;
        await telephoneIntelligentToUpdate.save();
        return telephoneIntelligentToUpdate;
    } catch (error) {
        logger.err('Erreur lors de la mise à jour du téléphone intelligent:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la mise à jour du téléphone intelligent.');
    }
}

/**
 * Supprime un téléphone intelligent par son id de la base de données.
 * @param id - L'id du téléphone intelligent à supprimer.
 */
async function delete_(id: string): Promise<void> {
    try {
        await TelephoneIntelligentModel.findByIdAndDelete(id);
    } catch (error) {
        logger.err('Erreur lors de la suppression du téléphone intelligent:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la suppression du téléphone intelligent.');
    }
}

/**
 * Récupère les compagnies de téléphones intelligents qui sont épinglées pour la page d'accueil depuis la base de données.
 * @returns {Promise<string[]>} Un tableau contenant les noms des compagnies de téléphones intelligents qui sont épinglées pour la page d'accueil.
 */
async function getPinnedCompagnies(): Promise<string[]> {
    try {
        // Retourne un tableau contenant un objet par compagnie.
        // On commence par les compagnies épinglées, puis si il y a moins de 6 compagnies épinglées,
        // on ajoute d'autres compagnies.
        const compagnies = await TelephoneIntelligentModel.aggregate([
            { $group: { _id: "$nomCompagnie" } },
            { $sort: { compagnieEstEpinglee: 1, _id: 1 } }, // _id équivaut à $nomCompagnie de l'étape précédente de l'agrégation.
            { $limit: 6 },
            { $project: { _id: 0, nomCompagnie: "$_id" } } // Seulement afficher le champs nomCompagnie dans chaque objet.
        ]).exec();
        // On construit un tableau de chaines de caractères avec les propriétés nomCompagnie de chaque objet.
        return compagnies.map(compagnie => compagnie.nomCompagnie);
    } catch (error) {
        logger.err('Erreur lors de la récupération des compagnies épinglées:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la récupération des compagnies épinglées.');
    }
}

/**
 * Récupère tous les matériaux utilisés dans les téléphones intelligents.
 * @returns {Promise<string[]>} Un tableau contenant tous les matériaux utilisés dans les téléphones intelligents.
 * 
 * Explications détaillées:
 * 
 * Échantillon:
 * [
 *     { "materiauAvant": "verre", "materiauArriere": "plastique", "materiauCadre": "aluminium" },
 *     { "materiauAvant": "plastique", "materiauArriere": "verre", "materiauCadre": "aluminium" },
 *     { "materiauAvant": "verre", "materiauArriere": "verre", "materiauCadre": "plastique" }
 * ]
 * 
 * Étape 1 : $project avec $setUnion
 * $setUnion veut dire faire une union d'une liste de champs.
 * Donc, ici, on combine, pour chaque rangée, les valeurs des 3 champs "materiauAvant", "materiauArriere" et "materiauCadre"
 * dans un tableau.
 * [
 *     { "materiaux": ["verre", "plastique", "aluminium"] },
 *     { "materiaux": ["plastique", "verre", "aluminium"] },
 *     { "materiaux": ["verre", "plastique"] }
 * ]
 * On voit que les doublons ont été éliminés. Dans la troisième rangée, il y a seulement 2 matériaux.
 * 
 * Étape 2 : $unwind
 * $unwind permet de déballer les tableaux selon le nom du champ.
 * Donc, tous les tableaux associés à un champ nommé "materiaux" sont déballées.
 * Ce qui fait en sorte que les données sont seules et ne sont plus dans des tableaux.
 * [
 *     { "materiaux": "verre" },
 *     { "materiaux": "plastique" },
 *     { "materiaux": "aluminium" },
 *     { "materiaux": "plastique" },
 *     { "materiaux": "verre" },
 *     { "materiaux": "aluminium" },
 *     { "materiaux": "verre" },
 *     { "materiaux": "plastique" }
 * ]
 * Donc, on a mis toutes les données une au-dessus de l'autre.
 * 
 * Étape 3 : $group avec $addToSet
 * Maintenant qu'on a une liste de tous les matériaux, mais qu'il y a des doublons,
 * on va regrouper toutes les valeurs ensemble (qui ont le nom de champ "materiaux") dans un champ "distinctMateriaux",
 * mais en utilisant $addToSet pour ajouter seulement les valeurs uniques dans le tableau résultant.
 * {
 *     "distinctMateriaux": ["verre", "plastique", "aluminium"]
 * }
 * 
 * Étape 4 : $project
 * On veut seulement afficher le tableau de matériaux, pas l'id.
 * MongoDB affiche toujours un id par défaut.
 * On veut renommer le champ "distinctMateriaux" par "materiaux".
 * {
 *     "materiaux": ["verre", "plastique", "aluminium"]
 * }
 * 
 * Étape 5 : $unwind
 * Déballer le tableau "valeur" pour séparer les matériaux.
 * [
 *     { "valeur": "verre" },
 *     { "valeur": "plastique" },
 *     { "valeur": "aluminium" }
 * ]
 * Il reste seulement des objets « matériau » avec un champ "valeur" qu'on va mapper.
 */
async function getAllMateriaux(): Promise<string[]> {
    try {
        // Récupérer les valeurs distinctes des 3 champs matériaux combinés dans la base de données.
        const listeObjetsMateriaux = await TelephoneIntelligentModel.aggregate([
            {
                $project: {
                    // Projeter un nouveau champs appelé "materiaux" qui est un tableau des valeurs des 3 champs matériaux combinées.
                    materiaux: {
                        /**
                         * $setUnion permet d'éviter les doublons à l'intérieur de materiauAvant, materiauArriere
                         * et materiauCadre distinctivement.
                         *
                         * Exemple, s'il y a plusieurs valeurs identiques pour le champs materiauAvant,
                         * $setUnion s'assure qu'elles ne sont ajoutées qu'une seule fois dans le tableau combiné.
                         * 
                         * On combine les valeurs des 3 champs matériaux dans un tableau.
                         * 
                         * $setUnion s'attend à recevoir un tableau des unions à créer.
                         * Chaque union est un tableau des champs à combiner.
                         *
                         * ($ifNull s'assure que si un champ est null, il est remplacé par un tableau vide pour éviter
                         * les erreurs. La méthode s'attend à un type de retour qui est un tableau, pas null.)
                         */
                        $setUnion: [
                            // Première union. Je n'ai qu'une union.
                            // Combiner "materiauAvant", "materiauArriere" et "materiauCadre".
                            [
                                { $ifNull: ["$materiauAvant", []] },
                                { $ifNull: ["$materiauArriere", []] },
                                { $ifNull: ["$materiauCadre", []] }
                            ]
                            // Il y aurait d'autres unions ici, dans ce tableau si j'en avais d'autres.
                        ]
                    }
                }
            },
            // Déballer le tableau créé pour faire un document par matériau.
            { $unwind: "$materiaux" },
            // Grouper les matériaux.
            // $addToSet retourne un tableau de toutes les valeurs uniques pour le champ "materiaux".
            { $group: { _id: null, distinctMateriaux: { $addToSet: "$materiaux" } } },
            // Enlever le champ _id dans chaque objet Materiau et
            // renommer le champ "distinctMateriaux" en "valeur".
            { $project: { _id: 0, valeur: "$distinctMateriaux" } },
            //
            { $unwind: "$valeur" }
        ]);

        // Extraire la valeur dans le champ "valeur" de chaque objet et construire un tableau
        // de chaînes de caractères.
        // En d'autres mots, créer un tableau des valeurs en bouclant les objets de listeObjetsMateriaux.
        const listeMateriaux = listeObjetsMateriaux.map(objet => objet.valeur);

        // Trier les matériaux par ordre alphabétique en respectant les règles de la langue locale.
        const materiauxTries = listeMateriaux.sort(
            // La méthode .sort() accepte une méthode de comparaison personnalisée.
            // La méthode de comparaison personnalisée compare deux valeurs à la fois.
            // Les deux valeurs sont comparées avec localeCompare() qui prend en compte
            // les règles de la langue locale comme les accents.
            (materiauA, materiauB) => materiauA.localeCompare(materiauB, 'fr-CA')
        );

        return materiauxTries;
    } catch (error) {
        logger.err('Erreur lors de la récupération de tous les matériaux:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la récupération de tous les matériaux.');
    }
}

// **** Export default **** //

export default {
    persists,
    getAll,
    getById,
    getDixPlusRecents,
    getAllValeursByCleBd,
    getAllTelephonesIntelligentsFromCompagnie,
    getRecherche,
    add,
    update,
    delete: delete_,
    getPinnedCompagnies,
    getAllMateriaux,
} as const;
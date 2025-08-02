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
 * Récupère tous les noms de compagnies de téléphones intelligents depuis la base de données.
 * @returns {Promise<string[]>} Un tableau contenant les noms de toutes les compagnies de téléphones intelligents.
 */
async function getAllCompagnies(): Promise<string[]> {
    try {
        const compagnies = await TelephoneIntelligentModel.distinct('nomCompagnie').sort({ nomCompagnie: 1 });
        return compagnies;
    } catch (error) {
        logger.err('Erreur lors de la récupération des compagnies de téléphones intelligents:', error);
        throw new RouteError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'Une erreur interne est survenue lors de la récupération des compagnies de téléphones intelligents.');
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
 * Retourne les téléphones intelligents qui respectent les critères de recherche.
 * @param filtresRecherche - Un objet contenant les filtres de recherche.
 * @return {Promise<ITelephoneIntelligent[]>} Un tableau des téléphones intelligents qui correspondent aux filtres de recherche.
 */
async function getRecherche(filtresRecherche: any): Promise<ITelephoneIntelligent[]> {
    try {
        const telephonesIntelligents = await TelephoneIntelligentModel.find(filtresRecherche);
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

// **** Export default **** //

export default {
    persists,
    getAll,
    getById,
    getDixPlusRecents,
    getAllCompagnies,
    getPinnedCompagnies,
    getAllTelephonesIntelligentsFromCompagnie,
    getRecherche,
    add,
    update,
    delete: delete_,
} as const;
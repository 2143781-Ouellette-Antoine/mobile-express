import TelephoneIntelligentRepo from '@src/repos/TelephoneIntelligentRepo';
import { ITelephoneIntelligent } from '@src/models/TelephoneIntelligent';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

// **** Variables **** //

export const TELEPHONE_INTELLIGENT_NOT_FOUND_ERR = 'Téléphone intelligent non trouvé';

// **** Functions **** //

/**
 * Récupère tous les téléphones intelligents.
 * @returns {Promise<ITelephoneIntelligent[]>} Un tableau contenant tous les téléphones intelligents.
 */
function getAll(): Promise<ITelephoneIntelligent[]> {
    return TelephoneIntelligentRepo.getAll();
}

/**
 * Récupère un téléphone intelligent par son id.
 * @param id - L'id du téléphone intelligent à récupérer.
 * @returns {Promise<ITelephoneIntelligent | null>} Le téléphone intelligent correspondant à l'id, ou null si aucun téléphone n'est trouvé.
 */
async function getById(id: string): Promise<ITelephoneIntelligent | null> {
    const persists = await TelephoneIntelligentRepo.persists(id);
    if (!persists) {
        throw new RouteError(HttpStatusCodes.NOT_FOUND, TELEPHONE_INTELLIGENT_NOT_FOUND_ERR);
    }

    return TelephoneIntelligentRepo.getById(id);
}

/**
 * Récupère les 10 téléphones intelligents les plus récemment sortis.
 * @returns {Promise<ITelephoneIntelligent[]>} Un tableau contenant les 10 téléphones intelligents les plus récemment sortis.
 */
function getDixPlusRecents(): Promise<ITelephoneIntelligent[]> {
    return TelephoneIntelligentRepo.getDixPlusRecents();
}

/**
 * Récupère tous les téléphones intelligents d'une compagnie.
 * @param nomCompagnie - Le nom de la compagnie pour laquelle on veut récupérer les téléphones intelligents.
 * @returns {Promise<ITelephoneIntelligent[]>} Un tableau contenant tous les téléphones intelligents de la compagnie spécifiée.
 */
function getAllTelephonesIntelligentsFromCompagnie(nomCompagnie: string): Promise<ITelephoneIntelligent[]> {
    return TelephoneIntelligentRepo.getAllTelephonesIntelligentsFromCompagnie(nomCompagnie);
}

/**
 * Récupère toutes les valeurs distinctes de la clé passée en paramètre dans la base de données.
 * Par exemple, on peut récupérer toutes les valeurs distinctes de la clé "nomCompagnie".
 * @param {string} cleBd le nom de la clé dans la base de données pour laquelle on veut récupérer les valeurs distinctes.
 * @returns {Promise<string[]>} Un tableau contenant toutes les valeurs distinctes de la clé.
 */
function getAllValeursByCleBd(cleBd: string): Promise<string[]> {
    return TelephoneIntelligentRepo.getAllValeursByCleBd(cleBd);
}

/**
 * Retourne les téléphones intelligents qui respectent les critères de recherche.
 * @param {Record<string, any>} query - La requête MongoDB à exécuter.
 * @return {Promise<ITelephoneIntelligent[]>} Un tableau des téléphones intelligents qui correspondent aux filtres de recherche.
 */
function getRecherche(query: Record<string, any>): Promise<ITelephoneIntelligent[]> {
    return TelephoneIntelligentRepo.getRecherche(query);
}

/**
 * Ajoute un téléphone intelligent.
 * @param telephoneIntelligent - L'objet téléphone intelligent à ajouter.
 * @returns {Promise<ITelephoneIntelligent>} Le téléphone intelligent ajouté.
 */
async function addOne(telephoneIntelligent: ITelephoneIntelligent): Promise<ITelephoneIntelligent> {
    return TelephoneIntelligentRepo.add(telephoneIntelligent);
}

/**
 * Met à jour un téléphone intelligent.
 * @param telephoneIntelligent - L'objet téléphone intelligent contenant les nouvelles données.
 * @returns {Promise<ITelephoneIntelligent>} Le téléphone intelligent mis à jour.
 */
async function updateOne(telephoneIntelligent: ITelephoneIntelligent): Promise<ITelephoneIntelligent> {
    return TelephoneIntelligentRepo.update(telephoneIntelligent);
}

/**
 * Supprime un téléphone intelligent par son id.
 * @param id - L'id du téléphone intelligent à supprimer.
 */
async function _delete(id: string): Promise<void> {
    const persists = await TelephoneIntelligentRepo.persists(id);
    if (!persists) {
        throw new RouteError(HttpStatusCodes.NOT_FOUND, TELEPHONE_INTELLIGENT_NOT_FOUND_ERR);
    }
    return TelephoneIntelligentRepo.delete(id);
}

/**
 * Récupère les compagnies de téléphones intelligents qui sont épinglées pour la page d'accueil.
 * @returns {Promise<string[]>} Un tableau contenant les noms des compagnies de téléphones intelligents qui sont épinglées pour la page d'accueil.
 */
function getPinnedCompagnies(): Promise<string[]> {
    return TelephoneIntelligentRepo.getPinnedCompagnies();
}

/**
 * Récupère tous les matériaux utilisés dans les téléphones intelligents.
 * @returns {Promise<string[]>} Un tableau contenant tous les matériaux utilisés dans les téléphones intelligents.
 */
function getAllMateriaux(): Promise<string[]> {
    return TelephoneIntelligentRepo.getAllMateriaux();
}

// **** Export default **** //

export default {
    getAll,
    getById,
    getDixPlusRecents,
    getAllValeursByCleBd,
    getAllTelephonesIntelligentsFromCompagnie,
    getRecherche,
    addOne,
    updateOne,
    delete: _delete,
    getPinnedCompagnies,
    getAllMateriaux,
} as const;
/**
 * Objet représentant les filtres de recherche dans une requête
 * de recherche de téléphones intelligents.
 * 
 * @property {string} nom - Le texte a rechercher dans le nom du téléphone intelligent.
 * @property {string[]} nomsCompagnies - Les noms des compagnies de téléphones intelligents sélectionnées.
 * @property {number} minAnneeSortie - L'année de sortie minimum sélectionnée.
 * @property {number} maxAnneeSortie - L'année de sortie maximum sélectionnée.
 * @property {number} minHauteurMm - La hauteur minimale en millimètres sélectionnée.
 * @property {number} maxHauteurMm - La hauteur maximale en millimètres sélectionnée.
 * @property {number} minLargeurMm - La largeur minimale en millimètres sélectionnée.
 * @property {number} maxLargeurMm - La largeur maximale en millimètres sélectionnée.
 * @property {number} minEpaisseurMm - L'épaisseur minimale en millimètres sélectionnée.
 * @property {number} maxEpaisseurMm - L'épaisseur maximale en millimètres sélectionnée.
 * @property {number} minPoidsG - Le poids minimum en grammes sélectionné.
 * @property {number} maxPoidsG - Le poids maximum en grammes sélectionné.
 * @property {string[]} materiauxAvants - Les matériaux de l'avant du téléphone intelligent sélectionnés.
 * @property {string[]} materiauxArrieres - Les matériaux de l'arrière du téléphone intelligent sélectionnés.
 * @property {string[]} materiauxCadres - Les matériaux du cadre du téléphone intelligent sélectionnés.
 * @property {string[]} resistancesEau - Les certifications de résistance à l'eau sélectionnées.
 * @property {string[]} technologiesEcran - Les technologies de l'écran sélectionnées.
 * @property {number} minTailleEcranPouces - La taille minimum de l'écran en pouces sélectionnée.
 * @property {number} maxTailleEcranPouces - La taille maximum de l'écran en pouces sélectionnée.
 * @property {number} minResolutionEcranLargeurPixels - La résolution de l'écran en largeur en pixels sélectionnée.
 * @property {number} maxResolutionEcranLargeurPixels - La résolution de l'écran en largeur en pixels sélectionnée.
 * @property {number} minResolutionEcranHauteurPixels - La résolution de l'écran en hauteur en pixels sélectionnée.
 * @property {number} maxResolutionEcranHauteurPixels - La résolution de l'écran en hauteur en pixels sélectionnée.
 * @property {number} minTauxRafraichissementEcranHz - Le taux de rafraîchissement minimum de l'écran en hertz sélectionné.
 * @property {number} maxTauxRafraichissementEcranHz - Le taux de rafraîchissement maximum de l'écran en hertz sélectionné.
 * @property {string[]} nomsPuces - Les noms des puces sélectionnés.
 * @property {number} minVitessePuceGhz - La vitesse minimum de la puce en gigahertz sélectionnée.
 * @property {number} maxVitessePuceGhz - La vitesse maximum de la puce en gigahertz sélectionnée.
 * @property {string[]} technologiesStockages - Les technologies de stockage sélectionnées.
 * @property {string[]} systemesExploitations - Les systèmes d'exploitation sélectionnés.
 * @property {number} minVersionSystemeExploitation - La version minimum du système d'exploitation actuellement supportée sélectionnée.
 * @property {string[]} modelesPortsUsb - Les modèles de ports USB sélectionnés.
 * @property {boolean} possedeRechargeSansFil - Indique si le téléphone intelligent doit posséder la recharge sans fil.
 * @property {number} minCapaciteBatterieMah - La capacité minimum de la batterie en milliampères-heure sélectionnée.
 * @property {number} maxCapaciteBatterieMah - La capacité maximum de la batterie en milliampères-heure sélectionnée.
 * @property {string[]} typesAuthentification - Les types d'authentification sélectionnés.
 * @property {boolean} possedeNfc - Indique si le téléphone intelligent doit posséder la technologie NFC.
 * @property {boolean} possedePortAudio - Indique si le téléphone intelligent doit posséder un port audio pour écouteurs.
 * @property {number} generationReseauMobile - Le numéro de la génération du réseau mobile sélectionné.
 */
// export interface IFiltresRecherche {
//     nom?: string;
//     nomsCompagnies?: string[];
//     minAnneeSortie?: number;
//     maxAnneeSortie?: number;
//     minHauteurMm?: number;
//     maxHauteurMm?: number;
//     minLargeurMm?: number;
//     maxLargeurMm?: number;
//     minEpaisseurMm?: number;
//     maxEpaisseurMm?: number;
//     minPoidsG?: number;
//     maxPoidsG?: number;
//     materiauxAvants?: string[];
//     materiauxArrieres?: string[];
//     materiauxCadres?: string[];
//     resistancesEau?: string[];
//     technologiesEcran?: string[];
//     minTailleEcranPouces?: number;
//     maxTailleEcranPouces?: number;
//     minResolutionEcranLargeurPixels?: number;
//     maxResolutionEcranLargeurPixels?: number;
//     minResolutionEcranHauteurPixels?: number;
//     maxResolutionEcranHauteurPixels?: number;
//     minTauxRafraichissementEcranHz?: number;
//     maxTauxRafraichissementEcranHz?: number;
//     nomsPuces?: string[];
//     minVitessePuceGhz?: number;
//     maxVitessePuceGhz?: number;
//     technologiesStockages?: string[];
//     systemesExploitations?: string[];
//     minVersionSystemeExploitation?: number;
//     modelesPortsUsb?: string[];
//     possedeRechargeSansFil?: boolean;
//     minCapaciteBatterieMah?: number;
//     maxCapaciteBatterieMah?: number;
//     typesAuthentification?: string[];
//     possedeNfc?: boolean;
//     possedePortAudio?: boolean;
//     generationReseauMobile?: number;
// }

/**
 * Dictionnaire des associations entre les noms des filtres et les requêtes MongoDB.
 */
// export const DictionnaireFiltresRecherche: { [key: string]: any } = {
//     "nom": { "field": "nom", "$regex": "" },
//     "nomsCompagnies": { "field": "nomCompagnie", "$in": [] },
//     "minAnneeSortie": { "field": "anneeSortie", "$gte": 0 },
//     "maxAnneeSortie": { "field": "anneeSortie", "$lte": 0 },
//     "minHauteurMm": { "field": "hauteurMm", "$gte": 0 },
//     "maxHauteurMm": { "field": "hauteurMm", "$lte": 0 },
//     "minLargeurMm": { "field": "largeurMm", "$gte": 0 },
//     "maxLargeurMm": { "field": "largeurMm", "$lte": 0 },
//     "minEpaisseurMm": { "field": "epaisseurMm", "$gte": 0 },
//     "maxEpaisseurMm": { "field": "epaisseurMm", "$lte": 0 },
//     "minPoidsG": { "field": "poidsG", "$gte": 0 },
//     "maxPoidsG": { "field": "poidsG", "$lte": 0 },
//     "materiauxAvants": { "field": "materiauAvant", "$in": [] },
//     "materiauxArrieres": { "field": "materiauArriere", "$in": [] },
//     "materiauxCadres": { "field": "materiauCadre", "$in": [] },
//     "resistancesEau": { "field": "resistanceEau", "$in": [] },
//     "technologiesEcran": { "field": "technologieEcran", "$in": [] },
//     "minTailleEcranPouces": { "field": "tailleEcranPouces", "$gte": 0 },
//     "maxTailleEcranPouces": { "field": "tailleEcranPouces", "$lte": 0 },
//     "minResolutionEcranLargeurPixels": { "field": "resolutionEcranLargeurPixels", "$gte": 0 },
//     "maxResolutionEcranLargeurPixels": { "field": "resolutionEcranLargeurPixels", "$lte": 0 },
//     "minResolutionEcranHauteurPixels": { "field": "resolutionEcranHauteurPixels", "$gte": 0 },
//     "maxResolutionEcranHauteurPixels": { "field": "resolutionEcranHauteurPixels", "$lte": 0 },
//     "minTauxRafraichissementEcranHz": { "field": "tauxRafraichissementEcranHz", "$gte": 0 },
//     "maxTauxRafraichissementEcranHz": { "field": "tauxRafraichissementEcranHz", "$lte": 0 },
//     "nomsPuces": { "field": "nomPuce", "$in": [] },
//     "minVitessePuceGhz": { "field": "vitessePuceGhz", "$gte": 0 },
//     "maxVitessePuceGhz": { "field": "vitessePuceGhz", "$lte": 0 },
//     "technologiesStockages": { "field": "technologieStockage", "$in": [] },
//     "systemesExploitations": { "field": "systemeExploitation", "$in": [] },
//     "minVersionSystemeExploitation": { "field": "versionSystemeExploitation", "$gte": 0 },
//     "modelesPortsUsb": { "field": "modelePortUsb", "$in": [] },
//     "possedeRechargeSansFil": { "field": "possedeRechargeSansFil", "$eq": false },
//     "minCapaciteBatterieMah": { "field": "capaciteBatterieMah", "$gte": 0 },
//     "maxCapaciteBatterieMah": { "field": "capaciteBatterieMah", "$lte": 0 },
//     "typesAuthentification": { "field": "typeAuthentification", "$in": [] },
//     "possedeNfc": { "field": "possedeNfc", "$eq": false },
//     "possedePortAudio": { "field": "possedePortAudio", "$eq": false },
//     "generationReseauMobile": { "field": "generationReseauMobile", "$eq": 0 }
// };

/**
 * Types pour les opérateurs de requête MongoDB.
 */
type QueryOperator = "$eq" | "$in" | "$gte" | "$lte" | "$regex";

/**
 * Types pour les filtres.
 */
export type FilterType = "string" | "number" | "boolean" | "array";

/**
 * Définition d'un filtre de recherche.
 * @property {string} champDansBd - Le champ de la base de données.
 * @property {QueryOperator} operator - L'opérateur de requête MongoDB.
 * @property {FilterType} type - Le type du filtre.
 * @property {boolean} [isRegex] - Indique si l'opérateur est une expression régulière.
 */
export type FilterProperties = {
    nomChampBd: string;
    operator: QueryOperator;
    type: FilterType;
};

/**
 * Dictionnaire des associations entre les noms des filtres et les requêtes MongoDB.
 */
export const DictionnaireFiltreRequete: Record<string, FilterProperties> = {
    nom: { nomChampBd: "nom", operator: "$regex", type: "string" },
    nomsCompagnies: { nomChampBd: "nomCompagnie", operator: "$in", type: "array" },
    minHauteurMm: { nomChampBd: "hauteurMm", operator: "$gte", type: "number" },
    maxHauteurMm: { nomChampBd: "hauteurMm", operator: "$lte", type: "number" },
    minLargeurMm: { nomChampBd: "largeurMm", operator: "$gte", type: "number" },
    maxLargeurMm: { nomChampBd: "largeurMm", operator: "$lte", type: "number" },
    minEpaisseurMm: { nomChampBd: "epaisseurMm", operator: "$gte", type: "number" },
    maxEpaisseurMm: { nomChampBd: "epaisseurMm", operator: "$lte", type: "number" },
    minPoidsG: { nomChampBd: "poidsG", operator: "$gte", type: "number" },
    maxPoidsG: { nomChampBd: "poidsG", operator: "$lte", type: "number" },
    materiauxAvants: { nomChampBd: "materiauAvant", operator: "$in", type: "array" },
    materiauxArrieres: { nomChampBd: "materiauArriere", operator: "$in", type: "array" },
    materiauxCadres: { nomChampBd: "materiauCadre", operator: "$in", type: "array" },
    resistancesEau: { nomChampBd: "resistanceEau", operator: "$in", type: "array" },
    technologiesEcran: { nomChampBd: "technologieEcran", operator: "$in", type: "array" },
    minTailleEcranPouces: { nomChampBd: "tailleEcranPouces", operator: "$gte", type: "number" },
    maxTailleEcranPouces: { nomChampBd: "tailleEcranPouces", operator: "$lte", type: "number" },
    minResolutionEcranLargeurPixels: { nomChampBd: "resolutionEcranLargeurPixels", operator: "$gte", type: "number" },
    maxResolutionEcranLargeurPixels: { nomChampBd: "resolutionEcranLargeurPixels", operator: "$lte", type: "number" },
    minResolutionEcranHauteurPixels: { nomChampBd: "resolutionEcranHauteurPixels", operator: "$gte", type: "number" },
    maxResolutionEcranHauteurPixels: { nomChampBd: "resolutionEcranHauteurPixels", operator: "$lte", type: "number" },
    minTauxRafraichissementEcranHz: { nomChampBd: "tauxRafraichissementEcranHz", operator: "$gte", type: "number" },
    maxTauxRafraichissementEcranHz: { nomChampBd: "tauxRafraichissementEcranHz", operator: "$lte", type: "number" },
    nomsPuces: { nomChampBd: "nomPuce", operator: "$in", type: "array" },
    minVitessePuceGhz: { nomChampBd: "vitessePuceGhz", operator: "$gte", type: "number" },
    maxVitessePuceGhz: { nomChampBd: "vitessePuceGhz", operator: "$lte", type: "number" },
    technologiesStockages: { nomChampBd: "technologiesStockage", operator: "$in", type: "array" },
    systemesExploitations: { nomChampBd: "systemeExploitation", operator: "$in", type: "array" },
    minVersionSystemeExploitation: { nomChampBd: "maxVersionSystemeExploitation", operator: "$gte", type: "number" },
    modelesPortsUsb: { nomChampBd: "modelePortUsb", operator: "$in", type: "array" },
    possedeRechargeSansFil: { nomChampBd: "possedeRechargeSansFil", operator: "$eq", type: "boolean" },
    minCapaciteBatterieMah: { nomChampBd: "capaciteBatterieMah", operator: "$gte", type: "number" },
    maxCapaciteBatterieMah: { nomChampBd: "capaciteBatterieMah", operator: "$lte", type: "number" },
    typesAuthentification: { nomChampBd: "typeAuthentification", operator: "$in", type: "array" },
    possedeNfc: { nomChampBd: "possedeNfc", operator: "$eq", type: "boolean" },
    possedePortAudio: { nomChampBd: "possedePortAudio", operator: "$eq", type: "boolean" },
    generationReseauMobile: { nomChampBd: "generationReseauMobile", operator: "$eq", type: "number" },
};
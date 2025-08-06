/**
 * Types pour les opérateurs de requête MongoDB.
 */
type QueryOperator = "$eq" | "$in" | "$gte" | "$lte" | "$regex";

/**
 * Types de variables pour les filtres.
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
    technologiesStockage: { nomChampBd: "technologieStockage", operator: "$in", type: "array" },
    systemesExploitation: { nomChampBd: "systemeExploitation", operator: "$in", type: "array" },
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
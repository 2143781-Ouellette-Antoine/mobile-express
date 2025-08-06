/**
 * Structure d'un objet contenant les filtres de recherche pour les téléphones intelligents.
 * @property {string} [nom] Texte à rechercher dans le nom du téléphone intelligent.
 * @property {string[]} [nomsCompagnies] Noms de compagnies sélectionnés.
 * @property {number} [minHauteurMm] Hauteur minimale en millimètres sélectionnée.
 * @property {number} [maxHauteurMm] Hauteur maximale en millimètres sélectionnée.
 * @property {number} [minLargeurMm] Largeur minimale en millimètres sélectionnée.
 * @property {number} [maxLargeurMm] Largeur maximale en millimètres sélectionnée.
 * @property {number} [minEpaisseurMm] Épaisseur minimale en millimètres sélectionnée.
 * @property {number} [maxEpaisseurMm] Épaisseur maximale en millimètres sélectionnée.
 * @property {number} [minPoidsG] Poids minimal en grammes sélectionné.
 * @property {number} [maxPoidsG] Poids maximal en grammes sélectionné.
 * @property {string[]} [materiauxAvants] Matériaux de l'avant du téléphone sélectionnés.
 * @property {string[]} [materiauxArrieres] Matériaux de l'arrière du téléphone sélectionnés.
 * @property {string[]} [materiauxCadres] Matériaux des cadres du téléphone sélectionnés.
 * @property {string[]} [resistancesEau] Résistances à l'eau sélectionnées.
 * @property {string[]} [technologiesEcran] Technologies d'écran sélectionnées.
 * @property {number} [minTailleEcranPouces] Taille minimale de l'écran en pouces sélectionnée.
 * @property {number} [maxTailleEcranPouces] Taille maximale de l'écran en pouces sélectionnée.
 * @property {number} [minResolutionEcranLargeurPixels] Résolution minimale de l'écran en largeur de pixels sélectionnée.
 * @property {number} [maxResolutionEcranLargeurPixels] Résolution maximale de l'écran en largeur de pixels sélectionnée.
 * @property {number} [minResolutionEcranHauteurPixels] Résolution minimale de l'écran en hauteur de pixels sélectionnée.
 * @property {number} [maxResolutionEcranHauteurPixels] Résolution maximale de l'écran en hauteur de pixels sélectionnée.
 * @property {number} [minTauxRafraichissementEcranHz] Taux de rafraîchissement minimal de l'écran en Hz sélectionné.
 * @property {number} [maxTauxRafraichissementEcranHz] Taux de rafraîchissement maximal de l'écran en Hz sélectionné.
 * @property {string[]} [nomsPuces] Noms de puces sélectionnés.
 * @property {number} [minVitessePuceGhz] Vitesse minimale de la puce en GHz sélectionnée.
 * @property {number} [maxVitessePuceGhz] Vitesse maximale de la puce en GHz sélectionnée.
 * @property {string[]} [technologiesStockage] Technologies de stockage sélectionnées.
 * @property {string[]} [systemesExploitation] Systèmes d'exploitation sélectionnés.
 * @property {number} [minVersionSystemeExploitation] Version minimale du système d'exploitation sélectionnée.
 * @property {string[]} [modelesPortsUsb] Modèles de ports USB sélectionnés.
 * @property {boolean} [possedeRechargeSansFil] Indique si le téléphone possède la recharge sans fil.
 * @property {number} [minCapaciteBatterieMah] Capacité minimale de la batterie en mAh sélectionnée.
 * @property {number} [maxCapaciteBatterieMah] Capacité maximale de la batterie en mAh sélectionnée.
 * @property {string[]} [typesAuthentification] Types d'authentification sélectionnés.
 * @property {boolean} [possedeNfc] Indique si le téléphone possède la technologie NFC.
 * @property {boolean} [possedePortAudio] Indique si le téléphone possède un port audio.
 * @property {number} [generationReseauMobile] Génération de réseau mobile sélectionnée (ex: 4G, 5G).
 */
export interface FiltresRecherche {
    nom?: string;
    nomsCompagnies?: string[];
    minHauteurMm?: number;
    maxHauteurMm?: number;
    minLargeurMm?: number;
    maxLargeurMm?: number;
    minEpaisseurMm?: number;
    maxEpaisseurMm?: number;
    minPoidsG?: number;
    maxPoidsG?: number;
    materiauxAvants?: string[];
    materiauxArrieres?: string[];
    materiauxCadres?: string[];
    resistancesEau?: string[];
    technologiesEcran?: string[];
    minTailleEcranPouces?: number;
    maxTailleEcranPouces?: number;
    minResolutionEcranLargeurPixels?: number;
    maxResolutionEcranLargeurPixels?: number;
    minResolutionEcranHauteurPixels?: number;
    maxResolutionEcranHauteurPixels?: number;
    minTauxRafraichissementEcranHz?: number;
    maxTauxRafraichissementEcranHz?: number;
    nomsPuces?: string[];
    minVitessePuceGhz?: number;
    maxVitessePuceGhz?: number;
    technologiesStockage?: string[];
    systemesExploitation?: string[];
    minVersionSystemeExploitation?: number;
    modelesPortsUsb?: string[];
    possedeRechargeSansFil?: boolean;
    minCapaciteBatterieMah?: number;
    maxCapaciteBatterieMah?: number;
    typesAuthentification?: string[];
    possedeNfc?: boolean;
    possedePortAudio?: boolean;
    generationReseauMobile?: number;
}

/**
 * Dictionnaire des associations entre les noms des filtres (clés) et le type attendu de la valeur.
 */
export const dictionnaireFiltreType: Record<string, string> = {
    "nom": "string",
    "nomsCompagnies": "string[]",
    "minHauteurMm": "number",
    "maxHauteurMm": "number",
    "minLargeurMm": "number",
    "maxLargeurMm": "number",
    "minEpaisseurMm": "number",
    "maxEpaisseurMm": "number",
    "minPoidsG": "number",
    "maxPoidsG": "number",
    "materiauxAvants": "string[]",
    "materiauxArrieres": "string[]",
    "materiauxCadres": "string[]",
    "resistancesEau": "string[]",
    "technologiesEcran": "string[]",
    "minTailleEcranPouces": "number",
    "maxTailleEcranPouces": "number",
    "minResolutionEcranLargeurPixels": "number",
    "maxResolutionEcranLargeurPixels": "number",
    "minResolutionEcranHauteurPixels": "number",
    "maxResolutionEcranHauteurPixels": "number",
    "minTauxRafraichissementEcranHz": "number",
    "maxTauxRafraichissementEcranHz": "number",
    "nomsPuces": "string[]",
    "minVitessePuceGhz": "number",
    "maxVitessePuceGhz": "number",
    "technologiesStockage": "string[]",
    "systemesExploitation": "string[]",
    "minVersionSystemeExploitation": "number",
    "modelesPortsUsb": "string[]",
    "possedeRechargeSansFil": "boolean",
    "minCapaciteBatterieMah": "number",
    "maxCapaciteBatterieMah": "number",
    "typesAuthentification": "string[]",
    "possedeNfc": "boolean",
    "possedePortAudio": "boolean",
    "generationReseauMobile": "number",
};
/**
 * Objet représentant un téléphone intelligent.
 * 
 * @property {string} nom - Le nom du téléphone intelligent.
 * @property {string} nomCompagnie - Le nom de la compagnie du téléphone intelligent.
 * @property {Date} dateSortie - La date de sortie du téléphone intelligent.
 * @property {number} hauteurMm - La hauteur du téléphone intelligent en millimètres.
 * @property {number} largeurMm - La largeur du téléphone intelligent en millimètres.
 * @property {number} epaisseurMm - L'épaisseur du téléphone intelligent en millimètres.
 * @property {number} poidsG - Le poids du téléphone intelligent en grammes.
 * @property {string} materiauAvant - Le matériau de l'avant du téléphone intelligent.
 * @property {string} materiauArriere - Le matériau de l'arrière du téléphone intelligent.
 * @property {string} materiauCadre - Le matériau du cadre du téléphone intelligent.
 * @property {string} resistanceEau - La certification de résistance à l'eau du téléphone intelligent.
 * @property {string} technologieEcran - La technologie de l'écran du téléphone intelligent.
 * @property {number} tailleEcranPouces - La taille de l'écran du téléphone intelligent en pouces.
 * @property {number} resolutionEcranLargeurPixels - La résolution de l'écran du téléphone intelligent en largeur en pixels.
 * @property {number} resolutionEcranHauteurPixels - La résolution de l'écran du téléphone intelligent en hauteur en pixels.
 * @property {number} tauxRafraichissementEcranHz - Le taux de rafraîchissement de l'écran du téléphone intelligent en hertz.
 * @property {string} nomPuce - Le nom de la puce du téléphone intelligent.
 * @property {number} vitessePuceGhz - La vitesse de la puce du téléphone intelligent en gigahertz.
 * @property {string} descriptionCoeursPuce - La description des cœurs de la puce du téléphone intelligent.
 * @property {string} nomGraphiquesPuce - Le nom des graphiques de la puce du téléphone intelligent.
 * @property {string} technologieStockage - La technologie de stockage du téléphone intelligent.
 * @property {string} systemeExploitation - Le système d'exploitation du téléphone intelligent.
 * @property {number} maxVersionSystemeExploitation - La version maximale du système d'exploitation actuellement supportée par le téléphone intelligent.
 * @property {string} modelePortUsb - Le modèle du port USB du téléphone intelligent.
 * @property {boolean} possedeRechargeSansFil - Indique si le téléphone intelligent possède la recharge sans fil.
 * @property {number} capaciteBatterieMah - La capacité de la batterie du téléphone intelligent en milliampères-heure.
 * @property {string} typeAuthentification - Le type d'authentification utilisé pour déverrouiller le téléphone intelligent.
 * @property {boolean} possedeNfc - Indique si le téléphone intelligent possède la technologie NFC.
 * @property {boolean} possedePortAudio - Indique si le téléphone intelligent possède un port audio pour écouteurs.
 * @property {number} generationReseauMobile - Le numéro de la génération du réseau mobile supportée par le téléphone intelligent.
 * @property {string} descriptionCartesSim - La description des cartes SIM supportées par le téléphone intelligent.
 * @property {string} urlImagePrincipale - L'URL de l'image principale du téléphone intelligent.
 * @property {Array<{ stockageGb: number; memoireViveGb: number; }>} configurationMemoireViveStockage - Un tableau des configurations de mémoire vive et de stockage disponibles pour le téléphone intelligent.
 * @property {Array<{ type: string; estEnAvant: boolean; resolutionMp: number; possedeStabilisationOptiqueImage: boolean; }>} capteursCamera - Un tableau contenant des objets pour chaque capteur des caméras du téléphone intelligent.
 * @property {string[]} couleurs - Les couleurs disponibles pour ce téléphone intelligent.
 * @property {string} _id - L'id du téléphone intelligent dans la base de données.
 */
export type TelephoneIntelligent = {
    nom: string;
    nomCompagnie: string;
    dateSortie: Date;
    hauteurMm: number;
    largeurMm: number;
    epaisseurMm: number;
    poidsG: number;
    materiauAvant: string;
    materiauArriere: string;
    materiauCadre: string;
    resistanceEau: string;
    technologieEcran: string;
    tailleEcranPouces: number;
    resolutionEcranLargeurPixels: number;
    resolutionEcranHauteurPixels: number;
    tauxRafraichissementEcranHz: number;
    nomPuce: string;
    vitessePuceGhz: number;
    descriptionCoeursPuce: string;
    nomGraphiquesPuce: string;
    technologieStockage: string;
    systemeExploitation: string;
    maxVersionSystemeExploitation: number;
    modelePortUsb: string;
    possedeRechargeSansFil: boolean;
    capaciteBatterieMah: number;
    typeAuthentification: string;
    possedeNfc: boolean;
    possedePortAudio: boolean;
    possedeCarteMicroSD: boolean;
    generationReseauMobile: number;
    descriptionCartesSim: string;
    urlImagePrincipale: string;
    
    configurationsMemoireViveStockage: {
        /**
         * La capacité de stockage en gigaoctets.
         */
        stockageGb: number;
        /**
         * La capacité de mémoire vive en gigaoctets.
         */
        memoireViveGb: number;
    }[];
    
    capteursCamera: {
        /**
         * Le type de ce capteur.
         */
        type: string;
        /**
         * Indique si le capteur est en avant (true) ou à l'arrière (false).
         */
        estEnAvant: boolean;
        /**
         * La résolution du capteur en mégapixels.
         */
        resolutionMp: number;
        /**
         * Indique si le capteur possède une stabilisation optique de l'image.
         */
        possedeStabilisationOptiqueImage: boolean;
    }[];
    
    couleurs: string[];
    _id?: string;
}
import mongoose, { Schema, model } from 'mongoose';

// **** Types **** //

/**
 * Objet représentant un téléphone intelligent.
 * 
 * @property {string} nom - Le nom du téléphone intelligent.
 * @property {string} nomCompagnie - Le nom de la compagnie du téléphone intelligent.
 * @property {number} anneeSortie - L'année de sortie du téléphone intelligent.
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
 * @property {boolean} possedeCarteMicroSD - Indique si le téléphone intelligent possède un emplacement pour carte microSD.
 * @property {number} generationReseauMobile - Le numéro de la génération du réseau mobile supportée par le téléphone intelligent.
 * @property {string} descriptionCartesSim - La description des cartes SIM supportées par le téléphone intelligent.
 * @property {string} urlImagePrincipale - L'URL de l'image principale du téléphone intelligent.
 * @property {Array<{ stockageGb: number; memoireViveGb: number; }>} configurationMemoireViveStockage - Un tableau des configurations de mémoire vive et de stockage disponibles pour le téléphone intelligent.
 * @property {Array<{ type: string; estEnAvant: boolean; resolutionMp: number; possedeStabilisationOptiqueImage: boolean; }>} capteursCamera - Un tableau contenant des objets pour chaque capteur des caméras du téléphone intelligent.
 * @property {string[]} couleurs - Les couleurs disponibles pour ce téléphone intelligent.
 * @property {string} _id - L'id du téléphone intelligent dans la base de données.
 */
export interface ITelephoneIntelligent {
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

/**
 * Objet représentant une configuration de mémoire vive et de stockage pour un téléphone intelligent.
 * @property {number} stockageGb - La capacité de stockage en gigaoctets.
 * @property {number} memoireViveGb - La capacité de mémoire vive en gigaoctets.
 */
export interface IConfigurationMemoireViveStockage {
    stockageGb: number;
    memoireViveGb: number;
}

/**
 * Objet représentant un capteur de caméra d'un téléphone intelligent.
 * @property {string} type - Le type de ce capteur.
 * @property {boolean} estEnAvant - Indique si le capteur est en avant (true) ou à l'arrière (false).
 * @property {number} resolutionMp - La résolution du capteur en mégapixels.
 * @property {boolean} possedeStabilisationOptiqueImage - Indique si le capteur possède une stabilisation optique de l'image.
 */
export interface ICapteurCamera {
    type: string;
    estEnAvant: boolean;
    resolutionMp: number;
    possedeStabilisationOptiqueImage: boolean;
}

// **** Schema **** //

/**
 * Schéma pour une configuration de mémoire vive et de stockage.
 */
const ConfigurationMemoireViveStockageSchema = new Schema<IConfigurationMemoireViveStockage>({
    stockageGb: {
        type: Number,
        required: [true, 'La capacité de stockage est obligatoire']
    },
    memoireViveGb: {
        type: Number,
        required: [true, 'La capacité de mémoire vive est obligatoire']
    },
});

/**
 * Schéma pour un capteur de caméra d'un téléphone intelligent.
 * @property {string} type - Le type de ce capteur.
 * @property {boolean} estEnAvant - Indique si le capteur est en avant (true) ou à l'arrière (false).
 * @property {number} resolutionMp - La résolution du capteur en mégapixels.
 * @property {boolean} possedeStabilisationOptiqueImage - Indique si le capteur possède une stabilisation optique de l'image.
 */
const CapteurCameraSchema = new Schema<ICapteurCamera>({
    type: { type: String, required: [true, 'Le type du capteur est obligatoire'] },
    estEnAvant: { type: Boolean, required: [true, 'L\'indication si le capteur est en avant est obligatoire'] },
    resolutionMp: { type: Number, required: [true, 'La résolution du capteur est obligatoire'] },
    possedeStabilisationOptiqueImage: { type: Boolean, required: [true, 'L\'indication de stabilisation optique de l\'image est obligatoire'] },
});

/**
 * Schéma pour un téléphone intelligent.
 */
const TelephoneIntelligentSchema = new Schema<ITelephoneIntelligent>({
    nom: { type: String, required: [true, 'Le nom du téléphone intelligent est obligatoire'] },
    nomCompagnie: { type: String, required: [true, 'Le nom de la compagnie du téléphone intelligent est obligatoire'] },
    dateSortie: { type: Date, required: [true, 'La date de sortie est obligatoire'] },
    hauteurMm: { type: Number, required: [true, 'La hauteur est obligatoire'] },
    largeurMm: { type: Number, required: [true, 'La largeur est obligatoire'] },
    epaisseurMm: { type: Number, required: [true, 'L\'épaisseur est obligatoire'] },
    poidsG: { type: Number, required: [true, 'Le poids est obligatoire'] },
    materiauAvant: { type: String, required: [true, 'Le matériau avant est obligatoire'] },
    materiauArriere: { type: String, required: [true, 'Le matériau arrière est obligatoire'] },
    materiauCadre: { type: String, required: [true, 'Le matériau du cadre est obligatoire'] },
    resistanceEau: { type: String, required: [true, 'La certification de résistance à l\'eau est obligatoire'] },
    technologieEcran: { type: String, required: [true, 'La technologie de l\'écran est obligatoire'] },
    tailleEcranPouces: { type: Number, required: [true, 'La taille de l\'écran est obligatoire'] },
    resolutionEcranLargeurPixels: { type: Number, required: [true, 'La résolution de l\'écran (largeur) est obligatoire'] },
    resolutionEcranHauteurPixels: { type: Number, required: [true, 'La résolution de l\'écran (hauteur) est obligatoire'] },
    tauxRafraichissementEcranHz: { type: Number, required: [true, 'Le taux de rafraîchissement de l\'écran est obligatoire'] },
    nomPuce: { type: String, required: [true, 'Le nom de la puce est obligatoire'] },
    vitessePuceGhz: { type: Number, required: [true, 'La vitesse de la puce est obligatoire'] },
    descriptionCoeursPuce: { type: String, required: [true, 'La description des cœurs de la puce est obligatoire'] },
    nomGraphiquesPuce: { type: String, required: [true, 'Le nom des graphiques de la puce est obligatoire'] },
    technologieStockage: { type: String, required: [true, 'La technologie de stockage est obligatoire'] },
    systemeExploitation: { type: String, required: [true, 'Le système d\'exploitation est obligatoire'] },
    maxVersionSystemeExploitation: { type: Number, required: [true, 'La version maximale du système d\'exploitation compatible avec le téléphone intelligent est obligatoire'] },
    modelePortUsb: { type: String, required: [true, 'Le modèle du port USB est obligatoire'] },
    possedeRechargeSansFil: { type: Boolean, required: [true, 'La valeur indiquant si le téléphone intelligent possède la recharge sans fil est obligatoire'] },
    capaciteBatterieMah: { type: Number, required: [true, 'La capacité de la batterie est obligatoire'] },
    typeAuthentification: { type: String, required: [true, 'Le type d\'authentification est obligatoire'] },
    possedeNfc: { type: Boolean, required: [true, 'La valeur indiquant si le téléphone intelligent possède la NFC est obligatoire'] },
    possedePortAudio: { type: Boolean, required: [true, 'La valeur indiquant si le téléphone intelligent possède un port audio est obligatoire'] },
    possedeCarteMicroSD: { type: Boolean, required: [true, 'La valeur indiquant si le téléphone intelligent possède un emplacement pour carte microSD est obligatoire'] },
    generationReseauMobile: { type: Number, required: [true, 'La génération de réseau mobile est obligatoire'] },
    descriptionCartesSim: { type: String, required: [true, 'La description des cartes SIM est obligatoire'] },
    urlImagePrincipale: { type: String, required: [true, 'L\'URL de l\'image principale est obligatoire'] },
    configurationsMemoireViveStockage: {
        type: [ConfigurationMemoireViveStockageSchema],
    },
    capteursCamera: {
        type: [CapteurCameraSchema],
    },
    couleurs: [String],
});

// **** Export **** //
mongoose.pluralize(null);
export default model<ITelephoneIntelligent>('telephonesintelligents', TelephoneIntelligentSchema);
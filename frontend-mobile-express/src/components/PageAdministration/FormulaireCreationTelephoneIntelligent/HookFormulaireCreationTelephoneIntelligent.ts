import axios from "axios"
import { useState } from "react";
import type { TelephoneIntelligent } from "../../../models/TelephoneIntelligent"
import { getToken } from "../../../firebase";
import { useTemporarySnackbarContext } from "../../../contexts/ContextTemporarySnackbar";

/**
 * Variables d'état et méthodes pour le composant React: FormulaireCreationTelephoneIntelligent.
 * Ceci est un hook React.
 * @param {FormulaireCreationTelephoneIntelligentProps} props Les propriétés du composant React.
 * @returns { { Function, string, boolean } } Un objet contenant les variables d'état et
 * les méthodes de FormulaireCreationTelephoneIntelligent.
 */
export default function useHookFormulaireCreationTelephoneIntelligent() {
    // Gestion des erreurs de validation
    const [errors, setErrors] = useState<Record<string, string>>({});

    /**
     * Configurations de mémoire et de stockage entrées.
     */
    const [configurationsMemoireStockage, setConfigurationsMemoireStockage] = useState([
        { memoire: "", stockage: "" }
    ]);

    /**
     * Caméras du téléphone intelligent entrées.
     */
    const [capteursCamera, setCapteursCamera] = useState([
        { type: "", estEnAvant: false, resolutionMp: 0, possedeStabilisationOptiqueImage: false }
    ]);

    /**
     * Récupération du contexte pour pouvoir afficher des messages.
     */
    const { setSnackbarMessage, setSnackbarMessageType, setIsSnackbarOpen } = useTemporarySnackbarContext()

    /**
     * Méthode pour créer un téléphone intelligent dans la base de données.
     * @param {TelephoneIntelligent} telephoneIntelligentACreer Le téléphone intelligent à créer.
     */
    const creerTelephoneIntelligent = async (telephoneIntelligentACreer: TelephoneIntelligent) => {
        try {
            // Préparer l'authentification avec le token Firebase.
            const token = await getToken();
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            const response = await axios.post(
                "http://localhost:3000/api/telephones-intelligents",
                { telephoneIntelligent: telephoneIntelligentACreer },
                config
            )

            setSnackbarMessage("Le téléphone intelligent a été créé avec succès.")
            setSnackbarMessageType("success")
            setIsSnackbarOpen(true)

            // Rafraichir la page après création
            window.location.reload();

            return response.data
        } catch (_error) {
            setSnackbarMessage("Une erreur est survenue lors de la création du téléphone intelligent.")
            setSnackbarMessageType("error")
            setIsSnackbarOpen(true)
        }
    }
    
    /**
     * Valide le formulaire en vérifiant les champs requis.
     * @param formJson Les données du formulaire à valider.
     * @returns true si le formulaire est valide, sinon false.
     */
    function validerFormulaire(formJson: Record<string, any>) {
        const newErrors: Record<string, string> = {};

        if (!formJson["nom"] || formJson["nom"].trim() === "") {
            newErrors["nom"] = "Le nom est obligatoire.";
        }

        if (!formJson["nomCompagnie"] || formJson["nomCompagnie"].trim() === "") {
            newErrors["nomCompagnie"] = "Le nom de la compagnie est obligatoire.";
        }

        if (!formJson["dateSortie"] || formJson["dateSortie"].trim() === "") {
            newErrors["dateSortie"] = "La date de sortie est obligatoire.";
        // S'il n'est pas capable de créer une date avec la valeur.
        } else if (isNaN(new Date(formJson["dateSortie"]).getFullYear())) {
            newErrors["dateSortie"] = "La date de sortie n'est pas valide.";
        }

        if (!formJson["hauteurMm"] || formJson["hauteurMm"].trim() === "") {
            newErrors["hauteurMm"] = "La hauteur est obligatoire.";
        // S'il n'est pas capable de créer un nombre avec la valeur.
        } else if (isNaN(parseFloat(formJson["hauteurMm"]))) {
            newErrors["hauteurMm"] = "La hauteur doit être un nombre valide.";
        }

        if (!formJson["largeurMm"] || formJson["largeurMm"].trim() === "") {
            newErrors["largeurMm"] = "La largeur est obligatoire.";
        // S'il n'est pas capable de créer un nombre avec la valeur.
        } else if (isNaN(parseFloat(formJson["largeurMm"]))) {
            newErrors["largeurMm"] = "La largeur doit être un nombre valide.";
        }

        if (!formJson["epaisseurMm"] || formJson["epaisseurMm"].trim() === "") {
            newErrors["epaisseurMm"] = "L'épaisseur est obligatoire.";
        // S'il n'est pas capable de créer un nombre avec la valeur.
        } else if (isNaN(parseFloat(formJson["epaisseurMm"]))) {
            newErrors["epaisseurMm"] = "L'épaisseur doit être un nombre valide.";
        }

        if (!formJson["poidsG"] || formJson["poidsG"].trim() === "") {
            newErrors["poidsG"] = "Le poids est obligatoire.";
        // S'il n'est pas capable de créer un nombre avec la valeur.
        } else if (isNaN(parseFloat(formJson["poidsG"]))) {
            newErrors["poidsG"] = "Le poids doit être un nombre valide.";
        }

        if (!formJson["tailleEcranPouces"] || formJson["tailleEcranPouces"].trim() === "") {
            newErrors["tailleEcranPouces"] = "La taille de l'écran est obligatoire.";
        // S'il n'est pas capable de créer un nombre avec la valeur.
        } else if (isNaN(parseFloat(formJson["tailleEcranPouces"]))) {
            newErrors["tailleEcranPouces"] = "La taille de l'écran doit être un nombre valide.";
        }

        if (!formJson["capaciteBatterieMah"] || formJson["capaciteBatterieMah"].trim() === "") {
            newErrors["capaciteBatterieMah"] = "La capacité de la batterie est obligatoire.";
        // S'il n'est pas capable de créer un nombre avec la valeur.
        } else if (isNaN(parseInt(formJson["capaciteBatterieMah"], 10))) {
            newErrors["capaciteBatterieMah"] = "La capacité de la batterie doit être un nombre valide.";
        }

        // Mettre à jour la variable d'état du tableau des erreurs.
        setErrors(newErrors);
        // keys(): Retourne un tableau des clés de l'objet.
        // Retourner true si aucune erreur, sinon false.
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Méthode appelée lors de la soumission du formulaire.
     * @param event Événement de soumission du formulaire.
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Empêche le comportement par défaut du formulaire qui recharge la page.
        event.preventDefault();

        // Récupération des données du formulaire.
        // FormData utilise la propriété `name` de chaque contrôle du formulaire.
        const formData = new FormData(event.currentTarget);
        // Conversion de FormData en un objet.
        const formJson = Object.fromEntries(formData.entries());

        // S'il y a des erreurs de validation, bloquer l'envoi du formulaire à l'API.
        if (!validerFormulaire(formJson)) {
            // Arrêter la soumission.
            return;
        }

        // Reconstruction des configurations de mémoire et stockage.
        const configurationsMemoireViveStockage = [];
        // Boucler toutes les configurations. Convertir les valeurs en chaines de caractères en nombres.
        for (let i = 0; i < configurationsMemoireStockage.length; i++) {
            configurationsMemoireViveStockage.push({
                memoireViveGb: parseInt(formJson[`configurationsMemoireViveStockage[${i}].memoireViveGb`] as string, 10), // en base 10
                stockageGb: parseInt(formJson[`configurationsMemoireViveStockage[${i}].stockageGb`] as string, 10), // en base 10
            });
        }

        // Ajout des configurations reconstruites à l'objet final
        const finalData: TelephoneIntelligent = {
            nom: formJson["nom"] as string,
            nomCompagnie: formJson["nomCompagnie"] as string,
            dateSortie: new Date(formJson["dateSortie"] as string),
            hauteurMm: parseInt(formJson["hauteurMm"] as string, 10),
            largeurMm: parseInt(formJson["largeurMm"] as string, 10),
            epaisseurMm: parseInt(formJson["epaisseurMm"] as string, 10),
            poidsG: parseInt(formJson["poidsG"] as string, 10),
            materiauAvant: formJson["materiauAvant"] as string,
            materiauArriere: formJson["materiauArriere"] as string,
            materiauCadre: formJson["materiauCadre"] as string,
            resistanceEau: formJson["resistanceEau"] as string,
            technologieEcran: formJson["technologieEcran"] as string,
            tailleEcranPouces: parseFloat(formJson["tailleEcranPouces"] as string),
            resolutionEcranLargeurPixels: parseInt(formJson["resolutionEcranLargeurPixels"] as string, 10),
            resolutionEcranHauteurPixels: parseInt(formJson["resolutionEcranHauteurPixels"] as string, 10),
            tauxRafraichissementEcranHz: parseInt(formJson["tauxRafraichissementEcranHz"] as string, 10),
            nomPuce: formJson["nomPuce"] as string,
            vitessePuceGhz: parseFloat(formJson["vitessePuceGhz"] as string),
            descriptionCoeursPuce: formJson["descriptionCoeursPuce"] as string || "",
            nomGraphiquesPuce: formJson["nomGraphiquesPuce"] as string || "",
            technologieStockage: formJson["technologieStockage"] as string,
            systemeExploitation: formJson["systemeExploitation"] as string,
            maxVersionSystemeExploitation: parseInt(formJson["maxVersionSystemeExploitation"] as string, 10),
            modelePortUsb: formJson["modelePortUsb"] as string || "",
            // Faire comprendre à TypeScript que la valeur d'un checkbox, c'est un booléen.
            possedeRechargeSansFil: Boolean(formJson["possedeRechargeSansFil"]),
            capaciteBatterieMah: parseInt(formJson["capaciteBatterieMah"] as string || "0", 10),
            typeAuthentification: formJson["typeAuthentification"] as string || "",
            possedeNfc: Boolean(formJson["possedeNfc"]),
            possedePortAudio: Boolean(formJson["possedePortAudio"]),
            possedeCarteMicroSD: Boolean(formJson["possedeCarteMicroSD"]),
            generationReseauMobile: parseInt(formJson["generationReseauMobile"] as string || "0", 10),
            descriptionCartesSim: formJson["descriptionCartesSim"] as string || "",
            urlImagePrincipale: formJson["urlImagePrincipale"] as string || "",
            configurationsMemoireViveStockage,
            capteursCamera,
            couleurs: (formJson["couleurs"] as string || "").split(", ").map(couleur => couleur.trim())
        };

        // Appeler la méthode pour créer un téléphone intelligent.
        creerTelephoneIntelligent(finalData);
    }

    /**
     * Méthode appelée lorsqu'une valeur de configuration de mémoire ou de stockage change.
     * @param {number} index L'index de la configuration à modifier.
     * @param {"memoire" | "stockage"} field Le champ à modifier (mémoire ou stockage).
     * @param {string} value La nouvelle valeur pour le champ spécifié.
     */
    const handleChangeConfigurationsMemoireStockage = (index: number, field: "memoire" | "stockage", value: string) => {
        setConfigurationsMemoireStockage(prev =>
            prev.map((config, i) =>
                i === index ? { ...config, [field]: value } : config
            )
        );
    };

    /**
     * Ajouter une configuration vide de mémoire et de stockage en bas de la liste dans le formulaire.
     */
    const addEmptyConfigurationMemoireStockage = () => {
        // Remplacer le tableau des configurations par un tableau qui contient
        // l'ancienne liste plus une nouvelle configuration vide.
        setConfigurationsMemoireStockage(prevConfigs => [...prevConfigs, { memoire: "", stockage: "" }]);
    };

    /**
     * Enlève une configuration de mémoire et de stockage à l'index spécifié de la liste dans le formulaire.
     * @param {number} indexASupprimer L'index de la configuration à supprimer.
     */
    const removeConfigurationMemoireStockage = (indexASupprimer: number) => {
        setConfigurationsMemoireStockage(prevConfigs =>
            // Si la liste a plus de 1 élément.
            // Filter(): Garde tous les éléments qui ne sont pas égal à l'index à supprimer.
            prevConfigs.length > 1 ? prevConfigs.filter((_config, currentIndex) => currentIndex !== indexASupprimer) : prevConfigs
        );
    };

    /**
     * Méthode appelée lorsqu'une valeur de caméra change.
     * @param {number} index L'index de la caméra à modifier.
     * @param {"type" | "estEnAvant" | "resolutionMp" | "possedeStabilisationOptiqueImage"} field Le champ à modifier (type, estEnAvant, etc.).
     * @param {any} value La nouvelle valeur pour le champ spécifié.
     */
    const handleChangeCapteursCamera = (index: number, field: "type" | "estEnAvant" | "resolutionMp" | "possedeStabilisationOptiqueImage", value: any) => {
        setCapteursCamera(prev =>
            prev.map((camera, i) =>
                i === index ? { ...camera, [field]: value } : camera
            )
        );
    };

    /**
     * Ajouter une capteur de caméra vide en bas de la liste dans le formulaire.
     */
    const addEmptyCapteurCamera = () => {
        // Remplacer le tableau des capteurs par un tableau qui contient
        // l'ancienne liste plus un nouveau capteur vide.
        setCapteursCamera(prevCameras => [...prevCameras, { type: "", estEnAvant: false, resolutionMp: 0, possedeStabilisationOptiqueImage: false }]);
    };

    /**
     * Enlève une caméra à l'index spécifié de la liste dans le formulaire.
     * @param {number} indexASupprimer L'index de la caméra à supprimer.
     */
    const removeCapteurCamera = (indexASupprimer: number) => {
        setCapteursCamera(prevCameras =>
            // Si la liste a plus de 1 élément.
            // Filter(): Garde tous les éléments qui ne sont pas égal à l'index à supprimer.
            prevCameras.length > 1 ? prevCameras.filter((_camera, currentIndex) => currentIndex !== indexASupprimer) : prevCameras
        );
    };

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    return {
        errors,
        handleSubmit,
        configurationsMemoireStockage,
        setConfigurationsMemoireStockage,
        creerTelephoneIntelligent,
        validerFormulaire,
        handleChangeConfigurationsMemoireStockage,
        addEmptyConfigurationMemoireStockage,
        removeConfigurationMemoireStockage,
        capteursCamera,
        setCapteursCamera,
        handleChangeCapteursCamera,
        addEmptyCapteurCamera,
        removeCapteurCamera
    }
}
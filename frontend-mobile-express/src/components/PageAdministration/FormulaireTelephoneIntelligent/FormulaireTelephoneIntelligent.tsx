import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AutocompleteOneChoice from "../../ControlesFiltresRecherche/generic/AutocompleteOneChoice";
import AutocompleteMateriauxOneChoice from "../../ControlesFiltresRecherche/AutocompleteMateriauxOneChoice";
import useHookFormulaireTelephoneIntelligent from "./HookFormulaireTelephoneIntelligent";
import type { TelephoneIntelligent } from "../../../models/TelephoneIntelligent";

/**
 * Props pour le composant React: FormulaireTelephoneIntelligent.
 * @property {boolean} isModifier Indique si le formulaire est pour modifier (true) ou créer (false) un téléphone intelligent.
 * @property {boolean} isFormulaireOuvert Indique si le formulaire est ouvert.
 * @property
 */
interface FormulaireTelephoneIntelligentProps {
    isModifier: boolean;
    isFormulaireOuvert: boolean;
    setIsFormulaireOuvert: (isOpen: boolean) => void;
    titreFormulaire: string;
    texteBoutonSoumettre: string;
}

/**
 * Fenêtre contextuelle de formulaire pour une action de gestion d'un téléphone intelligent.
 * @prop
 * @returns Un composant React pour une fenêtre contextuelle de formulaire pour un téléphone intelligent.
 */
function FormulaireTelephoneIntelligent(props: FormulaireTelephoneIntelligentProps) {
    const {
        creerTelephoneIntelligent,
        modifierTelephoneIntelligent
    } = useHookFormulaireTelephoneIntelligent();

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (formJson: Record<string, any>) => {
        const newErrors: Record<string, string> = {};

        if (!formJson["nom"] || formJson["nom"].trim() === "") {
            newErrors["nom"] = "Le nom est obligatoire.";
        }

        if (!formJson["nomCompagnie"] || formJson["nomCompagnie"].trim() === "") {
            newErrors["nomCompagnie"] = "Le nom de la compagnie est obligatoire.";
        }

        if (!formJson["dateSortie"] || isNaN(parseInt(formJson["dateSortie"], 10))) {
            newErrors["dateSortie"] = "L'année de sortie est obligatoire et doit être un nombre valide.";
        }

        if (!formJson["hauteurMm"] || isNaN(parseInt(formJson["hauteurMm"], 10))) {
            newErrors["hauteurMm"] = "La hauteur est obligatoire et doit être un nombre valide.";
        }

        if (!formJson["largeurMm"] || isNaN(parseInt(formJson["largeurMm"], 10))) {
            newErrors["largeurMm"] = "La largeur est obligatoire et doit être un nombre valide.";
        }

        if (!formJson["epaisseurMm"] || isNaN(parseInt(formJson["epaisseurMm"], 10))) {
            newErrors["epaisseurMm"] = "L'épaisseur est obligatoire et doit être un nombre valide.";
        }

        if (!formJson["poidsG"] || isNaN(parseInt(formJson["poidsG"], 10))) {
            newErrors["poidsG"] = "Le poids est obligatoire et doit être un nombre valide.";
        }

        if (!formJson["tailleEcranPouces"] || isNaN(parseFloat(formJson["tailleEcranPouces"]))) {
            newErrors["tailleEcranPouces"] = "La taille de l'écran est obligatoire et doit être un nombre valide.";
        }

        if (!formJson["capaciteBatterieMah"] || isNaN(parseInt(formJson["capaciteBatterieMah"], 10))) {
            newErrors["capaciteBatterieMah"] = "La capacité de la batterie est obligatoire et doit être un nombre valide.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * 
     * @param event 
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        if (!validateForm(formJson)) {
            return;
        }

        // Reconstruction des configurations de mémoire et stockage
        const configurationsMemoireViveStockage = [];
        for (let i = 0; i < configurationsMemoireStockage.length; i++) {
            configurationsMemoireViveStockage.push({
                memoireViveGb: parseInt(formJson[`configurationsMemoireViveStockage[${i}].memoireViveGb`] as string, 10),
                stockageGb: parseInt(formJson[`configurationsMemoireViveStockage[${i}].stockageGb`] as string, 10),
            });
        }

        // Ajout des configurations reconstruites à l'objet final
        const finalData: TelephoneIntelligent = {
            nom: formJson["nom"] as string,
            nomCompagnie: formJson["nomCompagnie"] as string,
            anneeSortie: parseInt(formJson["dateSortie"] as string, 10),
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
            possedeRechargeSansFil: formJson["possedeRechargeSansFil"] === "true",
            capaciteBatterieMah: parseInt(formJson["capaciteBatterieMah"] as string || "0", 10),
            typeAuthentification: formJson["typeAuthentification"] as string || "",
            possedeNfc: formJson["possedeNfc"] === "true",
            possedePortAudio: formJson["possedePortAudio"] === "true",
            possedeCarteMicroSD: formJson["possedeCarteMicroSD"] === "true",
            generationReseauMobile: parseInt(formJson["generationReseauMobile"] as string || "0", 10),
            descriptionCartesSim: formJson["descriptionCartesSim"] as string || "",
            urlImagePrincipale: formJson["urlImagePrincipale"] as string || "",
            configurationsMemoireViveStockage,
            capteursCamera: [], // À remplir si nécessaire
            couleurs: [], // À remplir si nécessaire
        };

        console.log("Données finales :", finalData);

        if (props.isModifier) {
            modifierTelephoneIntelligent(finalData);
        } else {
            creerTelephoneIntelligent(finalData);
        }
    }

    /**
     * 
     */
    const [configurationsMemoireStockage, setConfigurationsMemoireStockage] = useState([
        { memoire: "", stockage: "" }
    ]);

    /**
     * 
     */
    const handleChangeConfig = (index: number, field: "memoire" | "stockage", value: string) => {
        setConfigurationsMemoireStockage(prev =>
            prev.map((config, i) =>
                i === index ? { ...config, [field]: value } : config
            )
        );
    };

    /**
     * 
     */
    const addEmptyConfigurationMemoireStockage = () => {
        setConfigurationsMemoireStockage(prev => [...prev, { memoire: "", stockage: "" }]);
    };

    /**
     * 
     */
    const removeConfigurationMemoireStockage = (index: number) => {
        setConfigurationsMemoireStockage(prev =>
            prev.length > 1 ? prev.filter((_, i) => i !== index) : prev
        );
    };

    return (
        <Dialog
            open={props.isFormulaireOuvert}
            onClose={() => props.setIsFormulaireOuvert(false)}
        >
            <DialogTitle>{props.titreFormulaire}</DialogTitle>
            <DialogContent sx={{ paddingBottom: 0 }}>
                <form onSubmit={handleSubmit}>
                    <Stack gap={2} sx={{ m: 2 }}>
                        {/* Nom de la compagnie du téléphone intelligent (texte) */}
                        <AutocompleteOneChoice
                            id={"compagnieTelephoneIntelligent"}
                            name="nomCompagnie"
                            label={"Compagnie"}
                            placeholder={"Sélectionnez ou entrez une compagnie"}
                            cleBdChoix={"nomCompagnie"}
                        />

                        {/* Nom du téléphone intelligent (texte) */}
                        <TextField
                            id="nomTelephoneIntelligent"
                            name="nom"
                            label="Nom"
                            variant="outlined"
                            placeholder="Nom du téléphone intelligent"
                            error={!!errors["nom"]}
                            helperText={errors["nom"]}
                        />

                        {/* Année de sortie (nombre) */}
                        <TextField
                            id="dateSortieTelephoneIntelligent"
                            name="dateSortie"
                            label="Date de sortie"
                            type="string"
                            variant="outlined"
                            placeholder="Date de sortie du téléphone intelligent"
                            error={!!errors["dateSortie"]}
                            helperText={errors["dateSortie"]}
                        />

                        <Stack direction="row" gap={2}>
                            {/* Hauteur (nombre) */}
                            <TextField
                                id="hauteurTelephoneIntelligent"
                                name="hauteurMm"
                                label="Hauteur (mm)"
                                type="number"
                                variant="outlined"
                                placeholder="Hauteur du téléphone intelligent en mm"
                                error={!!errors["hauteurMm"]}
                                helperText={errors["hauteurMm"]}
                            />

                            {/* Largeur (nombre) */}
                            <TextField
                                id="largeurTelephoneIntelligent"
                                name="largeurMm"
                                label="Largeur (mm)"
                                type="number"
                                variant="outlined"
                                placeholder="Largeur du téléphone intelligent en mm"
                                error={!!errors["largeurMm"]}
                                helperText={errors["largeurMm"]}
                            />

                            {/* Épaisseur (nombre) */}
                            <TextField
                                id="epaisseurTelephoneIntelligent"
                                name="epaisseurMm"
                                label="Épaisseur (mm)"
                                type="number"
                                variant="outlined"
                                placeholder="Épaisseur du téléphone intelligent en mm"
                                error={!!errors["epaisseurMm"]}
                                helperText={errors["epaisseurMm"]}
                            />
                        </Stack>

                        {/* Poids (nombre) */}
                        <TextField
                            id="poidsTelephoneIntelligent"
                            name="poidsG"
                            label="Poids (g)"
                            type="number"
                            variant="outlined"
                            placeholder="Poids du téléphone intelligent en g"
                            error={!!errors["poidsG"]}
                            helperText={errors["poidsG"]}
                        />

                        <Typography variant="h5">Matériaux</Typography>

                        {/* Matériau avant (texte) */}
                        <AutocompleteMateriauxOneChoice
                            id="materiauAvantTelephoneIntelligent"
                            name="materiauAvant"
                            label={"Matériau avant"}
                        />

                        {/* Matériau arrière (texte) */}
                        <AutocompleteMateriauxOneChoice
                            id="materiauArriereTelephoneIntelligent"
                            name="materiauArriere"
                            label="Matériau arrière"
                        />

                        {/* Matériau cadre (texte) */}
                        <AutocompleteMateriauxOneChoice
                            id="materiauCadreTelephoneIntelligent"
                            name="materiauCadre"
                            label="Matériau cadre"
                        />

                        {/* Résistance à l'eau (texte) */}
                        <AutocompleteOneChoice
                            id="resistanceEauTelephoneIntelligent"
                            name="resistanceEau"
                            label="Résistance à l'eau"
                            placeholder="Sélectionnez ou entrez une certification"
                            cleBdChoix="resistanceEau"
                        />

                        <Typography variant="h5">Écran</Typography>

                        {/* Technologie de l'écran (texte) */}
                        <AutocompleteOneChoice
                            id="technologieEcranTelephoneIntelligent"
                            name="technologieEcran"
                            label="Technologie de l'écran"
                            placeholder="Sélectionnez ou entrez une technologie"
                            cleBdChoix="technologieEcran"
                        />

                        {/* Taille de l'écran (nombre) */}
                        <TextField
                            id="tailleEcranTelephoneIntelligent"
                            name="tailleEcranPouces"
                            label="Taille de l'écran (pouces)"
                            type="number"
                            variant="outlined"
                            placeholder="Taille de l'écran en pouces"
                            error={!!errors["tailleEcranPouces"]}
                            helperText={errors["tailleEcranPouces"]}
                        />

                        <Stack direction="row" gap={2}>
                            {/* Résolution de la largeur de l'écran (nombre) */}
                            <TextField
                                id="resolutionEcranLargeurTelephoneIntelligent"
                                name="resolutionEcranLargeurPixels"
                                label="Résolution largeur de l'écran (pixels)"
                                type="number"
                                variant="outlined"
                                placeholder="Résolution largeur de l'écran (pixels)"
                                sx={{ flex: 1 }}
                            />

                            {/* Résolution de la hauteur de l'écran (nombre) */}
                            <TextField
                                id="resolutionEcranHauteurTelephoneIntelligent"
                                name="resolutionEcranHauteurPixels"
                                label="Résolution hauteur de l'écran (pixels)"
                                type="number"
                                variant="outlined"
                                placeholder="Résolution hauteur de l'écran (pixels)"
                                sx={{ flex: 1 }}
                            />
                        </Stack>

                        {/* Taux de rafraichissement de l'écran (nombre) */}
                        <TextField
                            id="tauxRafraichissementEcranTelephoneIntelligent"
                            name="tauxRafraichissementEcranHz"
                            label="Taux de rafraichissement de l'écran (Hz)"
                            type="number"
                            variant="outlined"
                            placeholder="Taux de rafraichissement de l'écran (Hz)"
                        />

                        <Typography variant="h5">Puce</Typography>

                        {/* Nom de la puce (texte) */}
                        <AutocompleteOneChoice
                            id="nomPuceTelephoneIntelligent"
                            name="nomPuce"
                            label="Nom de la puce"
                            placeholder="Sélectionnez ou entrez un nom de puce"
                            cleBdChoix="nomPuce"
                        />

                        {/* Vitesse du processeur (nombre) */}
                        <TextField
                            id="vitesseProcesseurTelephoneIntelligent"
                            name="vitessePuceGhz"
                            label="Vitesse du processeur (GHz)"
                            type="number"
                            variant="outlined"
                            placeholder="Vitesse du processeur (GHz)"
                        />

                        <Typography variant="h5">Stockage</Typography>

                        {/* Configurations de mémoire-vive et de stockage */}
                        {configurationsMemoireStockage.map((config, index) => (
                            <Stack direction="row" gap={2} alignItems="center" key={index}>
                                <TextField
                                    name={`configurationsMemoireViveStockage[${index}].memoireViveGb`}
                                    label="Mémoire vive (Go)"
                                    type="number"
                                    variant="outlined"
                                    value={config.memoire}
                                    onChange={e => handleChangeConfig(index, 'memoire', e.target.value)}
                                    sx={{ flex: 1 }}
                                />
                                <TextField
                                    name={`configurationsMemoireViveStockage[${index}].stockageGb`}
                                    label="Stockage (Go)"
                                    type="number"
                                    variant="outlined"
                                    value={config.stockage}
                                    onChange={e => handleChangeConfig(index, 'stockage', e.target.value)}
                                    sx={{ flex: 1 }}
                                />
                                <IconButton
                                    onClick={() => removeConfigurationMemoireStockage(index)}
                                    disabled={configurationsMemoireStockage.length === 1}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={addEmptyConfigurationMemoireStockage}>
                                    <AddIcon />
                                </IconButton>
                            </Stack>
                        ))}

                        {/* Technologie stockage (texte) */}
                        <AutocompleteOneChoice
                            id="technologieStockageTelephoneIntelligent"
                            name="technologieStockage"
                            label="Technologie de stockage"
                            placeholder="Sélectionnez ou entrez une technologie de stockage"
                            cleBdChoix="technologieStockage"
                        />

                        {/* Système d'exploitation (texte) */}
                        <AutocompleteOneChoice
                            id="systemeExploitation"
                            name="systemeExploitation"
                            label="Système d'exploitation"
                            placeholder="Sélectionnez ou entrez un système d'exploitation"
                            cleBdChoix={"systemeExploitation"}
                        />

                        {/* Version max du système d'exploitation (nombre) */}
                        <TextField
                            id="versionMaxSystemeExploitationTelephoneIntelligent"
                            name="maxVersionSystemeExploitation"
                            label="Version max du système d'exploitation"
                            type="number"
                            variant="outlined"
                            placeholder="Version max du système d'exploitation"
                        />

                        {/* Les capteurs de la caméra () */}
                        

                        <DialogActions>
                            <Button
                                onClick={() => props.setIsFormulaireOuvert(false)}
                            >
                                Annuler
                            </Button>

                            <Button
                                variant="contained"
                                type="submit"
                            >
                                {props.texteBoutonSoumettre}
                            </Button>
                        </DialogActions>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default FormulaireTelephoneIntelligent
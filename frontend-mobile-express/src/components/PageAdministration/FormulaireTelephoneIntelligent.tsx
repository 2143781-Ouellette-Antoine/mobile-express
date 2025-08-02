import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import AutocompleteOneChoice from "../ControlesFiltresRecherche/AutocompleteOneChoice";
import useListeToutesCompagniesHook from "../PageToutesCompagnies/HookListeToutesCompagnies";
import React, { useState } from "react";

/**
 * Props pour le composant React: FormulaireTelephoneIntelligent.
 * @property {boolean} isFormulaireOuvert Indique si le formulaire est ouvert.
 * @property
 */
interface FormulaireTelephoneIntelligentProps {
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
    /**
     * Liste de toutes les compagnies de téléphones intelligents.
     * @property {Array} compagnies Liste de toutes les compagnies.
     * @property {boolean} isCompagniesLoading Indique si les données des compagnies
     * sont en train d'être récupérées depuis l'API.
     */
    const { compagnies, isCompagniesLoading } = useListeToutesCompagniesHook()

    /**
     * 
     * @param event 
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formJson = Object.fromEntries((formData as any).entries())
        // const email = formJson.email
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
    const handleAddConfig = () => {
        setConfigurationsMemoireStockage(prev => [...prev, { memoire: "", stockage: "" }]);
    };

    /**
     * 
     */
    const handleRemoveConfig = (index: number) => {
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
                            label={"Compagnie"}
                            placeholder={"Sélectionnez ou entrez une compagnie"}
                            listeChoix={compagnies}
                            isDonneesChoixLoading={isCompagniesLoading}
                            id={"compagnieTelephoneIntelligent"}
                        />

                        {/* Nom du téléphone intelligent (texte) */}
                        <TextField
                            id="nomTelephoneIntelligent"
                            label="Nom"
                            variant="outlined"
                            placeholder="Nom du téléphone intelligent"
                        />

                        {/* Année de sortie (nombre) */}
                        <TextField
                            id="anneeSortieTelephoneIntelligent"
                            label="Année de sortie"
                            type="number"
                            variant="outlined"
                            placeholder="Année de sortie du téléphone intelligent"
                        />

                        <Stack direction="row" gap={2}>
                            {/* Hauteur (nombre) */}
                            <TextField
                                id="hauteurTelephoneIntelligent"
                                label="Hauteur (mm)"
                                type="number"
                                variant="outlined"
                                placeholder="Hauteur du téléphone intelligent en mm"
                            />

                            {/* Largeur (nombre) */}
                            <TextField
                                id="largeurTelephoneIntelligent"
                                label="Largeur (mm)"
                                type="number"
                                variant="outlined"
                                placeholder="Largeur du téléphone intelligent en mm"
                            />

                            {/* Épaisseur (nombre) */}
                            <TextField
                                id="epaisseurTelephoneIntelligent"
                                label="Épaisseur (mm)"
                                type="number"
                                variant="outlined"
                                placeholder="Épaisseur du téléphone intelligent en mm"
                            />
                        </Stack>

                        {/* Poids (nombre) */}
                        <TextField
                            id="poidsTelephoneIntelligent"
                            label="Poids (g)"
                            type="number"
                            variant="outlined"
                            placeholder="Poids du téléphone intelligent en g"
                        />

                        <Typography variant="h5">Matériaux</Typography>

                        {/* Matériau avant (texte) */}
                        <AutocompleteOneChoice
                            label={"Matériau avant"}
                            placeholder={"Sélectionnez ou entrez un matériau"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id={"materiauAvantTelephoneIntelligent"}
                        />

                        {/* Matériau arrière (texte) */}
                        <AutocompleteOneChoice
                            label={"Matériau arrière"}
                            placeholder={"Sélectionnez ou entrez un matériau"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id={"materiauArriereTelephoneIntelligent"}
                        />

                        {/* Matériau cadre (texte) */}
                        <AutocompleteOneChoice
                            label={"Matériau cadre"}
                            placeholder={"Sélectionnez ou entrez un matériau"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id={"materiauCadreTelephoneIntelligent"}
                        />

                        {/* Résistance à l'eau (texte) */}
                        <AutocompleteOneChoice
                            label={"Résistance à l'eau"}
                            placeholder={"Sélectionnez ou entrez une certification"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id={"resistanceEauTelephoneIntelligent"}
                        />

                        <Typography variant="h5">Écran</Typography>

                        {/* Technologie de l'écran (texte) */}
                        <AutocompleteOneChoice
                            label={"Technologie de l'écran"}
                            placeholder={"Sélectionnez ou entrez une technologie"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id={"technologieEcranTelephoneIntelligent"}
                        />

                        {/* Taille de l'écran (nombre) */}
                        <TextField
                            id="tailleEcranTelephoneIntelligent"
                            label="Taille de l'écran (pouces)"
                            type="number"
                            variant="outlined"
                            placeholder="Taille de l'écran en pouces"
                        />

                        <Stack direction="row" gap={2}>
                            {/* Résolution de la largeur de l'écran (nombre) */}
                            <TextField
                                id="resolutionEcranLargeurTelephoneIntelligent"
                                label="Résolution largeur de l'écran (pixels)"
                                type="number"
                                variant="outlined"
                                placeholder="Résolution largeur de l'écran (pixels)"
                                sx={{ flex: 1 }}
                            />

                            {/* Résolution de la hauteur de l'écran (nombre) */}
                            <TextField
                                id="resolutionEcranHauteurTelephoneIntelligent"
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
                            label="Taux de rafraichissement de l'écran (Hz)"
                            type="number"
                            variant="outlined"
                            placeholder="Taux de rafraichissement de l'écran (Hz)"
                        />

                        <Typography variant="h5">Puce</Typography>

                        {/* Nom de la puce (texte) */}
                        <AutocompleteOneChoice
                            label="Nom de la puce"
                            placeholder="Sélectionnez ou entrez un nom de puce"
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id="nomPuceTelephoneIntelligent"
                        />

                        {/* Vitesse du processeur (nombre) */}
                        <TextField
                            id="vitesseProcesseurTelephoneIntelligent"
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
                                    label="Mémoire vive (Go)"
                                    type="number"
                                    variant="outlined"
                                    value={config.memoire}
                                    onChange={e => handleChangeConfig(index, 'memoire', e.target.value)}
                                    sx={{ flex: 1 }}
                                />
                                <TextField
                                    label="Stockage (Go)"
                                    type="number"
                                    variant="outlined"
                                    value={config.stockage}
                                    onChange={e => handleChangeConfig(index, 'stockage', e.target.value)}
                                    sx={{ flex: 1 }}
                                />
                                <Button
                                    onClick={() => handleRemoveConfig(index)}
                                    disabled={configurationsMemoireStockage.length === 1}
                                >
                                    -
                                </Button>
                                <Button onClick={handleAddConfig}>+</Button>
                            </Stack>
                        ))}

                        {/* Technologie stockage (texte) */}
                        <AutocompleteOneChoice
                            label="Technologie de stockage"
                            placeholder="Sélectionnez ou entrez une technologie de stockage"
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id="technologieStockageTelephoneIntelligent"
                        />

                        {/* Système d'exploitation (texte) */}
                        <AutocompleteOneChoice
                            label="Système d'exploitation"
                            placeholder="Sélectionnez ou entrez un système d'exploitation"
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id="systemeExploitationTelephoneIntelligent"
                        />

                        {/* Version max du système d'exploitation (nombre) */}
                        <TextField
                            id="versionMaxSystemeExploitationTelephoneIntelligent"
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
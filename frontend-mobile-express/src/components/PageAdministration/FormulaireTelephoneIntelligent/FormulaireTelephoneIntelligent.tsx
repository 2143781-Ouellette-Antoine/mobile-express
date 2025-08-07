import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AutocompleteOneChoice from "../../ControlesFiltresRecherche/generic/AutocompleteOneChoice";
import AutocompleteMateriauxOneChoice from "../../ControlesFiltresRecherche/AutocompleteMateriauxOneChoice";
import useHookFormulaireTelephoneIntelligent from "./HookFormulaireTelephoneIntelligent";

/**
 * Props pour le composant React: FormulaireTelephoneIntelligent.
 * @property {boolean} isModifier Indique si le formulaire est pour modifier (true) ou créer (false) un téléphone intelligent.
 * @property {boolean} isFormulaireOuvert Indique si le formulaire est ouvert.
 * @property
 */
export interface FormulaireTelephoneIntelligentProps {
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
    // Récupération des variables d'état et des méthodes du composant React.
    const {
        errors,
        handleSubmit,
        configurationsMemoireStockage,
        handleChangeConfig,
        addEmptyConfigurationMemoireStockage,
        removeConfigurationMemoireStockage
    } = useHookFormulaireTelephoneIntelligent(props);

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
                            required
                        />

                        {/* Année de sortie (nombre) */}
                        <TextField
                            id="dateSortieTelephoneIntelligent"
                            name="dateSortie"
                            label="Date de sortie"
                            type="string"
                            variant="outlined"
                            placeholder="(AAAA-MM-JJ) Date de sortie du téléphone intelligent"
                            error={!!errors["dateSortie"]}
                            helperText={errors["dateSortie"]}
                            required
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
                                required
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
                                required
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
                                required
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
                            required
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
                            required
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
                                error={!!errors["resolutionEcranLargeurPixels"]}
                                helperText={errors["resolutionEcranLargeurPixels"]}
                                required
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
                                error={!!errors["resolutionEcranHauteurPixels"]}
                                helperText={errors["resolutionEcranHauteurPixels"]}
                                required
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
                            error={!!errors["tauxRafraichissementEcranHz"]}
                            helperText={errors["tauxRafraichissementEcranHz"]}
                            required
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
                            error={!!errors["vitessePuceGhz"]}
                            helperText={errors["vitessePuceGhz"]}
                            required
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
                                    error={!!errors[`configurationsMemoireViveStockage[${index}].memoireViveGb`]}
                                    helperText={errors[`configurationsMemoireViveStockage[${index}].memoireViveGb`]}
                                />
                                <TextField
                                    name={`configurationsMemoireViveStockage[${index}].stockageGb`}
                                    label="Stockage (Go)"
                                    type="number"
                                    variant="outlined"
                                    value={config.stockage}
                                    onChange={e => handleChangeConfig(index, 'stockage', e.target.value)}
                                    sx={{ flex: 1 }}
                                    error={!!errors[`configurationsMemoireViveStockage[${index}].stockageGb`]}
                                    helperText={errors[`configurationsMemoireViveStockage[${index}].stockageGb`]}
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
                            error={!!errors["maxVersionSystemeExploitation"]}
                            helperText={errors["maxVersionSystemeExploitation"]}
                            required
                        />

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
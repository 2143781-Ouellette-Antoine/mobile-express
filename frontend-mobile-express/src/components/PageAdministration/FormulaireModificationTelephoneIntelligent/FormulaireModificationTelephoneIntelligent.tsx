import { Button, Checkbox, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AutocompleteOneChoice from "../../ControlesFiltresRecherche/generic/AutocompleteOneChoice";
import AutocompleteMateriauxOneChoice from "../../ControlesFiltresRecherche/AutocompleteMateriauxOneChoice";
import useHookFormulaireModificationTelephoneIntelligent from "./HookFormulaireModificationTelephoneIntelligent";

/**
 * Props pour le composant React: FormulaireModificationTelephoneIntelligent.
 * @property {boolean} isFormulaireOuvert Indique si le formulaire est ouvert.
 * @property {function} setIsFormulaireOuvert Fonction pour ouvrir ou fermer le formulaire.
 * @property {string | null} idAModifier L'id du téléphone intelligent à modifier, ou null si c'est un nouveau téléphone.
 */
export interface FormulaireModificationTelephoneIntelligentProps {
    isFormulaireOuvert: boolean;
    setIsFormulaireOuvert: (isOpen: boolean) => void;
    idAModifier: string;
}

/**
 * Fenêtre contextuelle de formulaire pour la modification d'un téléphone intelligent.
 * @prop {boolean} isFormulaireOuvert Indique si le formulaire est ouvert.
 * @prop {function} setIsFormulaireOuvert Fonction pour ouvrir ou fermer le formulaire.
 * @prop {string | null} idAModifier L'id du téléphone intelligent à modifier, ou null si c'est un nouveau téléphone.
 * @returns Un composant React pour une fenêtre contextuelle de formulaire pour la modification d'un téléphone intelligent.
 */
function FormulaireModificationTelephoneIntelligent(props: FormulaireModificationTelephoneIntelligentProps) {
    // Récupération des variables d'état et des méthodes du composant React.
    const {
        telephoneIntelligentAModifier,
        isTelephoneIntelligentAModifierLoading,
        errors,
        handleSubmit,
        configurationsMemoireStockage,
        handleChangeConfigurationsMemoireStockage,
        addEmptyConfigurationMemoireStockage,
        removeConfigurationMemoireStockage,
        capteursCamera,
        handleChangeCapteursCamera,
        addEmptyCapteurCamera,
        removeCapteurCamera
    } = useHookFormulaireModificationTelephoneIntelligent(props);

    return (
        <Dialog
            open={props.isFormulaireOuvert}
            onClose={() => props.setIsFormulaireOuvert(false)}
        >
            <DialogTitle>Modifier un téléphone intelligent</DialogTitle>
            <DialogContent sx={{ paddingBottom: 0 }}>
                {isTelephoneIntelligentAModifierLoading ? (
                    <CircularProgress />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <Stack gap={2} sx={{ m: 2 }}>
                            {/* URL de l'image */}
                            <TextField
                                id="urlImageTelephoneIntelligent"
                                name="urlImagePrincipale"
                                label="URL de l'image"
                                variant="outlined"
                                placeholder="URL de l'image du téléphone intelligent"
                                defaultValue={telephoneIntelligentAModifier?.urlImagePrincipale ?? ""}
                                error={!!errors["urlImagePrincipale"]}
                                helperText={errors["urlImagePrincipale"]}
                                required
                            />

                            {/* Nom de la compagnie du téléphone intelligent (texte) */}
                            <AutocompleteOneChoice
                                id={"compagnieTelephoneIntelligent"}
                                name="nomCompagnie"
                                label={"Compagnie"}
                                placeholder={"Sélectionnez ou entrez une compagnie"}
                                defaultValue={telephoneIntelligentAModifier?.nomCompagnie ?? ""}
                                cleBdChoix={"nomCompagnie"}
                            />

                            {/* Nom du téléphone intelligent (texte) */}
                            <TextField
                                id="nomTelephoneIntelligent"
                                name="nom"
                                label="Nom"
                                variant="outlined"
                                placeholder="Nom du téléphone intelligent"
                                defaultValue={telephoneIntelligentAModifier?.nom ?? ""}
                                error={!!errors["nom"]}
                                helperText={errors["nom"]}
                                required
                            />

                            {/* Date de sortie (nombre) */}
                            <TextField
                                id="dateSortieTelephoneIntelligent"
                                name="dateSortie"
                                label="Date de sortie"
                                type="string"
                                variant="outlined"
                                placeholder="(AAAA-MM-JJ) Date de sortie du téléphone intelligent"
                                defaultValue={telephoneIntelligentAModifier?.dateSortie ?? ""}
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
                                    defaultValue={telephoneIntelligentAModifier?.hauteurMm ?? 0}
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
                                    defaultValue={telephoneIntelligentAModifier?.largeurMm ?? 0}
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
                                    defaultValue={telephoneIntelligentAModifier?.epaisseurMm ?? 0}
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
                                defaultValue={telephoneIntelligentAModifier?.poidsG ?? 0}
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
                                defaultValue={telephoneIntelligentAModifier?.materiauAvant ?? ""}
                            />

                            {/* Matériau arrière (texte) */}
                            <AutocompleteMateriauxOneChoice
                                id="materiauArriereTelephoneIntelligent"
                                name="materiauArriere"
                                label="Matériau arrière"
                                defaultValue={telephoneIntelligentAModifier?.materiauArriere ?? ""}
                            />

                            {/* Matériau cadre (texte) */}
                            <AutocompleteMateriauxOneChoice
                                id="materiauCadreTelephoneIntelligent"
                                name="materiauCadre"
                                label="Matériau cadre"
                                defaultValue={telephoneIntelligentAModifier?.materiauCadre ?? ""}
                            />

                            {/* Résistance à l'eau (texte) */}
                            <AutocompleteOneChoice
                                id="resistanceEauTelephoneIntelligent"
                                name="resistanceEau"
                                label="Résistance à l'eau"
                                placeholder="Sélectionnez ou entrez une certification"
                                defaultValue={telephoneIntelligentAModifier?.resistanceEau ?? ""}
                                cleBdChoix="resistanceEau"
                            />

                            <Typography variant="h5">Écran</Typography>

                            {/* Technologie de l'écran (texte) */}
                            <AutocompleteOneChoice
                                id="technologieEcranTelephoneIntelligent"
                                name="technologieEcran"
                                label="Technologie de l'écran"
                                placeholder="Sélectionnez ou entrez une technologie"
                                defaultValue={telephoneIntelligentAModifier?.technologieEcran ?? ""}
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
                                defaultValue={telephoneIntelligentAModifier?.tailleEcranPouces ?? 0}
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
                                    defaultValue={telephoneIntelligentAModifier?.resolutionEcranLargeurPixels ?? 0}
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
                                    defaultValue={telephoneIntelligentAModifier?.resolutionEcranHauteurPixels ?? 0}
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
                                defaultValue={telephoneIntelligentAModifier?.tauxRafraichissementEcranHz ?? 0}
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
                                defaultValue={telephoneIntelligentAModifier?.nomPuce ?? ""}
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
                                defaultValue={telephoneIntelligentAModifier?.vitessePuceGhz ?? 0}
                                error={!!errors["vitessePuceGhz"]}
                                helperText={errors["vitessePuceGhz"]}
                                required
                            />

                            {/* Description coeurs puce (texte) */}
                            <TextField
                                id="descriptionCoeursPuceTelephoneIntelligent"
                                name="descriptionCoeursPuce"
                                label="Description des coeurs de la puce"
                                type="text"
                                variant="outlined"
                                placeholder="Description des coeurs de la puce"
                                defaultValue={telephoneIntelligentAModifier?.descriptionCoeursPuce ?? ""}
                                error={!!errors["descriptionCoeursPuce"]}
                                helperText={errors["descriptionCoeursPuce"]}
                                required
                            />

                            {/* Nom des graphiques de la puce (texte) */}
                            <TextField
                                id="descriptionGraphiquesTelephoneIntelligent"
                                name="nomGraphiquesPuce"
                                label="Nom des graphiques de la puce"
                                type="text"
                                variant="outlined"
                                placeholder="Nom des graphiques de la puce"
                                defaultValue={telephoneIntelligentAModifier?.nomGraphiquesPuce ?? ""}
                                error={!!errors["nomGraphiquesPuce"]}
                                helperText={errors["nomGraphiquesPuce"]}
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
                                        value={config.memoireViveGb}
                                        onChange={e => handleChangeConfigurationsMemoireStockage(index, 'memoireViveGb', e.target.value)}
                                        sx={{ flex: 1 }}
                                        error={!!errors[`configurationsMemoireViveStockage[${index}].memoireViveGb`]}
                                        helperText={errors[`configurationsMemoireViveStockage[${index}].memoireViveGb`]}
                                    />
                                    <TextField
                                        name={`configurationsMemoireViveStockage[${index}].stockageGb`}
                                        label="Stockage (Go)"
                                        type="number"
                                        variant="outlined"
                                        value={config.stockageGb}
                                        onChange={e => handleChangeConfigurationsMemoireStockage(index, 'stockageGb', e.target.value)}
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
                                defaultValue={telephoneIntelligentAModifier?.technologieStockage ?? ""}
                                cleBdChoix="technologieStockage"
                            />

                            <Typography variant="h5">Logiciel</Typography>

                            {/* Système d'exploitation (texte) */}
                            <AutocompleteOneChoice
                                id="systemeExploitation"
                                name="systemeExploitation"
                                label="Système d'exploitation"
                                placeholder="Sélectionnez ou entrez un système d'exploitation"
                                defaultValue={telephoneIntelligentAModifier?.systemeExploitation ?? ""}
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
                                defaultValue={telephoneIntelligentAModifier?.maxVersionSystemeExploitation ?? 0}
                                error={!!errors["maxVersionSystemeExploitation"]}
                                helperText={errors["maxVersionSystemeExploitation"]}
                                required
                            />

                            <Typography variant="h5">Caméras</Typography>

                            {/* Configurations des capteurs des caméras */}
                            {capteursCamera.map((capteurCamera, index) => (
                                <Stack direction="row" gap={2} alignItems="center" key={index}>
                                    <Stack direction="row" gap={2} sx={{ flex: 1 }}>
                                        <Stack direction="column" gap={2} sx={{ flex: 1 }}>
                                            {/* Type de capteur */}
                                            <TextField
                                                name={`capteursCamera[${index}].type`}
                                                label="Type de capteur"
                                                type="text"
                                                variant="outlined"
                                                value={capteurCamera.type}
                                                onChange={e => handleChangeCapteursCamera(index, 'type', e.target.value)}
                                                sx={{ flex: 1 }}
                                                error={!!errors[`capteursCamera[${index}].type`]}
                                                helperText={errors[`capteursCamera[${index}].type`]}
                                            />
                                            {/* Est une caméra avant */}
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name={`capteursCamera[${index}].estEnAvant`}
                                                        checked={capteurCamera.estEnAvant}
                                                        onChange={e => handleChangeCapteursCamera(index, 'estEnAvant', e.target.checked)}
                                                    />
                                                }
                                                label="Capteur avant"
                                            />
                                        </Stack>

                                        <Stack direction="column" gap={2} sx={{ flex: 1 }}>
                                            {/* Résolution du capteur (en mégapixels) */}
                                            <TextField
                                                name={`capteursCamera[${index}].resolutionMp`}
                                                label="Résolution (MP)"
                                                type="number"
                                                variant="outlined"
                                                value={capteurCamera.resolutionMp}
                                                onChange={e => handleChangeCapteursCamera(index, 'resolutionMp', e.target.value)}
                                                sx={{ flex: 1 }}
                                                error={!!errors[`capteursCamera[${index}].resolutionMp`]}
                                                helperText={errors[`capteursCamera[${index}].resolutionMp`]}
                                            />
                                            {/* Possède stabilisation optique d'image */}
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name={`capteursCamera[${index}].possedeStabilisationOptiqueImage`}
                                                        checked={capteurCamera.possedeStabilisationOptiqueImage}
                                                        onChange={e => handleChangeCapteursCamera(index, 'possedeStabilisationOptiqueImage', e.target.checked)}
                                                    />
                                                }
                                                label="Stabilisation optique d'image"
                                            />
                                        </Stack>
                                    </Stack>
                                    {/* Bouton pour supprimer cette caméra */}
                                    <IconButton
                                        onClick={() => removeCapteurCamera(index)}
                                        disabled={capteursCamera.length === 1}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    {/* Bouton pour ajouter une nouvelle caméra */}
                                    <IconButton onClick={addEmptyCapteurCamera}>
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            ))}

                            <Typography variant="h5">Recharge</Typography>

                            {/* Modèle port USB (texte) */}
                            <TextField
                                id="modelePortUsb"
                                name="modelePortUsb"
                                label="Modèle du port USB"
                                variant="outlined"
                                placeholder="Entrez le modèle du port USB"
                                defaultValue={telephoneIntelligentAModifier?.modelePortUsb ?? ""}
                                error={!!errors["modelePortUsb"]}
                                helperText={errors["modelePortUsb"]}
                                required
                            />

                            {/* Possède recharge sans fil (booléen) */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="possedeRechargeSansFil"
                                        defaultChecked={telephoneIntelligentAModifier?.possedeRechargeSansFil ?? false}
                                    />
                                }
                                label="Recharge sans fil"
                            />

                            <Typography variant="h5">Batterie</Typography>

                            {/* Capacité de la batterie (nombre) */}
                            <TextField
                                id="capaciteBatterieTelephoneIntelligent"
                                name="capaciteBatterieMah"
                                label="Capacité de la batterie (mAh)"
                                type="number"
                                variant="outlined"
                                placeholder="Capacité de la batterie"
                                defaultValue={telephoneIntelligentAModifier?.capaciteBatterieMah ?? 0}
                                error={!!errors["capaciteBatterieMah"]}
                                helperText={errors["capaciteBatterieMah"]}
                                required
                            />

                            <Typography variant="h5">Authentification</Typography>

                            {/* Type d'authentification (texte) */}
                            <AutocompleteOneChoice
                                id="typeAuthentification"
                                name="typeAuthentification"
                                label="Type d'authentification"
                                placeholder="Sélectionnez ou entrez un type d'authentification"
                                defaultValue={telephoneIntelligentAModifier?.typeAuthentification ?? ""}
                                cleBdChoix={"typeAuthentification"}
                            />

                            <Typography variant="h5">Fonctionnalités</Typography>

                            {/* Possède NFC (booléen) */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="possedeNfc"
                                        defaultChecked={telephoneIntelligentAModifier?.possedeNfc ?? false}
                                    />
                                }
                                label="NFC"
                            />

                            {/* Possède port audio (booléen) */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="possedePortAudio"
                                        defaultChecked={telephoneIntelligentAModifier?.possedePortAudio ?? false}
                                    />
                                }
                                label="Port audio"
                            />

                            {/* Possède carte microSD (booléen) */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="possedeCarteMicroSD"
                                        defaultChecked={telephoneIntelligentAModifier?.possedeCarteMicroSD ?? false}
                                    />
                                }
                                label="Carte microSD"
                            />

                            {/* Réseau mobile (nombre) */}
                            <TextField
                                id="generationReseauMobileTelephoneIntelligent"
                                name="generationReseauMobile"
                                label="Génération de réseau mobile"
                                variant="outlined"
                                placeholder="Entrez la génération de réseau mobile (ex: 4, 5)"
                                defaultValue={telephoneIntelligentAModifier?.generationReseauMobile ?? ""}
                                type="number"
                                error={!!errors["generationReseauMobile"]}
                                helperText={errors["generationReseauMobile"]}
                                required
                            />

                            {/* Description carte(s) SIM (texte) */}
                            <TextField
                                id="descriptionCartesSimTelephoneIntelligent"
                                name="descriptionCartesSim"
                                label="Description carte(s) SIM"
                                variant="outlined"
                                placeholder="Entrez la description des cartes SIM"
                                defaultValue={telephoneIntelligentAModifier?.descriptionCartesSim ?? ""}
                                error={!!errors["descriptionCartesSim"]}
                                helperText={errors["descriptionCartesSim"]}
                                required
                            />

                            {/* Couleurs (texte) */}
                            <TextField
                                id="couleursTelephoneIntelligent"
                                name="couleurs"
                                label="Couleurs"
                                variant="outlined"
                                placeholder="Entrez les couleurs disponibles (ex: Rouge, Bleu)"
                                defaultValue={telephoneIntelligentAModifier?.couleurs ?? ""}
                                error={!!errors["couleurs"]}
                                helperText={errors["couleurs"]}
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
                                    Modifier
                                </Button>
                            </DialogActions>
                        </Stack>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default FormulaireModificationTelephoneIntelligent
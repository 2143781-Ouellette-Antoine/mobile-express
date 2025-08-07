import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import AutocompleteMateriauxMultiChoices from "../../components/ControlesFiltresRecherche/AutocompleteMateriauxMultiChoices"
import AutocompleteMultiChoices from "../../components/ControlesFiltresRecherche/generic/AutocompleteMultiChoices"
import SliderMinMax from "../../components/ControlesFiltresRecherche/generic/SliderMinMax"
import useHookPageRechercheAvancee from "./HookPageRechercheAvancee"
import sliderDefaults from "../../constants/MinMaxFiltresRecherche"

/**
 * Page de recherche avancée pour les téléphones intelligents.
 * @returns Un composant React pour la page de recherche avancée.
 */
function PageRechercheAvancee() {
    /**
     * Récupération des variables d'état et des méthodes de la page de recherche avancée.
     */
    const { handleSubmit, errors } = useHookPageRechercheAvancee()

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
            }}
        >
            <form onSubmit={handleSubmit}> {/* Passer la méthode de callback qui recevra les données du formulaire. */}
                <Stack
                    direction="column"
                    spacing={4}
                    sx={{
                        marginX: 2,
                        marginTop: 4,
                        marginBottom: 16,
                        width: "60vw",
                        maxWidth: "100%",
                    }}
                >
                    <Typography variant="h4">Recherche avancée</Typography>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000">Général</Typography>

                        <Stack direction="row" spacing={3}>
                            <Box width="50%">
                                {/* Compagnie (multi-sélection) */}
                                <AutocompleteMultiChoices
                                    name="nomsCompagnies"
                                    label="Compagnie"
                                    placeholder="Sélectionnez une ou plusieurs compagnies"
                                    cleBdChoix="nomCompagnie"
                                />
                            </Box>
                            
                            <Box width="50%">
                                {/* Nom du téléphone intelligent (texte) */}
                                <TextField
                                    name="nom"
                                    label="Nom"
                                    variant="outlined"
                                    placeholder="Nom du téléphone intelligent"
                                    fullWidth
                                />
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000">Construction</Typography>

                        <Stack direction="row" spacing={8}>
                            <Stack direction="column" spacing={3} width="50%">
                                {/* Hauteur (min max) */}
                                <SliderMinMax
                                    name="rangeHauteurMm"
                                    label="Hauteur (mm)"
                                    MINIMUM={sliderDefaults["rangeHauteurMm"][0]}
                                    MAXIMUM={sliderDefaults["rangeHauteurMm"][1]}
                                    ariaLabelValueSuffix=" mm"
                                />

                                {/* Largeur (min max) */}
                                <SliderMinMax
                                    name="rangeLargeurMm"
                                    label="Largeur (mm)"
                                    MINIMUM={sliderDefaults["rangeLargeurMm"][0]}
                                    MAXIMUM={sliderDefaults["rangeLargeurMm"][1]}
                                    ariaLabelValueSuffix=" mm"
                                />
                            </Stack>

                            <Stack direction="column" spacing={3} width="50%">
                                {/* Épaisseur (min max) */}
                                <SliderMinMax
                                    name="rangeEpaisseurMm"
                                    label="Épaisseur (mm)"
                                    MINIMUM={sliderDefaults["rangeEpaisseurMm"][0]}
                                    MAXIMUM={sliderDefaults["rangeEpaisseurMm"][1]}
                                    ariaLabelValueSuffix=" mm"
                                />

                                {/* Poids (min max) */}
                                <SliderMinMax
                                    name="rangePoidsG"
                                    label="Poids (g)"
                                    MINIMUM={sliderDefaults["rangePoidsG"][0]}
                                    MAXIMUM={sliderDefaults["rangePoidsG"][1]}
                                    ariaLabelValueSuffix=" g"
                                />
                            </Stack>
                        </Stack>

                        <Typography variant="h6">Matériaux</Typography>

                        <Stack direction="row" spacing={3}>
                            <Stack direction="column" spacing={2} width="50%">
                                {/* Matériaux avant (multi-sélection) */}
                                <AutocompleteMateriauxMultiChoices
                                    name="materiauxAvants"
                                    label={"Matériau avant"}
                                />

                                {/* Matériaux arrière (multi-sélection) */}
                                <AutocompleteMateriauxMultiChoices
                                    name="materiauxArrieres"
                                    label={"Matériau arrière"}
                                />
                            </Stack>

                            <Box width="50%">
                                {/* Matériaux cadre (multi-sélection) */}
                                <AutocompleteMateriauxMultiChoices
                                    name="materiauxCadres"
                                    label={"Matériau cadre"}
                                />
                            </Box>
                        </Stack>

                        <Box sx={{ paddingTop: 2 }}>
                            {/* Résistance à l'eau et à la poussière (multi-sélection) */}
                            <AutocompleteMultiChoices
                                name="resistancesEau"
                                label={"Résistance à l'eau et à la poussière"}
                                placeholder={"Sélectionnez une ou plusieurs certifications"}
                                cleBdChoix={"resistanceEau"}
                            />
                        </Box>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Écran</Typography>

                        <Stack direction="row" spacing={8}>
                            <Stack direction="column" spacing={3} width="50%">
                                {/* Technologie écran (multi-sélection) */}
                                <AutocompleteMultiChoices
                                    name="technologiesEcran"
                                    label="Technologie écran"
                                    placeholder="Sélectionnez une ou plusieurs technologies"
                                    cleBdChoix="technologieEcran"
                                />

                                {/* Taille écran (min max) */}
                                <SliderMinMax
                                    name="rangeTailleEcranPouces"
                                    label="Taille écran (pouces)"
                                    MINIMUM={sliderDefaults["rangeTailleEcranPouces"][0]}
                                    MAXIMUM={sliderDefaults["rangeTailleEcranPouces"][1]}
                                    ariaLabelValueSuffix=" pouces"
                                />

                                {/* Taux de rafraichissement (min max) */}
                                <SliderMinMax
                                    name="rangeTauxRafraichissementEcranHz"
                                    label="Taux de rafraichissement (Hz)"
                                    MINIMUM={sliderDefaults["rangeTauxRafraichissementEcranHz"][0]}
                                    MAXIMUM={sliderDefaults["rangeTauxRafraichissementEcranHz"][1]}
                                    ariaLabelValueSuffix=" Hz"
                                />
                            </Stack>
                            <Stack direction="column" justifyContent="flex-end" spacing={3} width="50%">
                                {/* Résolution largeur (min max) */}
                                <SliderMinMax
                                    name="rangeResolutionEcranLargeurPixels"
                                    label="Résolution largeur (px)"
                                    MINIMUM={sliderDefaults["rangeResolutionEcranLargeurPixels"][0]}
                                    MAXIMUM={sliderDefaults["rangeResolutionEcranLargeurPixels"][1]}
                                    ariaLabelValueSuffix=" px"
                                />

                                {/* Résolution hauteur (min max) */}
                                <SliderMinMax
                                    name="rangeResolutionEcranHauteurPixels"
                                    label="Résolution hauteur (px)"
                                    MINIMUM={sliderDefaults["rangeResolutionEcranHauteurPixels"][0]}
                                    MAXIMUM={sliderDefaults["rangeResolutionEcranHauteurPixels"][1]}
                                    ariaLabelValueSuffix=" px"
                                />
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Puce</Typography>

                        <Stack direction="row" spacing={8}>
                            <Box width="50%">
                                {/* Puces (multi-sélection) */}
                                <AutocompleteMultiChoices
                                    name="nomsPuces"
                                    label="Nom de la puce"
                                    placeholder="Sélectionnez une ou plusieurs puces"
                                    cleBdChoix="nomPuce"
                                />
                            </Box>

                            <Box width="50%">
                                {/* Vitesse processeur (min max) */}
                                <SliderMinMax
                                    name="rangeVitessePuceGhz"
                                    label="Vitesse processeur (GHz)"
                                    MINIMUM={sliderDefaults["rangeVitessePuceGhz"][0]}
                                    MAXIMUM={sliderDefaults["rangeVitessePuceGhz"][1]}
                                    step={0.01}
                                    ariaLabelValueSuffix=" GHz"
                                />
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Logiciel</Typography>

                        <Stack direction="row" spacing={3}>
                            <Box width="50%">
                                {/* Système d'exploitation (multi-sélection) */}
                                <AutocompleteMultiChoices
                                    name="systemesExploitation"
                                    label={"Système d'exploitation"}
                                    placeholder={"Sélectionnez un ou plusieurs systèmes d'exploitation"}
                                    cleBdChoix={"systemeExploitation"}
                                />
                            </Box>

                            <Box width="50%">
                                {/* Version minimum du système d'exploitation (nombre) */}
                                <TextField
                                    name="minVersionSystemeExploitation"
                                    label="Version minimum du système d'exploitation"
                                    type="number"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors["minVersionSystemeExploitation"]}
                                    helperText={errors["minVersionSystemeExploitation"]}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Recharge</Typography>

                        <Stack direction="row" spacing={3}>
                            <Box width="50%">
                                {/* Port (texte) */}
                                <AutocompleteMultiChoices
                                    name="modelesPortsUsb"
                                    label={"Port"}
                                    placeholder={"Sélectionnez un ou plusieurs ports"}
                                    cleBdChoix={"modelePortUsb"}
                                />
                            </Box>

                            <Box width="50%">
                                {/* Possède recharge sans fil (booléen) */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="possedeRechargeSansFil"
                                        />
                                    }
                                    label="Recharge sans fil"
                                />
                            </Box>
                        </Stack>
                    </Stack>
                    
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Batterie</Typography>

                        <Box width="50%">
                            {/* Capacité de la batterie (nombre) */}
                            <SliderMinMax
                                name="rangeCapaciteBatterieMah"
                                label="Capacité de la batterie (mAh)"
                                MINIMUM={sliderDefaults["rangeCapaciteBatterieMah"][0]}
                                MAXIMUM={sliderDefaults["rangeCapaciteBatterieMah"][1]}
                                ariaLabelValueSuffix={" mAh"}
                            />
                        </Box>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Authentification</Typography>

                        <Box width="50%">
                            {/* Type d'authentification (texte) */}
                            <AutocompleteMultiChoices
                                name="typesAuthentification"
                                label={"Type d'authentification"}
                                placeholder={"Sélectionnez un ou plusieurs types d'authentification"}
                                cleBdChoix={"typeAuthentification"}
                            />
                        </Box>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Fonctionnalités</Typography>

                        <Stack direction="row" spacing={3}>
                            <Stack direction="column" spacing={2} width="50%">
                                {/* Possède NFC (booléen) */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="possedeNfc"
                                        />
                                    }
                                    label="NFC"
                                />

                                {/* Possède port audio (booléen) */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="possedePortAudio"
                                        />
                                    }
                                    label="Port audio"
                                />
                            </Stack>
                            <Stack direction="column" spacing={3} width="50%">
                                {/* Possède carte microSD (booléen) */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="possedeCarteMicroSD"
                                        />
                                    }
                                    label="Carte microSD"
                                />
                            </Stack>
                        </Stack>
                    </Stack>

                    {/* Bouton de recherche */}
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        startIcon={<SearchIcon />}
                    >
                        Rechercher
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}

export default PageRechercheAvancee
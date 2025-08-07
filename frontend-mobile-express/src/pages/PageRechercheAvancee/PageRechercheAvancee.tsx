import { Controller as FormFieldController } from "react-hook-form"
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"
import AutocompleteMateriauxMultiChoices from "../../components/ControlesFiltresRecherche/AutocompleteMateriauxMultiChoices"
import AutocompleteMultiChoices from "../../components/ControlesFiltresRecherche/generic/AutocompleteMultiChoices"
import SliderMinMax from "../../components/ControlesFiltresRecherche/generic/SliderMinMax"
import useHookPageRechercheAvancee from "./HookPageRechercheAvancee"

/**
 * Page de recherche avancée pour les téléphones intelligents.
 * @returns Un composant React
 */
function PageRechercheAvancee() {
    /**
     * Récupération des variables d'état et des méthodes de la page de recherche avancée.
     */
    const { formController, handleSubmit, onSubmit } = useHookPageRechercheAvancee()

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}> {/* Passer la méthode de callback qui recevra les données du formulaire. */}
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
                                <FormFieldController
                                    name="nomsCompagnies"
                                    control={formController}
                                    defaultValue={[]}
                                    // react-hook-form fournit des propriétés ( field[] ) pour gérer le champ.
                                    render={({ field }) => (
                                        <AutocompleteMultiChoices
                                            label="Compagnie"
                                            placeholder="Sélectionnez une ou plusieurs compagnies"
                                            cleBdChoix="nomCompagnie"
                                            fieldProperties={field}
                                        />
                                    )}
                                />
                            </Box>
                            
                            <Box width="50%">
                                {/* Nom du téléphone intelligent (texte) */}
                                <FormFieldController
                                    name="nom"
                                    control={formController}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            id="nomTelephoneIntelligent"
                                            label="Nom"
                                            variant="outlined"
                                            placeholder="Nom du téléphone intelligent"
                                            fullWidth
                                        />
                                    )}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000">Construction</Typography>

                        <Stack direction="row" spacing={8}>
                            <Stack direction="column" spacing={3} width="50%">
                                {/* Hauteur (min max) */}
                                {/* <FormFieldController
                                    name="rangeHauteurMm"
                                    control={formController}
                                    defaultValue={{ min: 80, max: 200 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Hauteur (mm)"
                                            MINIMUM={80}
                                            MAXIMUM={200}
                                            ariaLabelValueSuffix=" mm"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}

                                {/* Largeur (min max) */}
                                {/* <FormFieldController
                                    name="rangeLargeurMm"
                                    control={formController}
                                    defaultValue={{ min: 40, max: 100 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Largeur (mm)"
                                            MINIMUM={40}
                                            MAXIMUM={100}
                                            ariaLabelValueSuffix=" mm"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}
                            </Stack>

                            <Stack direction="column" spacing={3} width="50%">
                                {/* Épaisseur (min max) */}
                                {/* <FormFieldController
                                    name="rangeEpaisseurMm"
                                    control={formController}
                                    defaultValue={{ min: 1, max: 40 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Épaisseur (mm)"
                                            MINIMUM={1}
                                            MAXIMUM={40}
                                            ariaLabelValueSuffix=" mm"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}

                                {/* Poids (min max) */}
                                {/* <FormFieldController
                                    name="rangePoidsG"
                                    control={formController}
                                    defaultValue={{ min: 50, max: 250 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Poids (g)"
                                            MINIMUM={50}
                                            MAXIMUM={250}
                                            ariaLabelValueSuffix=" g"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}
                            </Stack>
                        </Stack>

                        <Typography variant="h6">Matériaux</Typography>

                        <Stack direction="row" spacing={3}>
                            <Stack direction="column" spacing={2} width="50%">
                                {/* Matériaux avant (multi-sélection) */}
                                <FormFieldController
                                    name="materiauxAvants"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMateriauxMultiChoices
                                            label={"Matériau avant"}
                                            fieldProperties={field}
                                        />
                                    )}
                                />

                                {/* Matériaux arrière (multi-sélection) */}
                                <FormFieldController
                                    name="materiauxArrieres"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMateriauxMultiChoices
                                            label={"Matériau arrière"}
                                            fieldProperties={field}
                                        />
                                    )}
                                />
                            </Stack>

                            <Box width="50%">
                                {/* Matériaux cadre (multi-sélection) */}
                                <FormFieldController
                                    name="materiauxCadres"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMateriauxMultiChoices
                                            label={"Matériau cadre"}
                                            fieldProperties={field}
                                        />
                                    )}
                                />
                            </Box>
                        </Stack>

                        <Box sx={{ paddingTop: 2 }}>
                            {/* Résistance à l'eau et à la poussière (multi-sélection) */}
                            <FormFieldController
                                name="resistancesEau"
                                control={formController}
                                defaultValue={[]}
                                render={({ field }) => (
                                    <AutocompleteMultiChoices
                                        label={"Résistance à l'eau et à la poussière"}
                                        placeholder={"Sélectionnez une ou plusieurs certifications"}
                                        cleBdChoix={"resistanceEau"}
                                        fieldProperties={field}
                                    />
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Écran</Typography>

                        <Stack direction="row" spacing={8}>
                            <Stack direction="column" spacing={3} width="50%">
                                {/* Technologie écran (multi-sélection) */}
                                <FormFieldController
                                    name="technologiesEcran"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMultiChoices
                                            label="Technologie écran"
                                            placeholder="Sélectionnez une ou plusieurs technologies"
                                            cleBdChoix="technologieEcran"
                                            fieldProperties={field}
                                        />
                                    )}
                                />

                                {/* Taille écran (min max) */}
                                {/* <FormFieldController
                                    name="rangeTailleEcranPixels"
                                    control={formController}
                                    defaultValue={{ min: 5, max: 12 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Taille écran (pouces)"
                                            MINIMUM={5}
                                            MAXIMUM={12}
                                            ariaLabelValueSuffix=" pouces"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}

                                {/* Taux de rafraichissement (min max) */}
                                {/* <FormFieldController
                                    name="rangeTauxRafraichissementHz"
                                    control={formController}
                                    defaultValue={{ min: 60, max: 120 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Taux de rafraichissement (Hz)"
                                            MINIMUM={60}
                                            MAXIMUM={120}
                                            ariaLabelValueSuffix=" Hz"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}
                            </Stack>
                            <Stack direction="column" justifyContent="flex-end" spacing={3} width="50%">
                                {/* Résolution largeur (min max) */}
                                {/* <FormFieldController
                                    name="rangeResolutionLargeurPixels"
                                    control={formController}
                                    defaultValue={{ min: 640, max: 3840 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Résolution largeur (px)"
                                            MINIMUM={640}
                                            MAXIMUM={3840}
                                            ariaLabelValueSuffix=" px"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}

                                {/* Résolution hauteur (min max) */}
                                {/* <FormFieldController
                                    name="rangeResolutionHauteurPixels"
                                    control={formController}
                                    defaultValue={{ min: 480, max: 2160 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Résolution hauteur (px)"
                                            MINIMUM={480}
                                            MAXIMUM={2160}
                                            ariaLabelValueSuffix=" px"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Puce</Typography>

                        <Stack direction="row" spacing={8}>
                            <Box width="50%">
                                {/* Puces (multi-sélection) */}
                                <FormFieldController
                                    name="nomsPuces"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMultiChoices
                                            label="Nom de la puce"
                                            placeholder="Sélectionnez une ou plusieurs puces"
                                            cleBdChoix="nomPuce"
                                            fieldProperties={field}
                                        />
                                    )}
                                />
                            </Box>

                            <Box width="50%">
                                {/* Vitesse processeur (min max) */}
                                {/* <FormFieldController
                                    name="rangeVitessePuceGhz"
                                    control={formController}
                                    defaultValue={{ min: 1, max: 5 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Vitesse processeur (GHz)"
                                            MINIMUM={1}
                                            MAXIMUM={5}
                                            step={0.01}
                                            ariaLabelValueSuffix=" GHz"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Stockage</Typography>

                        <Stack direction="row" spacing={8}>
                            <Stack direction="column" spacing={3} width="50%">
                                {/* Mémoire vive (nombre) */}
                                {/* <FormFieldController
                                    name="rangeMemoireViveGb"
                                    control={formController}
                                    defaultValue={{ min: 1, max: 16 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Mémoire vive (Go)"
                                            MINIMUM={1}
                                            MAXIMUM={16}
                                            ariaLabelValueSuffix=" Go"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}

                                {/* Technologie du stockage (texte) */}
                                {/* <FormFieldController
                                    name="technologiesStockage"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMultiChoices
                                            label="Technologie du stockage"
                                            placeholder="Sélectionnez une ou plusieurs technologies"
                                            cleBdChoix="technologieStockage"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}
                            </Stack>

                            <Box width="50%">
                                {/* Stockage (nombre) */}
                                {/* <FormFieldController
                                    name="rangeStockageGb"
                                    control={formController}
                                    defaultValue={{ min: 8, max: 2048 }}
                                    render={({ field }) => (
                                        <SliderMinMax
                                            label="Stockage (Go)"
                                            MINIMUM={8}
                                            MAXIMUM={2048}
                                            ariaLabelValueSuffix=" Go"
                                            fieldProperties={field}
                                        />
                                    )}
                                /> */}
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Logiciel</Typography>

                        <Stack direction="row" spacing={3}>
                            <Box width="50%">
                                {/* Système d'exploitation (multi-sélection) */}
                                <FormFieldController
                                    name="systemesExploitation"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMultiChoices
                                            label={"Système d'exploitation"}
                                            placeholder={"Sélectionnez un ou plusieurs systèmes d'exploitation"}
                                            cleBdChoix={"systemeExploitation"}
                                            fieldProperties={field}
                                        />
                                    )}
                                />
                            </Box>

                            <Box width="50%">
                                {/* Version minimum du système d'exploitation (nombre) */}
                                <FormFieldController
                                    name="minVersionSystemeExploitation"
                                    control={formController}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Version minimum du système d'exploitation"
                                            type="number"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    )}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Caméras arrières</Typography>

                        <Stack direction="row" spacing={3}>
                            <Stack direction="column" spacing={2} width="50%">
                                {/* Possède type de caméra (texte) */}
                                {/* <AutocompleteMultiChoices
                                    id="choice-type-camera"
                                    label={"Type de caméra"}
                                    placeholder={"Sélectionnez un ou plusieurs types de caméra"}
                                /> */}

                                {/* Possède stabilisation optique de l'image (booléen) */}
                                {/* <FormFieldController
                                    name="possedeStabilisationOptiqueImage"
                                    control={formController}
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...field}
                                                />
                                            }
                                            label="Stabilisation optique"
                                        />
                                    )}
                                /> */}
                            </Stack>

                            <Stack direction="column" spacing={3} width="50%">
                                {/* Résolution minimum (nombre) */}
                                {/* <FormFieldController
                                    name="minResolutionCameraMp"
                                    control={formController}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Résolution minimum (MP)"
                                            type="number"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    )}
                                /> */}
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Recharge</Typography>

                        <Stack direction="row" spacing={3}>
                            <Box width="50%">
                                {/* Port (texte) */}
                                <FormFieldController
                                    name="modelesPortsUsb"
                                    control={formController}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <AutocompleteMultiChoices
                                            label={"Port"}
                                            placeholder={"Sélectionnez un ou plusieurs ports"}
                                            cleBdChoix={"modelePortUsb"}
                                            fieldProperties={field}
                                        />
                                    )}
                                />
                            </Box>

                            <Box width="50%">
                                {/* Possède recharge sans fil (booléen) */}
                                <FormFieldController
                                    name="possedeRechargeSansFil"
                                    control={formController}
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...field}
                                                />
                                            }
                                            label="Recharge sans fil"
                                        />
                                    )}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                    
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Batterie</Typography>

                        <Box width="50%">
                            {/* Capacité de la batterie (nombre) */}
                            {/* <FormFieldController
                                name="rangeCapaciteBatterieMah"
                                control={formController}
                                defaultValue={{ min: 1000, max: 10000 }}
                                render={({ field }) => (
                                    <SliderMinMax
                                        label="Capacité de la batterie (mAh)"
                                        MINIMUM={1000}
                                        MAXIMUM={10000}
                                        ariaLabelValueSuffix={" mAh"}
                                        fieldProperties={field}
                                    />
                                )}
                            /> */}
                        </Box>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Authentification</Typography>

                        <Box width="50%">
                            {/* Type d'authentification (texte) */}
                            <FormFieldController
                                name="typesAuthentification"
                                control={formController}
                                defaultValue={[]}
                                render={({ field }) => (
                                    <AutocompleteMultiChoices
                                        label={"Type d'authentification"}
                                        placeholder={"Sélectionnez un ou plusieurs types d'authentification"}
                                        cleBdChoix={"typeAuthentification"}
                                        fieldProperties={field}
                                    />
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Fonctionnalités</Typography>

                        <Stack direction="row" spacing={3}>
                            <Stack direction="column" spacing={2} width="50%">
                                {/* Possède NFC (booléen) */}
                                <FormFieldController
                                    name="possedeNFC"
                                    control={formController}
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...field}
                                                />
                                            }
                                            label="NFC"
                                        />
                                    )}
                                />

                                {/* Possède port audio (booléen) */}
                                <FormFieldController
                                    name="possedePortAudio"
                                    control={formController}
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...field}
                                                />
                                            }
                                            label="Port audio"
                                        />
                                    )}
                                />
                            </Stack>
                            <Stack direction="column" spacing={3} width="50%">
                                {/* Possède carte microSD (booléen) */}
                                <FormFieldController
                                    name="possedeCarteMicroSD"
                                    control={formController}
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...field}
                                                />
                                            }
                                            label="Carte microSD"
                                        />
                                    )}
                                />
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Réseau mobile</Typography>

                        <Box width="50%">
                            {/* Réseau mobile (multi-sélection) */}
                            {/* <FormFieldController
                                name="generationReseauMobile"
                                control={formController}
                                render={({ field }) => (
                                    <AutocompleteMultiChoices
                                        label={"Réseau mobile"}
                                        placeholder={"Sélectionnez un ou plusieurs réseaux mobiles"}
                                        cleBdChoix={"generationReseauMobile"}
                                        fieldProperties={field}
                                    />
                                )}
                            /> */}
                        </Box>
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
import { Box, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import AutocompleteMultiChoices from "../../components/ControlesFiltresRecherche/generic/AutocompleteMultiChoices";
import SliderMinMax from "../../components/ControlesFiltresRecherche/generic/SliderMinMax";
import useHookPageRechercheAvancee from "./HookPageRechercheAvancee";
import AutocompleteMateriauxMultiChoices from "../../components/ControlesFiltresRecherche/AutocompleteMateriauxMultiChoices";

/**
 * Page de recherche avancée pour les téléphones intelligents.
 * @returns Un composant React
 */
function PageRechercheAvancee() {
    /**
     * Récupération des variables d'état et des méthodes de la page de recherche avancée.
     */
    const { onSubmit } = useHookPageRechercheAvancee()

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
            }}
        >
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
                        <Stack direction="column" spacing={2} width="50%">
                            {/* Compagnie (multi-sélection) */}
                            <AutocompleteMultiChoices
                                id="choice-compagnie"
                                label={"Compagnie"}
                                placeholder={"Sélectionnez une ou plusieurs compagnies"}
                                cleBdChoix={"nomCompagnie"}
                            />

                            {/* Année de sortie (min max) */}
                            <SliderMinMax
                                label="Année de sortie"
                                MINIMUM={2000}
                                MAXIMUM={2025}
                                ariaLabelValueSuffix={""}
                            />
                        </Stack>
                        
                        <Box width="50%">
                            {/* Nom du téléphone intelligent (texte) */}
                            <TextField
                                id="nomTelephoneIntelligent"
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
                                label="Hauteur (mm)"
                                MINIMUM={80}
                                MAXIMUM={200}
                                ariaLabelValueSuffix={" mm"}
                            />

                            {/* Largeur (min max) */}
                            <SliderMinMax
                                label="Largeur (mm)"
                                MINIMUM={40}
                                MAXIMUM={100}
                                ariaLabelValueSuffix={" mm"}
                            />
                        </Stack>

                        <Stack direction="column" spacing={3} width="50%">
                            {/* Épaisseur (min max) */}
                            <SliderMinMax
                                label="Épaisseur (mm)"
                                MINIMUM={1}
                                MAXIMUM={40}
                                ariaLabelValueSuffix={" mm"}
                            />

                            {/* Poids (min max) */}
                            <SliderMinMax
                                label="Poids (g)"
                                MINIMUM={50}
                                MAXIMUM={250}
                                ariaLabelValueSuffix={" g"}
                            />
                        </Stack>
                    </Stack>

                    <Typography variant="h6">Matériaux</Typography>

                    <Stack direction="row" spacing={3}>
                        <Stack direction="column" spacing={2} width="50%">
                            {/* Matériau avant (multi-sélection) */}
                            <AutocompleteMateriauxMultiChoices
                                id="choice-materiauxAvant"
                                label={"Matériau avant"}
                            />

                            {/* Matériau arrière (multi-sélection) */}
                            <AutocompleteMateriauxMultiChoices
                                id="choice-materiauxArriere"
                                label={"Matériau arrière"}
                            />
                        </Stack>

                        <Box width="50%">
                            {/* Matériau cadre (multi-sélection) */}
                            <AutocompleteMateriauxMultiChoices
                                id="choice-materiauxCadre"
                                label={"Matériau cadre"}
                            />
                        </Box>
                    </Stack>

                    <Box sx={{ paddingTop: 2 }}>
                        {/* Résistance à l'eau et à la poussière (multi-sélection) */}
                        <AutocompleteMultiChoices
                            id="choice-resistanceEau"
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
                                id="choice-technologieEcran"
                                label={"Technologie écran"}
                                placeholder={"Sélectionnez une ou plusieurs technologies"}
                                cleBdChoix={"technologieEcran"}
                            />

                            {/* Taille écran (min max) */}
                            <SliderMinMax
                                label="Taille écran (pouces)"
                                MINIMUM={5}
                                MAXIMUM={12}
                                ariaLabelValueSuffix={" pouces"}
                            />

                            {/* Taux de rafraichissement (min max) */}
                            <SliderMinMax
                                label="Taux de rafraichissement (Hz)"
                                MINIMUM={60}
                                MAXIMUM={120}
                                ariaLabelValueSuffix={" Hz"}
                            />
                        </Stack>
                        <Stack direction="column" justifyContent="flex-end" spacing={3} width="50%">
                            {/* Résolution largeur (min max) */}
                            <SliderMinMax
                                label="Résolution largeur (px)"
                                MINIMUM={640}
                                MAXIMUM={3840}
                                ariaLabelValueSuffix={" px"}
                            />

                            {/* Résolution hauteur (min max) */}
                            <SliderMinMax
                                label="Résolution hauteur (px)"
                                MINIMUM={480}
                                MAXIMUM={2160}
                                ariaLabelValueSuffix={" px"}
                            />
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Puce</Typography>

                    <Stack direction="row" spacing={8}>
                        <Box width="50%">
                            {/* Puce (multi-sélection) */}
                            <AutocompleteMultiChoices
                                id="choice-puce"
                                label={"Nom de la puce"}
                                placeholder={"Sélectionnez une ou plusieurs puces"}
                                cleBdChoix={"nomPuce"}
                            />
                        </Box>

                        <Box width="50%">
                            {/* Vitesse processeur (min max) */}
                            <SliderMinMax
                                label="Vitesse processeur (GHz)"
                                MINIMUM={1}
                                MAXIMUM={5}
                                step={0.01}
                                ariaLabelValueSuffix={" GHz"}
                            />
                        </Box>
                    </Stack>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Stockage</Typography>

                    <Stack direction="row" spacing={8}>
                        <Stack direction="column" spacing={3} width="50%">
                            {/* Mémoire vive (nombre) */}
                            <SliderMinMax
                                label="Mémoire vive (Go)"
                                MINIMUM={1}
                                MAXIMUM={16}
                                ariaLabelValueSuffix={" Go"}
                            />

                            {/* Technologie du stockage (texte) */}
                            <AutocompleteMultiChoices
                                id="choice-technologie-stockage"
                                label={"Technologie du stockage"}
                                placeholder={"Sélectionnez une ou plusieurs technologies"}
                                cleBdChoix={"technologieStockage"}
                            />
                        </Stack>

                        <Box width="50%">
                            {/* Stockage (nombre) */}
                            <SliderMinMax
                                label="Stockage (Go)"
                                MINIMUM={8}
                                MAXIMUM={2048}
                                ariaLabelValueSuffix={" Go"}
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
                                id="choice-systeme-exploitation"
                                label={"Système d'exploitation"}
                                placeholder={"Sélectionnez un ou plusieurs systèmes d'exploitation"}
                                cleBdChoix={"systemeExploitation"}
                            />
                        </Box>

                        <Box width="50%">
                            {/* Version minimum du système d'exploitation (nombre) */}
                            <TextField
                                label="Version minimum du système d'exploitation"
                                type="number"
                                variant="outlined"
                                fullWidth
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
                            <FormControlLabel
                                control={<Checkbox value={true} />}
                                label="Stabilisation optique"
                            />
                        </Stack>
                        <Stack direction="column" spacing={3} width="50%">
                            {/* Résolution minimum (nombre) */}
                            <TextField
                                label="Résolution minimum (MP)"
                                type="number"
                                variant="outlined"
                                fullWidth
                            />
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Recharge</Typography>

                    <Stack direction="row" spacing={3}>
                        <Box width="50%">
                            {/* Port (texte) */}
                            <AutocompleteMultiChoices
                                id="choice-port"
                                label={"Port"}
                                placeholder={"Sélectionnez un ou plusieurs ports"}
                                cleBdChoix={"modelePortUsb"}
                            />
                        </Box>

                        <Box width="50%">
                            {/* Possède recharge sans fil (booléen) */}
                            <FormControlLabel
                                control={<Checkbox value={true} />}
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
                            label="Capacité de la batterie (mAh)"
                            MINIMUM={1000}
                            MAXIMUM={10000}
                            ariaLabelValueSuffix={" mAh"}
                        />
                    </Box>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Authentification</Typography>

                    <Box width="50%">
                        {/* Type d'authentification (texte) */}
                        <AutocompleteMultiChoices
                            id="choice-authentification"
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
                                control={<Checkbox value={true} />}
                                label="NFC"
                            />

                            {/* Possède port audio (booléen) */}
                            <FormControlLabel
                                control={<Checkbox value={true} />}
                                label="Port audio"
                            />
                        </Stack>
                        <Stack direction="column" spacing={3} width="50%">
                            {/* Possède carte microSD (booléen) */}
                            <FormControlLabel
                                control={<Checkbox value={true} />}
                                label="Carte microSD"
                            />
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Réseau mobile</Typography>

                    <Box width="50%">
                        {/* Réseau mobile (multi-sélection) */}
                        {/* <AutocompleteMultiChoices
                            id="choice-reseau-mobile"
                            label={"Réseau mobile"}
                            placeholder={"Sélectionnez un ou plusieurs réseaux mobiles"}
                            cleBdChoix={"generationReseauMobile"}
                        /> */}
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default PageRechercheAvancee
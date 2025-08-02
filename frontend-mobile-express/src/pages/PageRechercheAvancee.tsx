import { Box, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import AutocompleteMultiChoices from "../components/ControlesFiltresRecherche/AutocompleteMultiChoices";
import SliderMinMax from "../components/ControlesFiltresRecherche/SliderMinMax";
import useListeToutesCompagniesHook from "../components/PageToutesCompagnies/HookListeToutesCompagnies";

/**
 * Page de recherche avancée pour les téléphones intelligents.
 * @returns Un composant React
 */
function PageRechercheAvancee() {
    /**
     * Liste de toutes les compagnies de téléphones intelligents.
     * @property {Array} compagnies Liste de toutes les compagnies.
     * @property {boolean} isCompagniesLoading Indique si les données des compagnies
     * sont en train d'être récupérées depuis l'API.
     */
    const { compagnies, isCompagniesLoading } = useListeToutesCompagniesHook()

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
                                label={"Compagnie"}
                                placeholder={"Sélectionnez une ou plusieurs compagnies"}
                                listeChoix={compagnies}
                                isDonneesChoixLoading={isCompagniesLoading}
                                id="choice-compagnie"
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
                            <AutocompleteMultiChoices
                                label={"Matériau avant"}
                                placeholder={"Sélectionnez un ou plusieurs matériaux"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-materiauxAvant"
                            />

                            {/* Matériau arrière (multi-sélection) */}
                            <AutocompleteMultiChoices
                                label={"Matériau arrière"}
                                placeholder={"Sélectionnez un ou plusieurs matériaux"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-materiauxArriere"
                            />
                        </Stack>

                        <Box width="50%">
                            {/* Matériau cadre (multi-sélection) */}
                            <AutocompleteMultiChoices
                                label={"Matériau cadre"}
                                placeholder={"Sélectionnez un ou plusieurs matériaux"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-materiauxCadre"
                            />
                        </Box>
                    </Stack>

                    <Box sx={{ paddingTop: 2 }}>
                        {/* Résistance à l'eau et à la poussière (multi-sélection) */}
                        <AutocompleteMultiChoices
                            label={"Résistance à l'eau et à la poussière"}
                            placeholder={"Sélectionnez une ou plusieurs certifications"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id="choice-resistanceEau"
                        />
                    </Box>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <Typography variant="h5" color="#c00000" sx={{ paddingTop: 2 }}>Écran</Typography>

                    <Stack direction="row" spacing={8}>
                        <Stack direction="column" spacing={3} width="50%">
                            {/* Technologie écran (multi-sélection) */}
                            <AutocompleteMultiChoices
                                label={"Technologie écran"}
                                placeholder={"Sélectionnez une ou plusieurs technologies"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-technologieEcran"
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
                                label={"Nom de la puce"}
                                placeholder={"Sélectionnez une ou plusieurs puces"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-puce"
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
                                label={"Technologie du stockage"}
                                placeholder={"Sélectionnez une ou plusieurs technologies"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-technologie-stockage"
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
                                label={"Système d'exploitation"}
                                placeholder={"Sélectionnez un ou plusieurs systèmes d'exploitation"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-systeme-exploitation"
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
                            <AutocompleteMultiChoices
                                label={"Type de caméra"}
                                placeholder={"Sélectionnez un ou plusieurs types de caméra"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-type-camera"
                            />

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
                                label={"Port"}
                                placeholder={"Sélectionnez un ou plusieurs ports"}
                                listeChoix={["À venir..."]}
                                isDonneesChoixLoading={false}
                                id="choice-port"
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
                            label={"Type d'authentification"}
                            placeholder={"Sélectionnez un ou plusieurs types d'authentification"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id="choice-authentification"
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
                        <AutocompleteMultiChoices
                            label={"Réseau mobile"}
                            placeholder={"Sélectionnez un ou plusieurs réseaux mobiles"}
                            listeChoix={["À venir..."]}
                            isDonneesChoixLoading={false}
                            id="choice-reseau-mobile"
                        />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default PageRechercheAvancee
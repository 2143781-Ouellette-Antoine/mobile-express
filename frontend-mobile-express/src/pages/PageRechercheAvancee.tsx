import { Box, Stack, TextField, Typography } from "@mui/material"
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
                spacing={2}
                className="fit-content"
                sx={{
                    marginX: 2,
                    marginY: 4,
                }}
            >
                <Typography variant="h4">Recherche avancée</Typography>

                <Typography variant="h5" color="#c00000">Général</Typography>

                {/* Compagnie (multi-sélection) */}
                <AutocompleteMultiChoices
                    label={"Compagnie"}
                    placeholder={"Sélectionnez une ou plusieurs compagnies"}
                    listeChoix={compagnies}
                    isDonneesChoixLoading={isCompagniesLoading}
                />

                {/* Nom du téléphone intelligent (texte) */}
                <TextField
                    id="nomTelephoneIntelligent"
                    label="Nom"
                    variant="outlined"
                    placeholder="Nom du téléphone intelligent"
                />

                {/* Année de sortie (min max) */}
                <SliderMinMax
                    label="Année de sortie"
                    MINIMUM={2000}
                    MAXIMUM={2025}
                    ariaLabelValueSuffix={""}
                />

                <Typography variant="h5" color="#c00000">Construction</Typography>

                {/* Hauteur (min max) */}
                <SliderMinMax
                    label="Hauteur"
                    MINIMUM={80}
                    MAXIMUM={200}
                    ariaLabelValueSuffix={" mm"}
                />

                {/* Largeur (min max) */}
                <SliderMinMax
                    label="Largeur"
                    MINIMUM={40}
                    MAXIMUM={100}
                    ariaLabelValueSuffix={" mm"}
                />

                {/* Épaisseur (min max) */}
                <SliderMinMax
                    label="Épaisseur"
                    MINIMUM={1}
                    MAXIMUM={40}
                    ariaLabelValueSuffix={" mm"}
                />

                {/* Poids (min max) */}
                <SliderMinMax
                    label="Poids"
                    MINIMUM={50}
                    MAXIMUM={250}
                    ariaLabelValueSuffix={" g"}
                />
            </Stack>
        </Box>
    )
}

export default PageRechercheAvancee
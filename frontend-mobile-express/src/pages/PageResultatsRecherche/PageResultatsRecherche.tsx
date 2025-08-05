import { Box, Stack, Typography } from "@mui/material"

/**
 * Page qui affiche les résultats de recherche (liste des téléphones intelligents correspondants).
 * @returns Un composant React pour la page qui affiche les résultats de recherche.
 */
function PageResultatsRecherche() {
    // Récupérer et parse les filtres de recherche dans l'URL.
    const searchParams = new URLSearchParams(window.location.search)
    const filters = {
        brand: searchParams.get("brand") || "",
        model: searchParams.get("model") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
    }

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
                <Typography variant="h4">
                    Résultats de la recherche
                </Typography>

                <ListeResultatsRecherche />
            </Stack>
        </Box>
    )
}

export default PageResultatsRecherche
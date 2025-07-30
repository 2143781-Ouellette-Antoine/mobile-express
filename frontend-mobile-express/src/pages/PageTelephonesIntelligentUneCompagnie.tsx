import { useParams } from "react-router-dom"
import { Box, Stack, Typography } from "@mui/material";
import ListeTelephonesIntelligentsUneCompagnie from "../components/PageTelephonesIntelligentsUneCompagnie/ListeTelephonesIntelligentsUneCompagnie";

/**
 * Page qui affiche les téléphones intelligents d'une compagnie.
 * Récupère le nom de la compagnie dans l'URL.
 * @returns Un composant React pour la page des téléphones intelligents d'une compagnie.
 */
function PageTelephonesIntelligentUneCompagnie() {
    // Récupérer le nom de la compagnie dans l'URL.
    const { nomCompagnie } = useParams();

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
                    Téléphones intelligents de: {nomCompagnie}
                </Typography>

                <ListeTelephonesIntelligentsUneCompagnie nomCompagnie={nomCompagnie!} />
            </Stack>
        </Box>
    )
}

export default PageTelephonesIntelligentUneCompagnie
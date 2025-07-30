import { Box, Stack, Typography } from "@mui/material"
import ListeTousTelephonesIntelligents from "../components/PageTousTelephonesIntelligents/ListeTousTelephonesIntelligents"

/**
 * Page qui affiche tous les téléphones intelligents.
 * @returns Un composant React pour la page qui affiche tous les téléphones intelligents.
 */
function PageTousTelephonesIntelligents() {
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
                    Tous les téléphones intelligents
                </Typography>

                <ListeTousTelephonesIntelligents />
            </Stack>
        </Box>
    )
}

export default PageTousTelephonesIntelligents
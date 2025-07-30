import { Box, Stack, Typography } from "@mui/material"
import ListeToutesCompagnies from "../components/PageToutesCompagnies/ListeToutesCompagnies"

/**
 * Page qui affiche la liste de toutes les compagnies.
 * @returns Un composant React pour la page qui affiche toutes les compagnies.
 */
function PageToutesCompagnies() {
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
                    Toutes les compagnies
                </Typography>

                <ListeToutesCompagnies />
            </Stack>
        </Box>
    )
}

export default PageToutesCompagnies
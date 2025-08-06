import { Box, Stack, Typography } from "@mui/material"
import ListeResultatsRecherche from "../../components/PageResultatsRecherche/ListeResultatsRecherche"
import useHookPageResultatsRecherche from "./HookPageResultatsRecherche"

/**
 * Page qui affiche les résultats de recherche (liste des téléphones intelligents correspondants).
 * @returns Un composant React pour la page qui affiche les résultats de recherche.
 */
function PageResultatsRecherche() {
    const { parseFiltresRecherche } = useHookPageResultatsRecherche()

    const filtresRecherche = parseFiltresRecherche()
    if (!filtresRecherche) return <div />

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

                <ListeResultatsRecherche filtresRecherche={filtresRecherche} />
            </Stack>
        </Box>
    )
}

export default PageResultatsRecherche
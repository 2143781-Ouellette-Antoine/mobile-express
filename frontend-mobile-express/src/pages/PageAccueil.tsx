import { Box, Button, Stack, Typography } from "@mui/material"
import ListeCompagniesEpinglees from "../components/PageAccueil/ListeCompagniesEpinglees";
import ListeTelephonesIntelligentsRecents from "../components/PageAccueil/ListeTelephonesIntelligentsRecents";

/**
 * Page d'accueil du site web.
 * @returns Un composant React pour la page d'accueil du site web.
 */
function PageAccueil() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, paddingX: 2, paddingY: 4 }}>
            <Stack direction="row" spacing={4}>
                {/* Compagnies épinglées */}
                <Stack
                    direction="column"
                    spacing={0}
                    sx={{ maxWidth: '200px'}}
                >
                    <Stack
                        direction="row"
                        gap={1}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography variant="h5">
                            Compagnies
                        </Typography>
                        <Button variant="text" href="/compagnies" sx={{ textAlign: 'center' }}>Voir toutes</Button>
                    </Stack>

                    <ListeCompagniesEpinglees />
                </Stack>

                {/* Téléphones intelligents récents */}
                <div className="fit-content">
                    <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
                        <Typography variant="h4">
                            Téléphones intelligents récemment ajoutés
                        </Typography>
                        <Button variant="text" href="/telephones-intelligents">Voir tous</Button>
                    </Stack>

                    <ListeTelephonesIntelligentsRecents />
                </div>
            </Stack>
        </Box>
    )
}

export default PageAccueil
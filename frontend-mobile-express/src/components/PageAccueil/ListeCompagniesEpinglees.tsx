import { Box, CircularProgress, Link, Stack, Typography } from '@mui/material'
import useListeCompagniesEpingleeHook from '../../hooks/HookRecupererCompagniesEpinglees'

/**
 * Liste des compagnies épinglées sur la page d'accueil.
 * Chaque compagnie est un lien vers la page de la liste des téléphones intelligents de cette compagnie.
 * @returns Un composant React qui affiche la liste des compagnies épinglées.
 */
function ListeCompagniesEpinglees() {
    /**
     * Récupération des variables d'état et des méthodes de ListeCompagniesEpinglees dans le hook.
     * @property {Compagnie[]} compagniesEpinglees Liste des compagnies épinglées sur la page d'accueil.
     * @property {boolean} isCompagniesEpingleesLoading Indique si les compagnies épinglées sont en train d'être récupérées depuis l'API.
     */
    const { compagniesEpinglees, isCompagniesEpingleesLoading } = useListeCompagniesEpingleeHook()

    // Mettre un chargement parce qu'on ne peut pas afficher les compagnies épinglées
    // avant de les avoir reçues.
    if (isCompagniesEpingleesLoading) {
        return (
            <Box display="flex" justifyContent="center" sx={{ marginY: 2 }}>
                <CircularProgress />
            </Box>
        )
    } else {
        // foreach compagnie dans le tableau compagniesEpinglees[],
        // afficher un composant pour chaque compagnie.
        return (
            <Stack spacing={1}>
                {compagniesEpinglees.map((compagnie: string) => (
                    <Link
                        key={compagnie}
                        href={`/compagnie/${compagnie}`}
                    >
                        <Typography variant="h6">
                            {compagnie}
                        </Typography>
                    </Link>
                ))}
            </Stack>
        )
    }
}

export default ListeCompagniesEpinglees
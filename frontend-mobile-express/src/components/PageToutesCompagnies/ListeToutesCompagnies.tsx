import { CircularProgress, Link, Stack, Typography } from '@mui/material'
import useListeToutesCompagniesHook from './HookListeToutesCompagnies'

/**
 * Liste de toutes les compagnies.
 * Chaque compagnie est un lien vers la page de la liste des téléphones de cette compagnie.
 * @returns Un composant React qui affiche la liste de toutes les compagnies.
 */
function ListeToutesCompagnies() {
    /**
     * Récupération des variables d'état et des méthodes de ListeToutesCompagnies dans le hook.
     * @property {Compagnie[]} compagnies Liste de toutes les compagnies.
     * @property {boolean} isCompagniesLoading Indique si les compagnies sont en train d'être récupérées depuis l'API.
     */
    const { compagnies, isCompagniesLoading } = useListeToutesCompagniesHook()

    // Mettre un chargement parce qu'on ne peut pas afficher les compagnies
    // avant de les avoir reçues.
    if (isCompagniesLoading) {
        return (
            <CircularProgress />
        )
    } else {
        // foreach compagnie dans le tableau compagnies[],
        // afficher un composant pour chaque compagnie.
        return (
            <Stack spacing={1}>
                {compagnies.map((compagnie: string) => (
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

export default ListeToutesCompagnies
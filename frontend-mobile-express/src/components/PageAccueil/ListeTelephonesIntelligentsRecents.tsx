import { CircularProgress, Link, Stack, Typography } from '@mui/material'
import type { TelephoneIntelligent } from "../../../models/TelephoneIntelligent"
import useHookRecupererTelephonesIntelligentsRecents from '../../../hooks/HookRecupererTelephonesIntelligentsRecents'

/**
 * Liste des 10 téléphones intelligents les plus récemment sortis.
 * Chaque téléphone est un lien vers sa page de détails.
 * @returns Un composant React qui affiche la liste des 10 téléphones intelligents les plus récemment sortis.
 */
function ListeTelephonesIntelligentsRecents() {
    /**
     * Récupération des variables d'état et des méthodes de ListeTelephonesIntelligentsRecents dans le hook.
     * @property {TelephoneIntelligent[]} telephonesIntelligentsRecents Liste des téléphones intelligents les plus récemment sortis.
     * @property {boolean} isTelephonesIntelligentsRecentsLoading Indique si les téléphones intelligents les plus récemment sortis sont en train d'être récupérés depuis l'API.
     */
    const {
        telephonesIntelligentsRecents,
        isTelephonesIntelligentsRecentsLoading
    } = useHookRecupererTelephonesIntelligentsRecents()

    // Mettre un chargement parce qu'on ne peut pas afficher les téléphones intelligents
    // tant qu'on ne les a pas reçus.
    if (isTelephonesIntelligentsRecentsLoading) {
        return (
            <CircularProgress />
        )
    } else {
        // foreach telephoneIntelligent dans le tableau telephonesIntelligentsRecents[],
        // afficher un composant pour chaque téléphone.
        return (
            <Stack spacing={2}>
                {telephonesIntelligentsRecents.map((telephoneIntelligent: TelephoneIntelligent) => (
                    <Link
                        key={telephoneIntelligent._id}
                        href={`/details-telephone-intelligent/${telephoneIntelligent._id}`}
                        sx={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            p: 2
                        }}
                    >
                        <Stack gap={2} direction="row" alignItems="center">
                            <img
                                src={telephoneIntelligent.urlImagePrincipale}
                                alt={`Image ${telephoneIntelligent.nom}`}
                                style={{ maxHeight: "100px", width: "auto" }}
                            />
                            <Typography variant="h6">
                                {telephoneIntelligent.nomCompagnie + " " + telephoneIntelligent.nom}
                            </Typography>
                        </Stack>
                    </Link>
                ))}
            </Stack>
        )
    }
}

export default ListeTelephonesIntelligentsRecents
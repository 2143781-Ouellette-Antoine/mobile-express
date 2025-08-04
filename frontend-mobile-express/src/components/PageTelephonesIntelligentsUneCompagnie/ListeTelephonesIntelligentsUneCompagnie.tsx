import { CircularProgress, Link, Stack, Typography } from '@mui/material'
import type { TelephoneIntelligent } from "../../models/TelephoneIntelligent"
import useHookRecupererTelephonesIntelligentsUneCompagnie from '../../hooks/HookRecupererTelephonesIntelligentsUneCompagnie'

/**
 * Props pour le composant React: ListeTelephonesIntelligentsUneCompagnie.
 * @property {string} nomCompagnie Nom de la compagnie pour laquelle on affiche les téléphones intelligents.
 */
interface ListeTelephonesIntelligentsUneCompagnieProps {
    nomCompagnie: string;
}

/**
 * Liste de tous les téléphones intelligents d'une compagnie.
 * Chaque téléphone est un lien vers sa page de détails.
 * @prop {string} nomCompagnie Nom de la compagnie pour laquelle on affiche les téléphones intelligents.
 * @returns Un composant React qui affiche la liste de tous les téléphones intelligents d'une compagnie.
 */
function ListeTelephonesIntelligentsUneCompagnie(props: ListeTelephonesIntelligentsUneCompagnieProps) {
    /**
     * Récupération des variables d'état et des méthodes de ListeTelephonesIntelligentsUneCompagnie dans le hook.
     * @property {TelephoneIntelligent[]} telephonesIntelligents Liste de tous les téléphones intelligents d'une compagnie.
     * @property {boolean} isTelephonesIntelligentsLoading Indique si les téléphones intelligents sont en train d'être récupérés depuis l'API.
     */
    const {
        telephonesIntelligents,
        isTelephonesIntelligentsLoading
    } = useHookRecupererTelephonesIntelligentsUneCompagnie(props.nomCompagnie!)

    // Mettre un chargement parce qu'on ne peut pas afficher les téléphones intelligents
    // tant qu'on ne les a pas reçus.
    if (isTelephonesIntelligentsLoading) {
        return (
            <CircularProgress />
        )
    } else {
        // foreach telephoneIntelligent dans le tableau telephonesIntelligents[],
        // afficher un composant pour chaque téléphone.
        return (
            <Stack spacing={2}>
                {telephonesIntelligents.map((telephoneIntelligent: TelephoneIntelligent) => (
                    <Link
                        key={telephoneIntelligent._id}
                        href={`/details-telephone-intelligent/${telephoneIntelligent._id}`}
                        sx={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            p: 2,
                            minWidth: '800px',
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

export default ListeTelephonesIntelligentsUneCompagnie
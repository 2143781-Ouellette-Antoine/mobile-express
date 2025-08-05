import { useAuthState } from 'react-firebase-hooks/auth';
import { AppBar, Button, Container, Link, Skeleton, Stack, Toolbar, Typography } from '@mui/material'
import { Logout as LogoutIcon, Smartphone as SmartphoneIcon } from '@mui/icons-material'
import { useIsAuthLoadedContext } from '../contexts/ContextIsAuthLoaded';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

/**
 * La barre de navigation en haut du site web.
 * Affiche une icône, le nom du site et des liens vers les pages principales.
 * @returns Un composant React pour la barre de navigation en haut du site web.
 */
function TopAppBar() {
    // Variables état de l'utilisateur
    const { isAuthLoaded, setIsAuthLoaded } = useIsAuthLoadedContext();
    const [user] = useAuthState(auth);

    /**
     * Déconnecte l'administrateur.
     */
    const handleLogout = () => {
        // Début du chargement
        setIsAuthLoaded(false);

        signOut(auth).then(() => {
            // Fin du chargement
            setIsAuthLoaded(true);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
                        {/* Accueil */}
                        <Link href="/">
                            <Stack direction="row" alignItems="center" sx={{ textDecoration: 'none', color: 'white' }}>
                                <SmartphoneIcon sx={{ mr: 1 }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{
                                        mr: 3,
                                        display: 'flex',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Mobile Express
                                </Typography>
                            </Stack>
                        </Link>
                        
                        <Stack direction="row" gap={2} sx={{ flexGrow: 1, display: 'flex' }}>
                            {/* Recherche avancée */}
                            <Link
                                href="/recherche-avancee"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Recherche avancée
                            </Link>

                            {/* Tous les téléphones intelligents */}
                            <Link
                                href="/telephones-intelligents"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Téléphones intelligents
                            </Link>

                            {/* Toutes les compagnies */}
                            <Link
                                href="/compagnies"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Compagnies
                            </Link>
                        </Stack>

                        {/* Bouton "Se déconnecter" seulement visible quand l'administrateur est connecté. */}
                        {
                            (user) && (
                                (!isAuthLoaded) ? (
                                    <Skeleton variant='text' animation={'wave'}>
                                        <Typography variant='body1'>Se déconnecter</Typography>
                                    </Skeleton>
                                ) : (
                                        <Button
                                            onClick={() => {
                                                handleLogout();
                                            }}
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<LogoutIcon />}
                                        >
                                            Se déconnecter
                                        </Button>
                                )
                            )
                        }
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopAppBar
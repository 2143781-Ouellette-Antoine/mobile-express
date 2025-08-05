/**
 * Basé sur le modèle de Material UI 
 * https://github.com/mui/material-ui/tree/v5.14.4/docs/data/material/getting-started/templates/sign-in
 * Modifié par Antoine Ouellette
 **/
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Avatar, Button, CssBaseline, TextField, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, logInWithEmailAndPassword } from '../firebase';
import { useIsAuthLoadedContext } from '../contexts/ContextIsAuthLoaded';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            Antoine Ouellette {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

/**
 * Page de connexion pour l'administrateur.
 * @returns Un composant React pour la page de connexion pour l'administrateur.
 */
function PageConnexionAdministrateur() {
    const [user, loading] = useAuthState(auth);
    // Variables état de l'utilisateur
    const { isAuthLoaded, setIsAuthLoaded } = useIsAuthLoadedContext();
    // Récupérer la méthode de navigation
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) {
            setIsAuthLoaded(true);
            if (
                window.location.pathname == '/connexion-administrateur' &&
                isAuthLoaded && user && !loading
            ) {
                navigate('/administration');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        logInWithEmailAndPassword(
            data.get('email') as string,
            data.get('password') as string
        );
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                component="main"
                sx={{
                    width: '100%',
                    height: '100%',
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: 400,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <CssBaseline />
                    
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5" align="center">
                        S'authentifier pour la page d'administration de Mobile Express
                    </Typography>

                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{
                            mt: 1,
                            width: 400,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="courriel"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="mot de passe"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            S'authentifier
                        </Button>

                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default PageConnexionAdministrateur;
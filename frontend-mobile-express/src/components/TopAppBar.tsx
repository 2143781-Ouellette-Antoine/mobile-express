import { AppBar, Box, Button, Container, Link, Stack, Toolbar, Typography } from '@mui/material'
import { Smartphone as SmartphoneIcon } from '@mui/icons-material'

/**
 * La barre de navigation en haut du site web.
 * Affiche une icône, le nom du site et des liens vers les pages principales.
 * @returns Un composant React pour la barre de navigation en haut du site web.
 */
function TopAppBar() {
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
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default TopAppBar
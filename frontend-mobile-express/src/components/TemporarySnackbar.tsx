import * as React from 'react';
import { Alert, Snackbar, type SnackbarCloseReason } from '@mui/material';
import { useTemporarySnackbarContext } from '../contexts/ContextTemporarySnackbar';

/**
 * Valeurs possibles pour le type de message du snackbar.
 */
export type SnackbarMessageType = 'error' | 'warning' | 'info' | 'success';

/**
 * Composant React d'un Snackbar qui se ferme automatiquement après 5 secondes.
 * De base, le snackbar n'est pas affiché tant qu'on ne change pas la valeur de isSnackbarOpen à true.
 * @returns Un composant React qui affiche un snackbar.
 * 
 * Source: Ouellette, Antoine. (2025). [Mon projet dans le cadre du cours de Projet intégrateur 2 (Site web d'Expo-SAT)]. https://github.com/Cours-Alexandre-Ouellet/Expo-SAT
 * Inspiré de https://mui.com/material-ui/react-snackbar/#automatic-dismiss
 * Modifié par Antoine Ouellette.
 */
export default function TemporarySnackbar() {
    // Récupération des variables et méthodes du contexte TemporarySnackbarContext.
    const { isSnackbarOpen, setIsSnackbarOpen, snackbarMessage, snackbarMessageType } = useTemporarySnackbarContext();

    /**
     * Méthode déclenchée à chaque fois qu'un événement essaie de fermer le Snackbar.
     * 
     * On veut intercepter les événements qui fermeraient le snackbar pour les empêcher.
     * Par exemple, on veut prévenir que le Snackbar se ferme si l'utilisateur clique dans l'écran.
     * @param _event Événement de fermeture du Snackbar.
     * @param reason Raison de la fermeture du Snackbar (passée par MUI).
     */
    const handleCloseEvents = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        // Si l'utilisateur clique dans l'écran (clickaway correspond à un clic en dehors du snackbar).
        if (reason === 'clickaway') {
            return // On ignore l'événement et on ne ferme pas le snackbar.
        }

        // Sinon, si l'utilisateur ferme le snackbar en cliquant sur le X ou si ça fait 5 secondes.
        setIsSnackbarOpen(false) // Exécute la méthode dans le parent qui change la valeur de la variable d'état.
    }

    return (
        <Snackbar
            open={isSnackbarOpen} // Gère si le snackbar est affiché ou non.
            autoHideDuration={5000} // Délai avant la fermeture automatique (5 secondes).
            onClose={handleCloseEvents} // Déclenchée à chaque fois qu'un événement essaie de fermer le Snackbar.
            anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position du snackbar (en haut au centre de l'écran).
        >
            {/* Composant qui change le style selon le type de message */}
            <Alert
                onClose={handleCloseEvents}
                severity={snackbarMessageType} // Change la couleur selon le type de message.
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackbarMessage} {/* Message à afficher dans le snackbar. */}
            </Alert>
        </Snackbar>
    )
}
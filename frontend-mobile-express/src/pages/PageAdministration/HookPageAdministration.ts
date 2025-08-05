import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useIsAuthLoadedContext } from '../../contexts/ContextIsAuthLoaded';
import { auth } from "../../firebase";
import type { SnackbarMessageType } from "../../components/TemporarySnackbar";

/**
 * Variables d'état et méthodes pour le composant React: PageAdministration.
 * Ceci est un hook React.
 */
export default function usePageAdministrationHook() {
    // Authentification de l'utilisateur
    const [user, loading] = useAuthState(auth);
    // Récupération de la méthode pour la navigation
    const navigate = useNavigate();
    // Variables état de l'utilisateur
    const { setIsAuthLoaded } = useIsAuthLoadedContext();

    // Indique si le formulaire de création est ouvert.
    const [isFormulaireCreationOuvert, setIsFormulaireCreationOuvert] = useState<boolean>(false)

    // Snackbar pour afficher les messages d'erreur ou de succès.
    const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false) // Pour contrôler si le snackbar est affiché ou non.
    const [snackbarMessage, setSnackbarMessage] = useState<string>("") // Message à afficher dans le snackbar.
    const [snackbarMessageType, setSnackbarMessageType] = useState<SnackbarMessageType>("error") // Type de message à afficher dans le snackbar. Peut être "success", "error", "warning" ou "info".

    /**
     * Méthode exécutée lorsque l'état de connexion de l'utilisateur change.
     * Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion.
     */
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (!user) {
            setIsAuthLoaded(true);
            navigate('/connexion-administrateur');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);

    return {
        isFormulaireCreationOuvert,
        setIsFormulaireCreationOuvert,
        isSnackbarOpen,
        setIsSnackbarOpen,
        snackbarMessage,
        setSnackbarMessage,
        snackbarMessageType,
        setSnackbarMessageType
    }
}
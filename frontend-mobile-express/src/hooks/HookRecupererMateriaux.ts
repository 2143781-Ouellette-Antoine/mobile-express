import { useEffect, useState } from "react"
import axios from "axios"
import { useTemporarySnackbarContext } from "../contexts/ContextTemporarySnackbar";

/**
 * Variables d'état et méthodes pour la récupération des matériaux dans la base de données.
 * Ceci est un hook React.
 * @returns {listeValeurs: string[], isListeValeursLoading: boolean} Un objet contenant
 * la liste des matériaux associés à la clé dans la base de données et l'état de chargement des matériaux.
 */
export default function useHookRecupererMateriaux() {
    /**
     * Une variable d'état contenant la liste des matériaux dans la base de données
     * et une variable qui indique si les matériaux sont en train d'être récupérés depuis l'API.
     */
    const [listeValeursState, setListeValeursState] = useState<
        // Le type de la variable d'état est un objet avec deux propriétés:
        // - Une liste de chaînes de caractères;
        // - Un booléen.
        { listeValeursState: string[]; isListeValeursLoading: boolean }
    >(
        // La valeur par défaut de la variable d'état.
        { listeValeursState: [], isListeValeursLoading: true }
    )

    /**
     * Récupération du contexte pour pouvoir afficher des messages.
     */
    const { setSnackbarMessage, setSnackbarMessageType, setIsSnackbarOpen } = useTemporarySnackbarContext()

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère la liste des matériaux depuis l'API.
     */
    useEffect(() => {
        // Activer le chargement.
        setListeValeursState({ listeValeursState: [], isListeValeursLoading: true })

        axios.get("http://localhost:3000/api/materiaux/all")
            .then((response) => {
                setListeValeursState({ listeValeursState: response.data.materiaux, isListeValeursLoading: false })
            })
            .catch((_error) => {
                setSnackbarMessage("Une erreur est survenue lors de la récupération des matériaux.")
                setSnackbarMessageType("error")
                setIsSnackbarOpen(true)
            })
    }, [])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        listeValeurs: listeValeursState.listeValeursState,
        isListeValeursLoading: listeValeursState.isListeValeursLoading
    }
}
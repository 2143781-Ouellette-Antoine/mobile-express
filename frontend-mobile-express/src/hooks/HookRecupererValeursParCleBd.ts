import { useEffect, useState } from "react"
import axios from "axios"
import { useTemporarySnackbarContext } from "../contexts/ContextTemporarySnackbar";

/**
 * Variables d'état et méthodes pour la récupération des valeurs associées à une clé dans la base de données.
 * Ex: récupérer toutes les valeurs uniques associées à la clé "nomCompagnie".
 * Ceci est un hook React.
 * @param {string} cleBd La clé dans la base de données pour laquelle récupérer les valeurs uniques.
 * @returns {listeValeurs: string[], isListeValeursLoading: boolean} Un objet contenant
 * la liste des valeurs associées à la clé dans la base de données et l'état de chargement des valeurs.
 */
export default function useHookRecupererValeursParCleBd(cleBd: string) {
    /**
     * Une variable d'état contenant la liste des valeurs pour la clé dans la base de données
     * et une variable qui indique si les valeurs sont en train d'être récupérées depuis l'API.
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
     * Récupère la liste des valeurs pour la clé BD passée en props depuis l'API.
     */
    useEffect(() => {
        // Activer le chargement.
        setListeValeursState({ listeValeursState: [], isListeValeursLoading: true })

        axios.get(`http://localhost:3000/api/telephones-intelligents/valeurs-cle-bd/${cleBd}`)
            .then((response) => {
                setListeValeursState({ listeValeursState: response.data.valeursDistinctes, isListeValeursLoading: false })
            })
            .catch((_error) => {
                setSnackbarMessage("Une erreur est survenue lors de la récupération des choix des listes déroulantes.")
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
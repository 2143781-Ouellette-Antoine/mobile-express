import axios from "axios"
import { useEffect, useState } from "react"
import { useTemporarySnackbarContext } from "../contexts/ContextTemporarySnackbar"

/**
 * Variables d'état et méthodes pour le composant React: ListeToutesCompagnies.
 * Ceci est un hook React.
 * @returns {compagnies: string[], isCompagniesLoading: boolean} Un objet contenant
 * les compagnies et l'état de chargement.
 */
export default function useHookRecupererToutesCompagnies() {
    /**
     * Tableau de toutes les compagnies.
     */
    const [compagnies, setCompagnies] = useState<string[]>([])

    /**
     * Indique si les compagnies sont en train d'être récupérées depuis l'API.
     */
    const [isCompagniesLoading, setIsCompagniesLoading] = useState<boolean>(true)

    /**
     * Récupération du contexte pour pouvoir afficher des messages.
     */
    const { setSnackbarMessage, setSnackbarMessageType, setIsSnackbarOpen } = useTemporarySnackbarContext()

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les compagnies depuis l'API.
     */
    useEffect(() => {
        setIsCompagniesLoading(true)
        axios.get(`http://localhost:3000/api/compagnies/all`)
            .then((response) => {
                // Les compagnies sont dans la propriété "compagnies" de la réponse.
                setCompagnies(response.data.compagnies)
            })
            .catch((_error) => {
                setSnackbarMessage("Une erreur est survenue lors de la récupération des compagnies.")
                setSnackbarMessageType("error")
                setIsSnackbarOpen(true)
            })
    }, [])

    /**
     * Lorsque les données des compagnies sont récupérées
     * depuis l'API, arrêter le chargement.
     */
    useEffect(() => {
        setIsCompagniesLoading(false)
    }, [compagnies])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        compagnies,
        isCompagniesLoading
    }
}
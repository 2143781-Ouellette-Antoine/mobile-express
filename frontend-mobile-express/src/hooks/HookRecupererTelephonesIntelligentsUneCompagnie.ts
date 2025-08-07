import axios from "axios"
import { useEffect, useState } from "react"
import type { TelephoneIntelligent } from "../models/TelephoneIntelligent"
import { useTemporarySnackbarContext } from "../contexts/ContextTemporarySnackbar"

/**
 * Variables d'état et méthodes pour la récupération des téléphones intelligents d'une compagnie.
 * Ceci est un hook React.
 * @param {string} nomCompagnie Nom de la compagnie pour laquelle on veut récupérer les téléphones intelligents.
 * @returns {telephonesIntelligents: TelephoneIntelligent[], isTelephonesIntelligentsLoading: boolean} Un objet contenant
 * les téléphones intelligents et l'état de chargement.
 */
export default function useHookRecupererTelephonesIntelligentsUneCompagnie(nomCompagnie: string) {
    /**
     * Tableau de tous les téléphones intelligents de la compagnie.
     */
    const [telephonesIntelligents, setTelephonesIntelligents] = useState<TelephoneIntelligent[]>([])

    /**
     * Indique si les téléphones intelligents sont en train d'être récupérés depuis l'API.
     */
    const [isTelephonesIntelligentsLoading, setIsTelephonesIntelligentsLoading] = useState<boolean>(true)

    /**
     * Récupération du contexte pour pouvoir afficher des messages.
     */
    const { setSnackbarMessage, setSnackbarMessageType, setIsSnackbarOpen } = useTemporarySnackbarContext()

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère tous les téléphones intelligents d'une compagnie depuis l'API.
     */
    useEffect(() => {
        setIsTelephonesIntelligentsLoading(true)
        axios.get(`http://localhost:3000/api/telephones-intelligents/compagnie/${nomCompagnie}`)
            .then((response) => {
                setTelephonesIntelligents(response.data.telephonesIntelligents)
            })
            .catch((_error) => {
                setSnackbarMessage("Une erreur est survenue lors de la récupération des téléphones intelligents.")
                setSnackbarMessageType("error")
                setIsSnackbarOpen(true)
            })
    }, [])

    /**
     * Lorsque les données des téléphones intelligents sont récupérées
     * depuis l'API, arrêter le chargement.
     */
    useEffect(() => {
        setIsTelephonesIntelligentsLoading(false)
    }, [telephonesIntelligents])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        telephonesIntelligents,
        isTelephonesIntelligentsLoading,
        setIsTelephonesIntelligentsLoading
    }
}
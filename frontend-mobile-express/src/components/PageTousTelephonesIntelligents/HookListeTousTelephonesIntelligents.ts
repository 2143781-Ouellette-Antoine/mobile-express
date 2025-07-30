import axios from "axios"
import { useEffect, useState } from "react"
import type { TelephoneIntelligent } from "../../models/TelephoneIntelligent"

/**
 * Variables d'état et méthodes pour le composant React: ListeTousTelephonesIntelligents.
 * Ceci est un hook React.
 */
export default function useListeTousTelephonesIntelligentsHook() {
    /**
     * Tableau de tous les téléphones intelligents.
     */
    const [telephonesIntelligents, setTelephonesIntelligents] = useState<TelephoneIntelligent[]>([])

    /**
     * Indique si les téléphones intelligents sont en train d'être récupérés depuis l'API.
     */
    const [isTelephonesIntelligentsLoading, setIsTelephonesIntelligentsLoading] = useState<boolean>(true)

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère tous les téléphones intelligents depuis l'API.
     */
    useEffect(() => {
        setIsTelephonesIntelligentsLoading(true)
        axios.get(`http://localhost:3000/api/telephones-intelligents/all`).then((response) => {
            setTelephonesIntelligents(response.data.telephonesIntelligents)
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
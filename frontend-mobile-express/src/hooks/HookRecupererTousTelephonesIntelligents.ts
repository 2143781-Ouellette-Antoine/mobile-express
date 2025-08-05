import axios from "axios"
import { useEffect, useState, useCallback } from "react"
import type { TelephoneIntelligent } from "../models/TelephoneIntelligent"

/**
 * Variables d'état et méthodes pour la récupération de tous les téléphones intelligents.
 * Ceci est un hook React.
 * @returns {telephonesIntelligents: TelephoneIntelligent[],
 * isTelephonesIntelligentsLoading: boolean,
 * fetchTelephonesIntelligents: Function} Un objet contenant
 * les téléphones intelligents, l'état de chargement et une méthode pour actualiser les données.
 */
export default function useHookRecupererTousTelephonesIntelligents() {
    /**
     * Tableau de tous les téléphones intelligents.
     */
    const [telephonesIntelligents, setTelephonesIntelligents] = useState<TelephoneIntelligent[]>([])

    /**
     * Indique si les téléphones intelligents sont en train d'être récupérés depuis l'API.
     */
    const [isTelephonesIntelligentsLoading, setIsTelephonesIntelligentsLoading] = useState<boolean>(true)

    /**
     * Méthode pour récupérer les téléphones intelligents depuis l'API.
     * Peut être appelée pour recharger les données.
     */
    const fetchTelephonesIntelligents = useCallback(async () => {
        setIsTelephonesIntelligentsLoading(true)
        try {
            const response = await axios.get(`http://localhost:3000/api/telephones-intelligents/all`)
            setTelephonesIntelligents(response.data.telephonesIntelligents)
        } catch (error) {
            console.error("Erreur lors de la récupération des téléphones intelligents:", error)
        } finally {
            setIsTelephonesIntelligentsLoading(false)
        }
    }, [])

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère tous les téléphones intelligents depuis l'API.
     */
    useEffect(() => {
        fetchTelephonesIntelligents()
    }, [fetchTelephonesIntelligents])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        telephonesIntelligents,
        isTelephonesIntelligentsLoading,
        fetchTelephonesIntelligents
    }
}
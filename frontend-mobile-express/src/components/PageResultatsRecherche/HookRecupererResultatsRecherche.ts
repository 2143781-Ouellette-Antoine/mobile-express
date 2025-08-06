import axios from "axios"
import { useEffect, useState } from "react"
import type { TelephoneIntelligent } from "../../models/TelephoneIntelligent"
import type { FiltresRecherche } from "../../models/FiltresRecherche"

/**
 * Variables d'état et méthodes pour la récupération des téléphones intelligents d'une compagnie.
 * Ceci est un hook React.
 * @param {string} filtresRecherche Filtres de recherche pour les téléphones intelligents.
 * @returns {telephonesIntelligents: TelephoneIntelligent[], isTelephonesIntelligentsLoading: boolean} Un objet contenant
 * les téléphones intelligents et l'état de chargement.
 */
export default function useHookRecupererResultatsRecherche(filtresRecherche: FiltresRecherche) {
    /**
     * Tableau de tous les téléphones intelligents de la compagnie.
     */
    const [telephonesIntelligents, setTelephonesIntelligents] = useState<TelephoneIntelligent[]>([])

    /**
     * Indique si les téléphones intelligents sont en train d'être récupérés depuis l'API.
     */
    const [isTelephonesIntelligentsLoading, setIsTelephonesIntelligentsLoading] = useState<boolean>(true)

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les résultats de recherche de téléphones intelligents depuis l'API.
     */
    useEffect(() => {
        setIsTelephonesIntelligentsLoading(true)
        axios.post(
            `http://localhost:3000/api/telephones-intelligents/recherche`,
            filtresRecherche
        ).then((response) => {
            setTelephonesIntelligents(response.data.telephonesIntelligents)
        })
    }, [filtresRecherche])

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
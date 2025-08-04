import axios from "axios"
import { useEffect, useState } from "react"
import type { TelephoneIntelligent } from "../models/TelephoneIntelligent"

/**
 * Variables d'état et méthodes pour la récupération des téléphones intelligents
 * les plus récemment sortis dans la base de données.
 * Ceci est un hook React.
 * @returns {telephonesIntelligentsRecents: TelephoneIntelligent[],
 * isTelephonesIntelligentsRecentsLoading: boolean} Un objet contenant
 * les téléphones intelligents récemment sortis et l'état de chargement.
 */
export default function useHookRecupererTelephonesIntelligentsRecents() {
    /**
     * Tableau des téléphones intelligents récemment sortis.
     */
    const [telephonesIntelligentsRecents, setTelephonesIntelligentsRecents] = useState<TelephoneIntelligent[]>([])

    /**
     * Indique si les téléphones intelligents les plus récemment sortis sont en train d'être récupérés depuis l'API.
     */
    const [isTelephonesIntelligentsRecentsLoading, setIsTelephonesIntelligentsRecentsLoading] = useState<boolean>(true)

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les 10 téléphones intelligents les plus récemment sortis depuis l'API.
     */
    useEffect(() => {
        setIsTelephonesIntelligentsRecentsLoading(true)
        axios.get(`http://localhost:3000/api/telephones-intelligents/dix-plus-recents`).then((response) => {
            setTelephonesIntelligentsRecents(response.data.telephonesIntelligents)
        })
    }, [])

    /**
     * Lorsque les données des téléphones intelligents récents sont récupérées
     * depuis l'API, arrêter le chargement.
     */
    useEffect(() => {
        setIsTelephonesIntelligentsRecentsLoading(false)
    }, [telephonesIntelligentsRecents])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        telephonesIntelligentsRecents,
        isTelephonesIntelligentsRecentsLoading,
        setIsTelephonesIntelligentsRecentsLoading
    }
}
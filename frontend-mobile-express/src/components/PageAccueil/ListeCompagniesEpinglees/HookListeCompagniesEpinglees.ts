import axios from "axios"
import { useEffect, useState } from "react"

/**
 * Variables d'état et méthodes pour le composant React: ListeCompagniesEpinglees.
 * Ceci est un hook React.
 */
export default function useListeCompagniesEpingleesHook() {
    /**
     * Tableau des compagnies épinglées.
     */
    const [compagniesEpinglees, setCompagniesEpinglees] = useState<string[]>([])

    /**
     * Indique si les compagnies épinglées sont en train d'être récupérées depuis l'API.
     */
    const [isCompagniesEpingleesLoading, setIsCompagniesEpingleesLoading] = useState<boolean>(true)

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les compagnies épinglées depuis l'API.
     */
    useEffect(() => {
        setIsCompagniesEpingleesLoading(true)
        axios.get(`http://localhost:3000/api/compagnies/epinglees-accueil`).then((response) => {
            setCompagniesEpinglees(response.data.compagnies)
        })
    }, [])

    /**
     * Lorsque les données des compagnies épinglées sont récupérées
     * depuis l'API, arrêter le chargement.
     */
    useEffect(() => {
        setIsCompagniesEpingleesLoading(false)
    }, [compagniesEpinglees])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        compagniesEpinglees,
        isCompagniesEpingleesLoading
    }
}
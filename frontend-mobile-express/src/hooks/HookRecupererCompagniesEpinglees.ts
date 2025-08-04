import { useEffect, useState } from "react"
import axios from "axios"

/**
 * Variables d'état et méthodes pour la récupération des compagnies épinglées dans la base de données.
 * Ceci est un hook React.
 * @returns {compagniesEpinglees: string[], isCompagniesEpingleesLoading: boolean} Un objet contenant
 * les compagnies épinglées et l'état de chargement.
 */
export default function useHookRecupererCompagniesEpinglees() {
    /**
     * Une variable d'état contenant la liste des compagnies épinglées
     * et une variable qui indique si les données sont en train d'être récupérées depuis l'API.
     */
    const [compagniesEpingleesState, setCompagniesEpingleesState] = useState<
        // Le type de la variable d'état est un objet avec deux propriétés:
        // - Une liste de chaînes de caractères;
        // - Un booléen.
        { compagniesEpinglees: string[]; isLoading: boolean }
    >(
        // La valeur par défaut de la variable d'état.
        { compagniesEpinglees: [], isLoading: true }
    )

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les compagnies épinglées depuis l'API.
     */
    useEffect(() => {
        // Activer le chargement.
        setCompagniesEpingleesState({ compagniesEpinglees: [], isLoading: true })

        axios.get(`http://localhost:3000/api/compagnies/epinglees-accueil`)
            .then((response) => {
                setCompagniesEpingleesState({ compagniesEpinglees: response.data.compagnies, isLoading: false })
            })
    }, [])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        compagniesEpinglees: compagniesEpingleesState.compagniesEpinglees,
        isCompagniesEpingleesLoading: compagniesEpingleesState.isLoading
    }
}
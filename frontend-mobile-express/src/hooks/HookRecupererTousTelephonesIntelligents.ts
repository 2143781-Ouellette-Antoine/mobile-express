import axios from "axios"
import { useEffect, useState } from "react"
import type { TelephoneIntelligent } from "../models/TelephoneIntelligent"
import { useTemporarySnackbarContext } from "../contexts/ContextTemporarySnackbar"

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
     * Une variable d'état contenant la liste des compagnies épinglées
     * et une variable qui indique si les données sont en train d'être récupérées depuis l'API.
     */
    const [telephonesIntelligentsState, setTelephonesIntelligentsState] = useState<
        // Le type de la variable d'état est un objet avec deux propriétés:
        // - Une liste d'objets `TelephoneIntelligent`;
        // - Un booléen.
        { telephonesIntelligents: TelephoneIntelligent[]; isLoading: boolean }
    >(
        // La valeur par défaut de la variable d'état.
        { telephonesIntelligents: [], isLoading: true }
    )

    /**
     * Récupération du contexte pour pouvoir afficher des messages.
     */
    const { setSnackbarMessage, setSnackbarMessageType, setIsSnackbarOpen } = useTemporarySnackbarContext()

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     */
    useEffect(() => {
        // Activer le chargement.
        setTelephonesIntelligentsState({ telephonesIntelligents: [], isLoading: true })

        axios.get(`http://localhost:3000/api/telephones-intelligents/all`)
            .then((response) => {
                setTelephonesIntelligentsState({ telephonesIntelligents: response.data.telephonesIntelligents, isLoading: false })
            })
            .catch((_error) => {
                setSnackbarMessage("Une erreur est survenue lors de la récupération des téléphones intelligents.")
                setSnackbarMessageType("error")
                setIsSnackbarOpen(true)
            })
    }, [])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        telephonesIntelligents: telephonesIntelligentsState.telephonesIntelligents,
        isTelephonesIntelligentsLoading: telephonesIntelligentsState.isLoading
    }
}
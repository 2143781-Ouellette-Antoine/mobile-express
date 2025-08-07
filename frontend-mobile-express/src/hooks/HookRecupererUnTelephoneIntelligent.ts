import { useEffect, useState } from "react"
import axios from "axios"
import type { TelephoneIntelligent } from "../models/TelephoneIntelligent"
import { useTemporarySnackbarContext } from "../contexts/ContextTemporarySnackbar";

/**
 * Variables d'état et méthodes pour la récupération des détails d'un téléphone intelligent.
 * Ceci est un hook React.
 * @param id L'id dans la base de données du téléphone intelligent.
 * @returns {telephoneIntelligent: TelephoneIntelligent | undefined,
 * isTelephoneIntelligentLoading: boolean} Un objet contenant les détails du téléphone
 * intelligent et l'état de chargement.
 */
function useHookRecupererUnTelephoneIntelligent(id: string) {
    /**
     * Une variable d'état contenant le TelephoneIntelligent à afficher
     * et une variable qui indique si les données sont en train d'être récupérées depuis l'API.
     */
    const [telephoneIntelligentState, setTelephoneIntelligentState] = useState<
        // Le type de la variable d'état est un objet avec deux propriétés:
        // - Un objet TelephoneIntelligent ou undefined;
        // - Un booléen.
        { telephoneIntelligent: TelephoneIntelligent | undefined; isLoading: boolean }
    >(
        // La valeur par défaut de la variable d'état.
        { telephoneIntelligent: undefined, isLoading: true }
    )

    /**
     * Récupération du contexte pour pouvoir afficher des messages.
     */
    const { setSnackbarMessage, setSnackbarMessageType, setIsSnackbarOpen } = useTemporarySnackbarContext()

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les données du téléphone intelligent depuis l'API.
     */
    useEffect(() => {
        // Activer le chargement.
        setTelephoneIntelligentState({ telephoneIntelligent: undefined, isLoading: true })

        axios.get(`http://localhost:3000/api/telephones-intelligents/id/${id}`)
            .then((response) => {
                // Mettre à jour le téléphone intelligent et arrêter le chargement.
                setTelephoneIntelligentState({ telephoneIntelligent: response.data.telephoneIntelligent, isLoading: false })
            })
            .catch((_error) => {
                setSnackbarMessage("Une erreur est survenue lors de la récupération du téléphone intelligent.")
                setSnackbarMessageType("error")
                setIsSnackbarOpen(true)
            })
    }, [id])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        telephoneIntelligent: telephoneIntelligentState.telephoneIntelligent,
        isTelephoneIntelligentLoading: telephoneIntelligentState.isLoading,
    }
}

export default useHookRecupererUnTelephoneIntelligent
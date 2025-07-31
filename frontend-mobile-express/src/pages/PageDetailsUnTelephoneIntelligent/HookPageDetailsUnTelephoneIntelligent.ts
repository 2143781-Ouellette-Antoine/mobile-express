import { useEffect, useState } from "react"
import axios from "axios"
import type { TelephoneIntelligent } from "../../models/TelephoneIntelligent"

/**
 * Variables d'état et méthodes pour le composant React: PageDetailsUnTelephoneIntelligent.
 * Ceci est un hook React.
 * @param id L'id dans la base de données du téléphone intelligent.
 * @returns Un objet contenant les détails du téléphone intelligent et l'état de chargement.
 */
function usePageDetailsUnTelephoneIntelligentHook(id: string) {
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
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les données du téléphone intelligent depuis l'API.
     */
    useEffect(() => {
        setTelephoneIntelligentState({ telephoneIntelligent: undefined, isLoading: true })

        axios.get(`http://localhost:3000/api/telephones-intelligents/id/${id}`)
            .then((response) => {
                setTelephoneIntelligentState({ telephoneIntelligent: response.data.telephoneIntelligent, isLoading: false });
            })
    }, [id])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        telephoneIntelligent: telephoneIntelligentState.telephoneIntelligent,
        isTelephoneIntelligentLoading: telephoneIntelligentState.isLoading,
    }
}

export default usePageDetailsUnTelephoneIntelligentHook
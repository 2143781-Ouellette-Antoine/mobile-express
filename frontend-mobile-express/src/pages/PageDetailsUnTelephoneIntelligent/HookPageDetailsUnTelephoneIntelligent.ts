import { useEffect, useState } from "react"
import axios from "axios"
import type { TelephoneIntelligent } from "../../models/TelephoneIntelligent"

/**
 * Variables d'état et méthodes pour le composant React: PageDetailsUnTelephoneIntelligent.
 * Ceci est un hook React.
 * @param id L'id dans la base de données du téléphone intelligent.
 * @returns Un objet contenant les détails du téléphone intelligent et l'état de chargement.
 */
function useTelephoneIntelligentHook(id: string) {
    /**
     * Le téléphone intelligent dont on veut afficher les détails.
     */
    const [telephoneIntelligent, setTelephoneIntelligent] = useState<TelephoneIntelligent | undefined>(undefined);

    /**
     * Indique si les données du téléphone intelligent sont en train d'être récupérées depuis l'API.
     */
    const [isTelephoneIntelligentLoading, setIsTelephoneIntelligentLoading] = useState<boolean>(true);

    /**
     * Méthode exécutée une fois lors du chargement du composant.
     * Récupère les données du téléphone intelligent depuis l'API.
     */
    useEffect(() => {
        setIsTelephoneIntelligentLoading(true);
        axios.get(`http://localhost:3000/api/telephones-intelligents/id/${id}`)
            .then((response) => {
                setTelephoneIntelligent(response.data.telephoneIntelligent)
            })
    }, [id])

    /**
     * Méthode exécutée une fois les données du téléphone intelligent reçues.
     * Met à jour l'état de chargement.
     */
    useEffect(() => {
        setIsTelephoneIntelligentLoading(false)
    }, [telephoneIntelligent])

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    // useEffect() n'est pas nécessaire, car il est exposé automatiquement par le hook.
    return {
        telephoneIntelligent,
        isTelephoneIntelligentLoading
    }
}

export default useTelephoneIntelligentHook
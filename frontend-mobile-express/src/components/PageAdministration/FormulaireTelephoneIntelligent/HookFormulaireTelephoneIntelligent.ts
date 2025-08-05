import axios from "axios"
import type { TelephoneIntelligent } from "../../../models/TelephoneIntelligent"

/**
 * Variables d'état et méthodes pour le composant React: FormulaireTelephoneIntelligent.
 * Ceci est un hook React.
 * @returns { { Function, string, boolean } } Un objet contenant les variables d'état et
 * les méthodes de FormulaireTelephoneIntelligent.
 */
export default function useHookFormulaireTelephoneIntelligent() {
    /**
     * Méthode pour créer un téléphone intelligent dans la base de données.
     * @param {TelephoneIntelligent} telephoneIntelligentACreer Le téléphone intelligent à créer.
     */
    const creerTelephoneIntelligent = async (telephoneIntelligentACreer: TelephoneIntelligent) => {
        try {
            const response = await axios.post("http://localhost:3000/api/telephones-intelligents", telephoneIntelligentACreer)
            return response.data
        } catch (error) {
            console.error("Erreur lors de la création du téléphone intelligent:", error)
            throw error
        }
    }

    /**
     * Méthode pour modifier un téléphone intelligent dans la base de données.
     * @param {TelephoneIntelligent} telephoneIntelligentAModifier Le téléphone intelligent à modifier.
     */
    const modifierTelephoneIntelligent = async (telephoneIntelligentAModifier: TelephoneIntelligent) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/telephones-intelligents`, telephoneIntelligentAModifier)
            return response.data
        } catch (error) {
            console.error("Erreur lors de la modification du téléphone intelligent:", error)
            throw error
        }
    }

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    return {
        creerTelephoneIntelligent,
        modifierTelephoneIntelligent
    }
}
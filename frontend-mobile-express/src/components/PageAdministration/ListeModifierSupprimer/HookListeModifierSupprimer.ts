import axios from "axios";
import { useState } from "react";
import { getToken } from "../../../firebase";

/**
 * Variables d'état et méthodes pour le composant React: ListeModifierSupprimer.
 * Ceci est un hook React.
 * @returns { { Function, string, boolean } } Un objet contenant les variables d'état et
 * les méthodes de ListeModifierSupprimer.
 */
export default function useHookListeModifierSupprimer() {
    /**
     * Indique si le formulaire de modification est ouvert.
     */
    const [isFormulaireModificationOuvert, setIsFormulaireModificationOuvert] = useState<boolean>(false)

    /**
     * Indique si la fenêtre de confirmation de suppression est ouverte.
     */
    const [isFenetreConfirmationSuppressionOuverte, setIsFenetreConfirmationSuppressionOuverte] = useState<boolean>(false)

    /**
     * Indique l'id du téléphone intelligent à modifier ou supprimer.
     */
    const [idAModifierOuSupprimer, setIdAModifierOuSupprimer] = useState<string | null>(null);

    /**
     * Supprime un téléphone intelligent dans la base de données.
     * @param id L'id du téléphone intelligent à supprimer.
     */
    const supprimerTelephoneIntelligent = async (id: string) => {
        try {
            const token = await getToken();
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            
            await axios.delete(
                `http://localhost:3000/api/telephones-intelligents/id/${id}`,
                config
            );
            setIdAModifierOuSupprimer(null);
            
            // Rafraichir la page après suppression
            window.location.reload();
        } catch (error) {
            console.error("Erreur lors de la suppression du téléphone intelligent:", error);
        }
    };

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    return {
        isFormulaireModificationOuvert,
        setIsFormulaireModificationOuvert,
        isFenetreConfirmationSuppressionOuverte,
        setIsFenetreConfirmationSuppressionOuverte,
        idAModifierOuSupprimer,
        setIdAModifierOuSupprimer,
        supprimerTelephoneIntelligent
    }
}
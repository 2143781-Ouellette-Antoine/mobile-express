import axios from "axios"
import { useState } from "react"

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

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    return {
        isFormulaireModificationOuvert,
        setIsFormulaireModificationOuvert,
        isFenetreConfirmationSuppressionOuverte,
        setIsFenetreConfirmationSuppressionOuverte
    }
}
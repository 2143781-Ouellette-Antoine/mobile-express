import { useState } from "react"

/**
 * Variables d'état et méthodes pour le composant React: PageAdministration.
 * Ceci est un hook React.
 */
export default function usePageAdministrationHook() {
    /**
     * Indique si le formulaire de création est ouvert.
     */
    const [isFormulaireCreationOuvert, setIsFormulaireCreationOuvert] = useState<boolean>(false)

    /**
     * Indique si le formulaire de modification est ouvert.
     */
    const [isFormulaireModificationOuvert, setIsFormulaireModificationOuvert] = useState<boolean>(false)

    /**
     * Indique si la fenêtre de confirmation de suppression est ouverte.
     */
    const [isFenetreConfirmationSuppressionOuverte, setIsFenetreConfirmationSuppressionOuverte] = useState<boolean>(false)

    return {
        isFormulaireCreationOuvert,
        setIsFormulaireCreationOuvert,
        isFormulaireModificationOuvert,
        setIsFormulaireModificationOuvert,
        isFenetreConfirmationSuppressionOuverte,
        setIsFenetreConfirmationSuppressionOuverte,
    }
}
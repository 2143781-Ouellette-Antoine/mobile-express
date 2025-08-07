import { useTemporarySnackbarContext } from "../../contexts/ContextTemporarySnackbar"
import { dictionnaireFiltreType, type FiltresRecherche } from "../../models/FiltresRecherche"

/**
 * Variables d'état et méthodes pour le composant React: PageRechercheAvancee.
 * Ceci est un hook React.
 */
export default function useHookPageResultatsRecherche() {
    /**
     * Récupération du contexte pour pouvoir afficher des messages.
     */
    const { setSnackbarMessage, setSnackbarMessageType, setIsSnackbarOpen } = useTemporarySnackbarContext()
    
    /**
     * Récupérer et convertir les filtres de recherche dans l'URL.
     * @returns Un objet FiltresRecherche ou null en cas d'erreur.
     */
    function parseFiltresRecherche(): FiltresRecherche | null {
        try {
            // Récupérer les paramètres de recherche dans l'URL.
            const searchParams = new URLSearchParams(window.location.search)
            // Déclarer un objet initialement vide pour stocker les filtres de recherche.
            const filtresRecherche: Record<string, any> = {}

            /**
             * Boucler tous les filtres de recherche fournis dans l'URL.
             * key {string}: Le nom du filtre de recherche.
             * value {string}: La valeur du filtre de recherche sous forme de chaîne de caractères.
             */
            for (const [key, value] of searchParams.entries()) {
                // Si la valeur est vide ou nulle, ignorer le filtre.
                if (value === null || value === "") continue

                // Vérifie si la clé fait partie du dictionnaire des filtres de recherche.
                if (key in dictionnaireFiltreType) {
                    // Récupérer le type attendu associé à cette clé dans le dictionnaire.
                    const expectedPropertyType = dictionnaireFiltreType[key]

                    if (expectedPropertyType === "number") {
                        filtresRecherche[key] = parseNumber(value)
                    } else if (expectedPropertyType === "boolean") {
                        filtresRecherche[key] = parseBoolean(value)
                    /**
                     * Si la propriété attendue est un tableau.
                     * 
                     * `key as keyof FiltresRecherche` Forcer `key` à être une clé de FiltresRecherche. On a vérifié que key est une clé valide de FiltresRecherche.
                     * `({} as FiltresRecherche)["nomsCompagnies"]` Dans FiltresRecherche, accéder à la propriété "nomsCompagnies".
                     * Utiliser `Array.isArray` à la place de `typeof` pour vérifier si la propriété "nomsCompagnies" dans FiltresRecherche est un tableau.
                     */
                    } else if (expectedPropertyType === "string[]") {
                        filtresRecherche[key] = value.split(",").map(decodeURIComponent);
                    } else if (expectedPropertyType === "string") {
                        filtresRecherche[key] = decodeURIComponent(value);
                    }
                }
            }

            return filtresRecherche as FiltresRecherche
        } catch (_error) {
            console.error("Erreur: ", _error)

            setSnackbarMessage("Une erreur est survenue lors de la récupération des filtres de recherche.")
            setSnackbarMessageType("error")
            setIsSnackbarOpen(true)

            return null
        }
    }

    /**
     * Convertir une chaîne de caractères en nombre.
     * @param value La valeur à convertir en nombre.
     * @returns Le nombre converti ou undefined si la conversion échoue.
     */
    function parseNumber(value: string | null): number | undefined {
        if (value === null || value === "") return undefined
        const parsed = Number(value)
        if (isNaN(parsed)) throw new Error(`Valeur non valide pour un nombre : ${value}`)
        return parsed
    }

    /**
     * Convertir une chaîne de caractères en booléen.
     * @param value La valeur à convertir en booléen.
     * @returns Le booléen converti ou undefined si la conversion échoue.
     */
    function parseBoolean(value: string | null): boolean | undefined {
        if (value === null || value === "") return undefined
        if (value.toLowerCase() === "true") return true
        if (value.toLowerCase() === "false") return false
        throw new Error(`Valeur non valide pour un booléen : ${value}`)
    }

    return {
        parseFiltresRecherche,
    }
}
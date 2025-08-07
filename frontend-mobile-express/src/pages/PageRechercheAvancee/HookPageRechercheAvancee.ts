import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

/**
 * Variables d'état et méthodes pour le composant React: PageRechercheAvancee.
 * Ceci est un hook React.
 */
export default function useHookPageRechercheAvancee() {
    // Récupérer la méthode pour pouvoir naviguer entre les pages.
    const navigate = useNavigate()
    
    /**
     * Récupérer le contrôleur et la méthode qui gère la soumission du formulaire
     * de la librairie react-hook-form.
     * @property {Control<FieldValues, any, FieldValues>} control Contrôleur pour gérer les champs du formulaire.
     * @property {Function} handleSubmit Méthode qui gère la soumission du formulaire.
     * Il faut lui passer en paramètre une méthode de callback qui recevra les données du formulaire.
     */
    const { control, handleSubmit } = useForm()

    /**
     * Méthode appelée lorsque l'utilisateur clique sur le bouton « Rechercher ».
     * Construit un URL selon les filtres de recherche sélectionnés et navigue vers la page de résultats de recherche.
     */
    const onSubmit = (data: any) => {
        // Créer un objet URLSearchParams initialement vide
        // pour construire l'URL de recherche.
        const params = new URLSearchParams();

        // Convertir l'objet en URLSearchParams qui est accepté par la méthode navigate.
        Object.entries(data).forEach(([key, value]) => {
            // Ne pas ajouter les paramètres vides.
            if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
                return; // Passer au paramètre suivant si la valeur est vide.
            }

            if (Array.isArray(value)) {
                // Convertir le tableau en une chaîne de caractères séparée par des virgules.
                // Concaténer la clé actuelle et la valeur au URLSearchParams.
                params.append(key, value.map(encodeURIComponent).join(","));
            } else {
                // Concaténer la clé actuelle et la valeur au URLSearchParams.
                params.append(key, String(value));
            }
        });

        // Naviguer vers la page de résultats avec les filtres de recherche.
        navigate(`/resultats-recherche?${params.toString()}`);
    };

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    return {
        formController: control,
        handleSubmit,
        onSubmit
    }
}
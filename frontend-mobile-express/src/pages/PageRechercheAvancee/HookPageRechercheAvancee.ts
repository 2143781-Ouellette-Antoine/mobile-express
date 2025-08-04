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
        console.log("Données soumises :", JSON.stringify(data))
    };

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    return {
        formController: control,
        handleSubmit,
        onSubmit
    }
}
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import sliderDefaults from "../../constants/MinMaxFiltresRecherche"

/**
 * Variables d'état et méthodes pour le composant React: PageRechercheAvancee.
 * Ceci est un hook React.
 */
export default function useHookPageRechercheAvancee() {
    // Récupérer la méthode pour pouvoir naviguer entre les pages.
    const navigate = useNavigate()

    // Variable d'état pour stocker les erreurs de validation du formulaire.
    const [errors, setErrors] = useState<Record<string, string>>({});

    /**
     * Valide le formulaire en vérifiant que les valeurs ne sont pas invalides.
     * @param formJson Les données du formulaire à valider.
     * @returns true si le formulaire est valide, sinon false.
     */
    function validerFormulaire(formJson: Record<string, any>) {
        // Initialiser un objet pour stocker les erreurs.
        const newErrors: Record<string, string> = {};

        if (
            formJson["minVersionSystemeExploitation"] &&
            (
                isNaN(parseInt(formJson["minVersionSystemeExploitation"], 10)) ||
                parseInt(formJson["minVersionSystemeExploitation"], 10) < 0
            )
        ) {
            newErrors["minVersionSystemeExploitation"] = "La version minimale du système d'exploitation doit être un nombre positif.";
        }

        // Mettre à jour la variable d'état du tableau des erreurs.
        setErrors(newErrors);
        // keys(): Retourne un tableau des clés de l'objet.
        // Retourner true si aucune erreur, sinon false.
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Méthode appelée lorsque l'utilisateur clique sur le bouton « Rechercher ».
     * Construit un URL selon les filtres de recherche sélectionnés et navigue vers la page de résultats de recherche.
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Empêche le comportement par défaut du formulaire qui recharge la page.
        event.preventDefault();

        // Récupération des données du formulaire.
        // FormData utilise la propriété `name` de chaque contrôle du formulaire.
        // Retourne tous les champs du formulaire.
        const formData = new FormData(event.currentTarget);
        // Conversion de FormData en un objet.
        const formJson = Object.fromEntries(formData.entries());

        // Filtrer les champs vides.
        for (const key in formJson) {
            if (formJson[key] === "" || formJson[key] === null) {
                delete formJson[key];
                continue;
            }
        }

        // S'il y a des erreurs de validation, bloquer l'envoi du formulaire à l'API.
        if (!validerFormulaire(formJson)) {
            // Arrêter la soumission.
            return;
        }

        // Contiendra les données triées. Sera passé à l'URL de recherche.
        const finalData: { [key: string]: string } = {};
        // Boucler chaque filtre de recherche qui a été sélectionné et les ajouter un à un à l'URL.
        for (const key in formJson) {
            const value = formJson[key];

            if (key.startsWith("range")) {
                // Extraire le nom du champ après "range"
                const suffix = key.slice(5); // ex: "HauteurMm"
                // Séparer la valeur (chaine de caractères) en deux: min et max.
                const [min, max] = (value as string).split(",");

                // Récupérer les valeurs par défaut du slider.
                const [defMin, defMax] = sliderDefaults[key];
                // Si la valeur du slider est différente de la valeur par défaut.
                if (Number(min) !== defMin) {
                    // Ajouter le filtre min.
                    finalData["min" + suffix] = min;
                }
                if (Number(max) !== defMax) {
                    // Ajouter le filtre max.
                    finalData["max" + suffix] = max;
                }
            } else if (key.startsWith("possede")) {
                // Si la valeur est 'on', convertir en 'true'
                finalData[key] = value === "on" ? "true" : "false";
            } else {
                finalData[key] = value as string;
            }
        }

        // Créer un objet pour l'URL de recherche.
        const params = new URLSearchParams(finalData);

        // Naviguer vers la page de résultats avec les filtres de recherche.
        navigate(`/resultats-recherche?${params.toString()}`);
    };

    // Exposer les variables d'état et les méthodes pour qu'elles soient accessibles dans le composant.
    return {
        handleSubmit,
        errors
    }
}
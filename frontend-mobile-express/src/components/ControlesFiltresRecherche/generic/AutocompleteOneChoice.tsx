import { forwardRef, useImperativeHandle, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import useHookRecupererValeursParCleBd from "../../../hooks/HookRecupererValeursParCleBd";

/**
 * Props pour le composant React: AutocompleteOneChoice.
 * @property {string} id L'id HTML du composant.
 * @property {string} name Nom utilisé pour récupérer la valeur du champ dans le formulaire.
 * @property {string} label Le texte affiché au-dessus du champ texte.
 * @property {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @property {string} cleBdChoix La clé dans la base de données pour laquelle récupérer les choix.
 */
type AutocompleteOneChoiceProps = {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    cleBdChoix: string;
    defaultValue?: string;
}

/**
 * Liste déroulante à une sélection avec champs texte d'autocomplétion.
 * @prop {string} id L'id HTML du composant.
 * @prop {string} name Le nom du champ.
 * @prop {string} label Le texte affiché au-dessus du champ texte.
 * @prop {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @returns Un composant React qui affiche un champ texte d'autocomplétion avec une liste déroulante.
 * forwardRef() Permet au composant d'exposer un noeud DOM au composant parent à l'aide d'une référence.
 * La valeur actuellement sélectionnée dans la liste déroulante est exposée au parent.
 */
const AutocompleteOneChoice = forwardRef((props: AutocompleteOneChoiceProps, ref) => {
    /**
     * Récupération de la liste des choix possibles dans la liste déroulante depuis la base de données.
     * @property {string[]} listeChoix Liste des choix disponibles pour l'autocomplétion.
     * @property {boolean} isListeChoixLoading Indique si les choix sont en train d'être récupérés depuis l'API.
     */
    const { listeValeurs: listeChoix, isListeValeursLoading: isListeChoixLoading } = useHookRecupererValeursParCleBd(props.cleBdChoix)

    /**
     * Valeur sélectionnée dans la liste déroulante.
     */
    const [valeurSelectionnee, setValeurSelectionnee] = useState<string>(props.defaultValue || "")

    /**
     * Exposer la valeur actuelle de la liste déroulante via la référence (valeurSelectionnee).
     * @param {Object} ref Référence pour exposer les valeurs sélectionnées.
     * @param {Function} getValeurs Définition de la méthode pour obtenir la valeur exposée (méthode fléchée).
     * Il faut passer la valeur `ref` à la méthode useImperativeHandle.
     */
    useImperativeHandle(ref, () => ({
        getValeurs: () => valeurSelectionnee,
    }))

    return (
        <Autocomplete
            id={props.id}
            loading={isListeChoixLoading}
            options={listeChoix || []}
            value={valeurSelectionnee}
            /**
             * Méthode appelée à chaque fois que la sélection change.
             * @param {Object} _event L'événement qui a déclenché la méthode.
             * @param {string | null} newValue La nouvelle valeur sélectionnée dans la liste déroulante.
             * Si la nouvelle valeur est `null`, on la remplace par une chaîne vide.
             */
            onChange={(_event: any, newValue: string | null) => {
                if (newValue === null) {
                    newValue = ""
                }
                setValeurSelectionnee(newValue)
            }}
            // Comment afficher le champ texte
            renderInput={(params) => (
                <TextField
                    {...params}
                    name={props.name}
                    label={props.label}
                    placeholder={props.placeholder}
                    required
                />
            )}
            freeSolo // Permet à l'utilisateur de saisir un texte qui n'est pas dans la liste des choix.
            autoHighlight
            limitTags={0}
            sx={{ width: '500px' }}
        />
    )
})

export default AutocompleteOneChoice
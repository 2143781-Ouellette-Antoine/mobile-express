import { forwardRef, useImperativeHandle, useState } from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import useHookRecupererValeursParCleBd from "../../../hooks/HookRecupererValeursParCleBd";

/**
 * Props pour le composant React: AutocompleteMultiChoices.
 * @property {string} label Le texte affiché au-dessus du champ texte.
 * @property {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @property {string} cleBdChoix La clé dans la base de données pour laquelle récupérer les choix.
 * @property {ControllerRenderProps<FieldValues, string>} fieldProperties Les propriétés passées par la librairie react-hook-form.
 */
type AutocompleteMultiChoicesProps = {
    label: string;
    placeholder: string;
    cleBdChoix: string;
    fieldProperties: ControllerRenderProps<FieldValues, string>;
}

/**
 * Liste déroulante à sélection multiple avec champs texte d'autocomplétion.
 * @prop {string} id L'id HTML du composant.
 * @prop {string} label Le texte affiché au-dessus du champ texte.
 * @prop {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @prop {string} cleBdChoix La clé dans la base de données pour laquelle récupérer les choix.
 * @returns Un composant React qui affiche un champ texte d'autocomplétion avec une liste déroulante à sélection multiple.
 * forwardRef() Permet au composant d'exposer un noeud DOM au composant parent à l'aide d'une référence.
 * La liste des valeurs actuellement sélectionnées dans la liste déroulante est exposée au parent.
 */
const AutocompleteMultiChoices = forwardRef((props: AutocompleteMultiChoicesProps, ref) => {
    /**
     * Récupération de la liste des choix possibles dans la liste déroulante depuis la base de données.
     * @property {string[]} listeChoix Liste des choix disponibles pour l'autocomplétion.
     * @property {boolean} isListeChoixLoading Indique si les choix sont en train d'être récupérés depuis l'API.
     */
    const { listeValeurs: listeChoix, isListeValeursLoading: isListeChoixLoading } = useHookRecupererValeursParCleBd(props.cleBdChoix)

    /**
     * Valeurs sélectionnées dans la liste déroulante.
     */
    // const [valeursSelectionnees, setValeursSelectionnees] = useState<string[]>([])

    /**
     * Exposer la valeur actuelle de la liste déroulante via la référence (valeursSelectionnees).
     * @param {Object} ref Référence pour exposer les valeurs sélectionnées.
     * @param {Function} getValeurs Définition de la méthode pour obtenir la valeur exposée (méthode fléchée).
     * Il faut passer la variable `ref` à la méthode useImperativeHandle.
     */
    // useImperativeHandle(ref, () => ({
    //     getValeurs: () => valeursSelectionnees,
    // }))

    return (
        <Autocomplete
            {...props.fieldProperties} // Passer les propriétés provenant de react-hook-form.
            loading={isListeChoixLoading}
            options={listeChoix || []}
            value={props.fieldProperties.value ?? []}
            /**
             * Méthode appelée à chaque fois que la sélection change.
             * @param {Object} _event L'événement qui a déclenché la méthode.
             * @param {string[] | null} newValue La nouvelle liste des valeurs sélectionnées dans la liste déroulante.
             * Si la nouvelle valeur est `null`, on la remplace par un tableau vide.
             */
            onChange={(_event: any, newValue: string[] | null) => {
                if (newValue === null) {
                    newValue = [];
                }
                // Passer la nouvelle valeur à la méthode onChange founie par react-hook-form.
                props.fieldProperties.onChange(newValue)
            }}
            // Comment afficher le champ texte
            renderInput={(params) => (
                <TextField {...params} label={props.label} placeholder={props.placeholder} />
            )}
            // Comment afficher les choix
            renderOption={(props, choix, { selected }) => { // Récupérer l'état `selected` du choix.
                // Extraire la propriété `key` de l'objet `props` dans sa propre variable
                // et laisser les autres propriétés dans un nouvel objet appelé `optionProps`.
                const { key, ...optionProps } = props
                
                return (
                    <li key={key} {...optionProps}> {/* Utiliser un élément <li> (liste) */}
                        {/* Afficher une case à cocher pour chaque option */}
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            checked={selected}
                            style={{ marginRight: 8 }}
                        />
                        {choix} {/* Afficher le choix */}
                    </li>
                )
            }}
            multiple
            autoHighlight
            disableCloseOnSelect
            limitTags={0}
            sx={{ width: '100%' }}
        />
    )
})

export default AutocompleteMultiChoices
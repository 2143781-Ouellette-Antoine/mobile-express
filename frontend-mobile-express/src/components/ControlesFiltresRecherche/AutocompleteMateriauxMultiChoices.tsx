import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import useHookRecupererMateriaux from "../../hooks/HookRecupererMateriaux";

/**
 * Props pour le composant React: AutocompleteMateriauxMultiChoices.
 * @property {string} name Nom utilisé pour récupérer la valeur du champ dans le formulaire.
 * @property {string} label Le texte affiché au-dessus du champ texte.
 */
type AutocompleteMateriauxMultiChoicesProps = {
    name: string;
    label: string;
}

/**
 * Liste déroulante à sélection multiple avec champs texte d'autocomplétion.
 * @property {string} name Nom utilisé pour récupérer la valeur du champ dans le formulaire.
 * @prop {string} label Le texte affiché au-dessus du champ texte.
 * @returns Un composant React qui affiche un champ texte d'autocomplétion avec une liste déroulante à sélection multiple.
 */
function AutocompleteMateriauxMultiChoices(props: AutocompleteMateriauxMultiChoicesProps) {
    /**
     * Récupération de la liste des choix possibles dans la liste déroulante depuis la base de données.
     * @property {string[]} listeChoix Liste des choix disponibles pour l'autocomplétion.
     * @property {boolean} isListeChoixLoading Indique si les choix sont en train d'être récupérés depuis l'API.
     */
    const { listeValeurs: listeChoix, isListeValeursLoading: isListeChoixLoading } = useHookRecupererMateriaux()

    return (
        <Autocomplete
            loading={isListeChoixLoading}
            options={listeChoix || []}
            // Comment afficher le champ texte
            renderInput={(params) => (
                <TextField
                    {...params}
                    name={props.name}
                    label={props.label}
                    placeholder="Sélectionnez ou entrez un ou plusieurs matériaux"
                />
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
}

export default AutocompleteMateriauxMultiChoices
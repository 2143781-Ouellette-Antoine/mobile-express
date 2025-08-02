import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';

/**
 * Props pour le composant React: AutocompleteOneChoice.
 * @property {string} label Le texte affiché au-dessus du champ texte.
 * @property {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @property {any[]} listeDonnees La liste des choix à afficher dans la liste déroulante.
 * @property {boolean} isDonneesLoading Indique si les choix sont en train d'être récupérés depuis l'API.
 * @property {string} id L'id HTML du composant.
 */
type AutocompleteOneChoiceProps = {
    label: string;
    placeholder: string;
    listeChoix: any[];
    isDonneesChoixLoading: boolean;
    id: string;
}

/**
 * Liste déroulante à une sélection avec champs texte d'autocomplétion.
 * @prop {string} label Le texte affiché au-dessus du champ texte.
 * @prop {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @prop {any[]} listeChoix La liste des choix à afficher dans la liste déroulante.
 * @prop {boolean} isDonneesChoixLoading Indique si les choix sont en train d'être récupérés depuis l'API.
 * @prop {string} id L'id HTML du composant.
 * @returns Un composant React qui affiche un autocomplete avec des choix.
 */
function AutocompleteOneChoice(props: AutocompleteOneChoiceProps) {
        return (
        <Autocomplete
            limitTags={0}
            loading={props.isDonneesChoixLoading}
            autoHighlight
            freeSolo // Permet à l'utilisateur de saisir un texte qui n'est pas dans la liste des choix.
            disableCloseOnSelect
            id={props.id}
            options={props.listeChoix}
            // Comment afficher le champ texte
            renderInput={(params) => (
                <TextField {...params} label={props.label} placeholder={props.placeholder} />
            )}
            sx={{ width: '500px' }}
        />
    )
}

export default AutocompleteOneChoice
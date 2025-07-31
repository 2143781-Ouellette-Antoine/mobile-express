import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { CheckBox as CheckBoxIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';

/**
 * Props pour le composant React: AutocompleteMultiChoices.
 * @property {string} label Le texte affiché au-dessus du champ texte.
 * @property {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @property {any[]} listeDonnees La liste des choix à afficher dans la liste déroulante.
 * @property {boolean} isDonneesLoading Indique si les choix sont en train d'être récupérés depuis l'API.
 */
type AutocompleteMultiChoicesProps = {
    label: string;
    placeholder: string;
    listeChoix: any[];
    isDonneesChoixLoading: boolean;
}

/**
 * Liste déroulante à sélection multiple avec champs texte d'autocomplétion.
 * @prop {string} label Le texte affiché au-dessus du champ texte.
 * @prop {string} placeholder Le texte affiché dans le champ texte lorsqu'il est vide.
 * @prop {any[]} listeChoix La liste des choix à afficher dans la liste déroulante.
 * @prop {boolean} isDonneesChoixLoading Indique si les choix sont en train d'être récupérés depuis l'API.
 * @returns Un composant React qui affiche un autocomplete avec des choix multiples.
 */
function AutocompleteMultiChoices(props: AutocompleteMultiChoicesProps) {
        return (
        <Autocomplete
            multiple
            limitTags={0}
            loading={props.isDonneesChoixLoading}
            autoHighlight
            disableCloseOnSelect
            id="autocomplete-multi-choices"
            options={props.listeChoix}
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
            sx={{ width: '500px' }}
        />
    )
}

export default AutocompleteMultiChoices
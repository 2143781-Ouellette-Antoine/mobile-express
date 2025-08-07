import { forwardRef, useImperativeHandle, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import useHookRecupererMateriaux from "../../hooks/HookRecupererMateriaux";

/**
 * Props pour le composant React: AutocompleteMateriauxOneChoice.
 * @property {string} id L'id HTML du composant.
 * @property {string} name Le nom du champ.
 * @property {string} label Le texte affiché au-dessus du champ texte.
 */
type AutocompleteMateriauxOneChoiceProps = {
    id: string;
    name: string;
    label: string;
    defaultValue?: string;
}

/**
 * Liste déroulante à une sélection avec champs texte d'autocomplétion pour les matériaux.
 * @prop {string} id L'id HTML du composant.
 * @prop {string} name Le nom du champ.
 * @prop {string} label Le texte affiché au-dessus du champ texte.
 * @returns Un composant React qui affiche un champ texte d'autocomplétion avec une liste déroulante pour les matériaux.
 * forwardRef() Permet au composant d'exposer un noeud DOM au composant parent à l'aide d'une référence.
 * Le matériau actuellement sélectionné dans la liste déroulante est exposé au parent.
 */
const AutocompleteMateriauxOneChoice = forwardRef((props: AutocompleteMateriauxOneChoiceProps, ref) => {
    /**
     * Récupération de la liste des choix possibles dans la liste déroulante depuis la base de données.
     * @property {string[]} listeChoix Liste des choix disponibles pour l'autocomplétion.
     * @property {boolean} isListeChoixLoading Indique si les choix sont en train d'être récupérés depuis l'API.
     */
    const { listeValeurs: listeChoix, isListeValeursLoading: isListeChoixLoading } = useHookRecupererMateriaux()

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
                    placeholder="Sélectionnez ou entrez un matériau"
                />
            )}
            freeSolo // Permet à l'utilisateur de saisir un texte qui n'est pas dans la liste des choix.
            autoHighlight
            limitTags={0}
            sx={{ width: '500px' }}
        />
    )
})

export default AutocompleteMateriauxOneChoice
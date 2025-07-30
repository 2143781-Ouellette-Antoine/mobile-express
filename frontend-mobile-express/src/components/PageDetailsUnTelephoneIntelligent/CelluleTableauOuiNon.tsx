/**
 * Props du composant React: CelluleTableauOuiNon.
 * @property {boolean} estTrue Indique si le symbole affiché est oui (✔) ou non (✖).
 * @property {string} [classes] Classes CSS optionnelles pour personnaliser le style de la cellule.
 * @property {number} [colSpan] Nombre de rangées dont la cellule doit s'étendre.
 */
interface CelluleTableauOuiNonProps {
    estOui: boolean
    classes?: string
    colSpan?: number
}

/**
 * Cellule de tableau qui affiche un symbole de coche (✔) ou de croix (✖)
 * selon la valeur booléenne reçue en props.
 * @prop {boolean} estTrue Indique si le symbole affiché est oui (✔) ou non (✖).
 * @returns Un composant React pour une cellule de tableau qui affiche soit un symbole de coche (✔) en vert,
 * soit un symbole de croix (✖) en rouge.
 */
function CelluleTableauOuiNon(props: CelluleTableauOuiNonProps) {
    return (
        <td
            // Texte vert ou rouge selon si le capteur possède la stabilisation optique d'image.
            className={`${props.estOui ? "texte-vert" : "texte-rouge"} ${props.classes}`}
            // La cellule s'étend sur combien de colonnes.
            colSpan={props.colSpan || 1} // 1 rangée par défaut.
        >
            {props.estOui ? "✔" : "✖"}
        </td>
    )
}

export default CelluleTableauOuiNon
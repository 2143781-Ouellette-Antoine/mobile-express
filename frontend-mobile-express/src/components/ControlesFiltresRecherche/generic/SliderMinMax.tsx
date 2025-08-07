import { useState } from "react"
import { Slider, Stack, Typography } from "@mui/material"

/**
 * Props pour le composant React: SliderMinMax.
 * @property {string} name Nom utilisé pour récupérer la valeur du champ dans le formulaire.
 * @property {string} label Le texte affiché au-dessus du slider.
 * @property {number} MINIMUM La valeur minimale du slider.
 * @property {number} MAXIMUM La valeur maximale du slider.
 * @property {number} [step] L'incrément de valeur du slider (optionnel).
 * @property {string} ariaLabelValueSuffix Le texte utilisé pour l'accessibilité.
 */
type SliderMinMaxProps = {
    name: string
    label: string
    MINIMUM: number
    MAXIMUM: number
    step?: number
    ariaLabelValueSuffix: string
}

/**
 * Slider avec une plage de valeurs personnalisée.
 * @property {string} name Nom utilisé pour récupérer la valeur du champ dans le formulaire.
 * @prop {string} label Le texte affiché au-dessus du slider.
 * @prop {number} MINIMUM La valeur minimale du slider.
 * @prop {number} MAXIMUM La valeur maximale du slider.
 * @prop {string} ariaLabelValueSuffix Le texte utilisé pour l'accessibilité.
 * @returns Un composant React qui affiche un slider avec une plage de valeurs personnalisée.
 */

function SliderMinMax(props: SliderMinMaxProps) {
    const [value, setValue] = useState<[number, number]>([props.MINIMUM, props.MAXIMUM]);

    return (
        <Stack spacing={0}>
            <Typography gutterBottom>{props.label}</Typography>
            <Slider
                min={props.MINIMUM}
                max={props.MAXIMUM}
                value={value}
                onChange={(_, newValue) => {
                    if (Array.isArray(newValue) && newValue.length === 2) {
                        setValue([newValue[0], newValue[1]]);
                    }
                }}
                // Afficher les valeurs minimales et maximales sur le slider.
                marks={[
                    { value: props.MINIMUM, label: props.MINIMUM.toString() },
                    { value: props.MAXIMUM, label: props.MAXIMUM.toString() },
                ]}
                step={props.step ?? 1}
                valueLabelDisplay="auto"
                aria-label={props.label}
            />
            {/* Input caché pour le submit natif */}
            <input type="hidden" name={props.name} value={value.join(",")} />
        </Stack>
    )
}

export default SliderMinMax
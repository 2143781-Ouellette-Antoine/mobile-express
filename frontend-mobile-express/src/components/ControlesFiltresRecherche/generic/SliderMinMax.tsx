import { forwardRef } from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Slider, Stack, Typography } from "@mui/material"

/**
 * Props pour le composant React: SliderMinMax.
 * @property {string} label Le texte affiché au-dessus du slider.
 * @property {number} MINIMUM La valeur minimale du slider.
 * @property {number} MAXIMUM La valeur maximale du slider.
 * @property {number} [step] L'incrément de valeur du slider (optionnel).
 * @property {string} ariaLabelValueSuffix Le texte utilisé pour l'accessibilité.
 * @property {ControllerRenderProps<FieldValues, string>} fieldProperties Les propriétés passées par la librairie react-hook-form.
 */
type SliderMinMaxProps = {
    label: string
    MINIMUM: number
    MAXIMUM: number
    step?: number
    ariaLabelValueSuffix: string
    fieldProperties: ControllerRenderProps<FieldValues, string>;
}

/**
 * Slider avec une plage de valeurs personnalisée.
 * @prop {string} label Le texte affiché au-dessus du slider.
 * @prop {number} MINIMUM La valeur minimale du slider.
 * @prop {number} MAXIMUM La valeur maximale du slider.
 * @prop {string} ariaLabelValueSuffix Le texte utilisé pour l'accessibilité.
 * @returns Un composant React qui affiche un slider avec une plage de valeurs personnalisée.
 */
const SliderMinMax = forwardRef((props: SliderMinMaxProps, ref) => {
    /**
     * Tableau contenant la valeur minimale sélectionnée et la valeur maximale sélectionnée.
     */
    // const [selectedRange, setSelectedRange] = useState<number[]>([props.MINIMUM, props.MAXIMUM])

    return (
        <Stack spacing={0}>
            <Typography gutterBottom>{props.label}</Typography>
            <Slider
                {...props.fieldProperties} // Passer les propriétés provenant de react-hook-form.
                value={
                    [
                        props.fieldProperties.value?.min ?? props.MINIMUM,
                        props.fieldProperties.value?.max ?? props.MAXIMUM
                    ]
                }
                min={props.MINIMUM}
                max={props.MAXIMUM}
                // Afficher les valeurs minimales et maximales sur le slider.
                marks={[
                    { value: props.MINIMUM, label: props.MINIMUM.toString() },
                    { value: props.MAXIMUM, label: props.MAXIMUM.toString() },
                ]}
                step={props.step ?? 1} // Écart entre les valeurs du slider.
                onChange={(_event, newValue) => {
                    if (Array.isArray(newValue)) {
                        // Passer la nouvelle valeur à la méthode onChange founie par react-hook-form.
                        props.fieldProperties.onChange({ min: newValue[0], max: newValue[1] })
                    }
                }}
                valueLabelDisplay="auto" // Afficher et cacher la valeur actuelle automatiquement.
                aria-label={props.label}
                // aria-valuetext={`${selectedRange[0]} à ${selectedRange[1]}${props.ariaLabelValueSuffix}`}
            />
        </Stack>
    )
})

export default SliderMinMax
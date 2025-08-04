import { forwardRef, useImperativeHandle, useState } from "react";
import { Slider, Stack, Typography } from "@mui/material"

/**
 * Props pour le composant React: SliderMinMax.
 * @property {string} label Le texte affiché au-dessus du slider.
 * @property {number} MINIMUM La valeur minimale du slider.
 * @property {number} MAXIMUM La valeur maximale du slider.
 * @property {number} [step] L'incrément de valeur du slider (optionnel).
 * @property {string} ariaLabelValueSuffix Le texte utilisé pour l'accessibilité.
 */
type SliderMinMaxProps = {
    label: string
    MINIMUM: number
    MAXIMUM: number
    step?: number
    ariaLabelValueSuffix: string
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
    const [selectedRange, setSelectedRange] = useState<number[]>([props.MINIMUM, props.MAXIMUM])

    /**
     * Exposer la valeur actuelle du slider via la référence (selectedRange).
     * @param {Object} ref Référence pour exposer les valeurs sélectionnées.
     * @param {Function} getValeurs Définition de la méthode pour obtenir la valeur exposée (méthode fléchée).
     * Il faut passer la variable `ref` à la méthode useImperativeHandle.
     */
    useImperativeHandle(ref, () => ({
        getValeurs: () => selectedRange,
    }))

    return (
        <Stack spacing={0}>
            <Typography gutterBottom>{props.label}</Typography>
            <Slider
                value={selectedRange}
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
                        setSelectedRange(newValue)
                    }
                }}
                valueLabelDisplay="auto" // Afficher et cacher la valeur actuelle automatiquement.
                aria-label={props.label}
                aria-valuetext={`${selectedRange[0]} à ${selectedRange[1]}${props.ariaLabelValueSuffix}`}
            />
        </Stack>
    )
})

export default SliderMinMax
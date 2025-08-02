import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"

/**
 * Props pour le composant React: FenetreConfirmationSuppression.
 * @property {boolean} isOuvert Indique si la fenêtre de confirmation est ouverte.
 * @property {function} setIsOuvert Fonction pour fermer la fenêtre de confirmation.
 */
interface FenetreConfirmationSuppressionProps {
    isOuvert: boolean;
    setIsOuvert: (isOpen: boolean) => void;
}

/**
 * Fenêtre contextuelle de confirmation de suppression.
 */
function FenetreConfirmationSuppression(props: FenetreConfirmationSuppressionProps) {
    return (
        <Dialog
            open={props.isOuvert}
            onClose={() => props.setIsOuvert(false)}
        >
            <DialogTitle>Confirmation de suppression</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Êtes-vous sûr de vouloir supprimer cet élément?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => props.setIsOuvert(false)}>Annuler</Button>
                <Button
                    onClick={() => alert("Non implémenté")}
                >
                    Supprimer
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FenetreConfirmationSuppression
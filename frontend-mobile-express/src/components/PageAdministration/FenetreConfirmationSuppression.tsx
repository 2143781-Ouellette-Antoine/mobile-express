import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

/**
 * Props pour le composant React: FenetreConfirmationSuppression.
 * @property {boolean} isOuvert Indique si la fenêtre de confirmation est ouverte.
 * @property {function} onClose Fonction pour fermer la fenêtre de confirmation.
 * @property {function} onConfirm Fonction à exécuter lors de la confirmation.
 */
interface FenetreConfirmationSuppressionProps {
    isOuvert: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

/**
 * Fenêtre contextuelle de confirmation générique.
 */
function FenetreConfirmationSuppression({ isOuvert, onClose, onConfirm }: FenetreConfirmationSuppressionProps) {
    return (
        <Dialog
            open={isOuvert}
            onClose={onClose}
        >
            <DialogTitle>Confirmation de suppression</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Êtes-vous sûr de vouloir supprimer cet élément?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Annuler</Button>
                <Button
                    color="error"
                    variant="contained"
                    onClick={onConfirm}
                >
                    Supprimer
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FenetreConfirmationSuppression
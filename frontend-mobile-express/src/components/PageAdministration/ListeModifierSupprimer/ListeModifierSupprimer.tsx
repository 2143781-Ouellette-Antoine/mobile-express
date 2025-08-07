import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import type { TelephoneIntelligent } from "../../../models/TelephoneIntelligent";
import useHookListeModifierSupprimer from "./HookListeModifierSupprimer";
import useHookRecupererTousTelephonesIntelligents from "../../../hooks/HookRecupererTousTelephonesIntelligents";
import FenetreConfirmationSuppression from "../FenetreConfirmationSuppression";
import FormulaireModificationTelephoneIntelligent from "../FormulaireModificationTelephoneIntelligent/FormulaireModificationTelephoneIntelligent";

/**
 * Liste de tous les téléphones intelligents avec des options de modification et de suppression
 * dans la page d'administration.
 * @returns Un composant React qui affiche la liste de tous les téléphones intelligents.
 */
function ListeModifierSupprimer() {
    /**
     * Récupération des variables d'état et des méthodes de ListeModifierSupprimer dans le hook.
     * @property {TelephoneIntelligent[]} telephonesIntelligents Liste de tous les téléphones intelligents.
     * @property {boolean} isTelephonesIntelligentsLoading Indique si les téléphones intelligents sont en train d'être récupérés depuis l'API.
     */
    const {
        telephonesIntelligents,
        isTelephonesIntelligentsLoading
    } = useHookRecupererTousTelephonesIntelligents()

    /**
     * Récupération des variables d'état et des méthodes de ListeModifierSupprimer.
     */
    const {
        isFormulaireModificationOuvert,
        setIsFormulaireModificationOuvert,
        isFenetreConfirmationSuppressionOuverte,
        setIsFenetreConfirmationSuppressionOuverte,
        idAModifierOuSupprimer,
        setIdAModifierOuSupprimer,
        supprimerTelephoneIntelligent
    } = useHookListeModifierSupprimer()

    // Mettre un chargement parce qu'on ne peut pas afficher les téléphones intelligents
    // tant qu'on ne les a pas reçus.
    if (isTelephonesIntelligentsLoading) {
        return (
            <CircularProgress />
        )
    } else {
        // foreach telephoneIntelligent dans le tableau telephonesIntelligents[],
        // afficher un composant pour chaque téléphone.
        return (
            <>
                <Stack spacing={2}>
                    {telephonesIntelligents.map((telephoneIntelligent: TelephoneIntelligent) => (
                        <Stack gap={2} direction="row" alignItems="center" key={telephoneIntelligent._id}>
                            <img
                                src={telephoneIntelligent.urlImagePrincipale}
                                alt={`Image ${telephoneIntelligent.nom}`}
                                style={{ maxHeight: "100px", width: "auto" }}
                            />

                            <Typography variant="h6" flexGrow={1}>
                                {telephoneIntelligent.nomCompagnie + " " + telephoneIntelligent.nom}
                            </Typography>

                            <Button
                                variant="outlined"
                                color="warning"
                                startIcon={<EditIcon />}
                                onClick={() => {
                                    setIdAModifierOuSupprimer(telephoneIntelligent._id || null);
                                    setIsFormulaireModificationOuvert(true);
                                }}
                            >
                                Modifier
                            </Button>

                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                    setIdAModifierOuSupprimer(telephoneIntelligent._id || null);
                                    setIsFenetreConfirmationSuppressionOuverte(true);
                                }}
                            >
                                Supprimer
                            </Button>
                        </Stack>
                    ))}
                </Stack>

                {idAModifierOuSupprimer && (
                    <>
                        {/* Fenêtre contextuelle pour le formulaire de modification d'un téléphone intelligent */}
                        <FormulaireModificationTelephoneIntelligent
                            isFormulaireOuvert={isFormulaireModificationOuvert}
                            setIsFormulaireOuvert={setIsFormulaireModificationOuvert}
                            idAModifier={idAModifierOuSupprimer}
                        />

                        {/* Fenêtre contextuelle de confirmation de suppression  */}
                        <FenetreConfirmationSuppression
                            isOuvert={isFenetreConfirmationSuppressionOuverte}
                            onClose={() => setIsFenetreConfirmationSuppressionOuverte(false)}
                            onConfirm={() => {
                                if (idAModifierOuSupprimer) {
                                    supprimerTelephoneIntelligent(idAModifierOuSupprimer);
                                    setIsFenetreConfirmationSuppressionOuverte(false);
                                }
                            }}
                        />
                    </>
                )}
            </>
        )
    }
}

export default ListeModifierSupprimer
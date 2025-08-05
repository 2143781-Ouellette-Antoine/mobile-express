import axios from "axios";
import { useState } from "react";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import type { TelephoneIntelligent } from "../../../models/TelephoneIntelligent";
import useHookRecupererTousTelephonesIntelligents from "../../../hooks/HookRecupererTousTelephonesIntelligents";
import FenetreConfirmationSuppression from "../FenetreConfirmationSuppression";
import FormulaireTelephoneIntelligent from "../FormulaireTelephoneIntelligent/FormulaireTelephoneIntelligent";

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
        isTelephonesIntelligentsLoading,
        fetchTelephonesIntelligents
    } = useHookRecupererTousTelephonesIntelligents()

    const [idASupprimer, setIdASupprimer] = useState<string | null>(null);
    const [isFenetreConfirmationSuppressionOuverte, setIsFenetreConfirmationSuppressionOuverte] = useState(false);
    /**
     * Indique si le formulaire de modification est ouvert.
     */
    const [isFormulaireModificationOuvert, setIsFormulaireModificationOuvert] = useState<boolean>(false)

    /**
     * Supprime un téléphone intelligent dans la base de données.
     * @param id L'id du téléphone intelligent à supprimer.
     */
    const supprimerTelephoneIntelligent = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/api/telephones-intelligents/id/${id}`);
            setIdASupprimer(null);
            fetchTelephonesIntelligents(); // Actualiser la liste après suppression
        } catch (error) {
            console.error("Erreur lors de la suppression du téléphone intelligent:", error);
        }
    };

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
                                onClick={() => setIsFormulaireModificationOuvert(true)}
                            >
                                Modifier
                            </Button>

                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                    setIdASupprimer(telephoneIntelligent._id || null);
                                    setIsFenetreConfirmationSuppressionOuverte(true);
                                }}
                            >
                                Supprimer
                            </Button>
                        </Stack>
                    ))}
                </Stack>

                {/* Fenêtre contextuelle pour le formulaire de création d'un téléphone intelligent */}
                <FormulaireTelephoneIntelligent
                    isModifier={true}
                    isFormulaireOuvert={isFormulaireModificationOuvert}
                    setIsFormulaireOuvert={setIsFormulaireModificationOuvert}
                    titreFormulaire={"Modifier un téléphone intelligent"}
                    texteBoutonSoumettre={"Modifier"}
                />

                {/* Fenêtre contextuelle de confirmation de suppression */}
                <FenetreConfirmationSuppression
                    isOuvert={isFenetreConfirmationSuppressionOuverte}
                    onClose={() => setIsFenetreConfirmationSuppressionOuverte(false)}
                    onConfirm={() => {
                        if (idASupprimer) {
                            supprimerTelephoneIntelligent(idASupprimer);
                            setIsFenetreConfirmationSuppressionOuverte(false);
                        }
                    }}
                />
            </>
        )
    }
}

export default ListeModifierSupprimer
import { Box, Button, Stack, Typography } from "@mui/material"
import { Add as AddIcon } from '@mui/icons-material';
import FormulaireTelephoneIntelligent from "../../components/PageAdministration/FormulaireTelephoneIntelligent";
import usePageAdministrationHook from "./HookPageAdministration";
import FenetreConfirmationSuppression from "../../components/PageAdministration/FenetreConfirmationSuppression";

/**
 * Page d'administration pour l'administrateur.
 * L'administrateur doit se connecter pour accéder à cette page.
 * @returns Un composant React pour la page d'administration.
 */
function PageAdministration() {
    /**
     * Variables d'état de la page d'administration.
     */
    const {
        isFormulaireCreationOuvert,
        setIsFormulaireCreationOuvert,
        isFormulaireModificationOuvert,
        setIsFormulaireModificationOuvert,
        isFenetreConfirmationSuppressionOuverte,
        setIsFenetreConfirmationSuppressionOuverte,
    } = usePageAdministrationHook()

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, paddingX: 2, paddingY: 4 }}>
            <Stack direction="column" spacing={2}>
                <Typography variant="h4">Page d'administration</Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setIsFormulaireCreationOuvert(true)}
                >
                    Créer
                </Button>

                {/* Liste de tous les téléphones intelligents*/}
                

                {/* Fenêtre contextuelle pour le formulaire de création d'un téléphone intelligent */}
                <FormulaireTelephoneIntelligent
                    isFormulaireOuvert={isFormulaireCreationOuvert}
                    setIsFormulaireOuvert={setIsFormulaireCreationOuvert}
                    titreFormulaire={"Créer un téléphone intelligent"}
                    texteBoutonSoumettre={"Créer"}
                />

                {/* Fenêtre contextuelle pour le formulaire de modification d'un téléphone intelligent */}
                <FormulaireTelephoneIntelligent
                    isFormulaireOuvert={isFormulaireModificationOuvert}
                    setIsFormulaireOuvert={setIsFormulaireModificationOuvert}
                    titreFormulaire={"Modifier un téléphone intelligent"}
                    texteBoutonSoumettre={"Modifier"}
                />

                {/* Fenêtre contextuelle de confirmation de suppression */}
                <FenetreConfirmationSuppression
                    isOuvert={isFenetreConfirmationSuppressionOuverte}
                    setIsOuvert={setIsFenetreConfirmationSuppressionOuverte}
                />
            </Stack>
        </Box>
    )
}

export default PageAdministration
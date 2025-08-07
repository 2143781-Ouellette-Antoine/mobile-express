import { Box, Button, Stack, Typography } from "@mui/material"
import { Add as AddIcon } from '@mui/icons-material';
import FormulaireTelephoneIntelligent from "../../components/PageAdministration/FormulaireTelephoneIntelligent/FormulaireTelephoneIntelligent";
import usePageAdministrationHook from "./HookPageAdministration";
import ListeModifierSupprimer from "../../components/PageAdministration/ListeModifierSupprimer/ListeModifierSupprimer";

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
        setIsFormulaireCreationOuvert
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

                {/* Liste de tous les téléphones intelligents avec des options de modification et de suppression */}
                <ListeModifierSupprimer />

                {/* Fenêtre contextuelle pour le formulaire de création d'un téléphone intelligent */}
                <FormulaireTelephoneIntelligent
                    isModifier={false}
                    isFormulaireOuvert={isFormulaireCreationOuvert}
                    setIsFormulaireOuvert={setIsFormulaireCreationOuvert}
                    titreFormulaire={"Créer un téléphone intelligent"}
                    texteBoutonSoumettre={"Créer"}
                />
            </Stack>
        </Box>
    )
}

export default PageAdministration
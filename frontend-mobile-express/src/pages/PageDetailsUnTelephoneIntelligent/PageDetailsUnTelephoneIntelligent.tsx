import { Fragment } from "react"
import { useParams } from "react-router-dom"
import { Box, Card, CardContent, CircularProgress, Stack, Typography } from "@mui/material"
import usePageDetailsUnTelephoneIntelligentHook from "./HookPageDetailsUnTelephoneIntelligent"
import CelluleTableauOuiNon from "../../components/PageDetailsUnTelephoneIntelligent/CelluleTableauOuiNon"
import "./PageDetailsUnTelephoneIntelligent.css"

/**
 * Page qui affiche les détails d'un téléphone intelligent.
 * Récupère l'id du téléphone dans l'URL.
 * @returns Un composant React pour la page des détails d'un téléphone intelligent.
 */
function PageDetailsUnTelephoneIntelligent() {
    // Récupérer l'id du téléphone intelligent dans l'URL.
    const { id } = useParams()

    /**
     * Récupération des variables d'état de PageDetailsUnTelephoneIntelligent dans le hook.
     * @property {TelephoneIntelligent | undefined} telephoneIntelligent Le téléphone intelligent dont on veut afficher les détails.
     * @property {boolean} isTelephoneIntelligentLoading Indique si les données du téléphone intelligent sont en train d'être récupérées depuis l'API.
     */
    const {
        telephoneIntelligent,
        isTelephoneIntelligentLoading
    } = usePageDetailsUnTelephoneIntelligentHook(id!)
    
    // Mettre un chargement parce qu'on ne peut pas afficher les données du téléphone intelligent
    // avant de les avoir reçues.
    if (isTelephoneIntelligentLoading) {
        return (
            <Box display="flex" justifyContent="center" sx={{ marginY: 2 }}>
                <CircularProgress />
            </Box>
        )
    } else if (!telephoneIntelligent) {
        return (
            <Box justifyContent="center" sx={{ margin: 4 }}>
                <Typography variant="h4">
                    Une erreur est survenue lors de la récupération des détails du téléphone
                    intelligent.
                </Typography>
            </Box>
        )
    } else {
        return (
            <Stack alignItems="center" gap={2} sx={{ marginY: 2 }}>
                {/* Nom du téléphone intelligent */}
                <Typography variant="h4">
                    {telephoneIntelligent.nomCompagnie + " " + telephoneIntelligent.nom}
                </Typography>

                {/* Image */}
                <Card>
                    <CardContent>
                        <img
                            src={telephoneIntelligent.urlImagePrincipale}
                            alt={`Image ${telephoneIntelligent.nom}`}
                            style={{ maxWidth: "200px", height: "auto" }}
                        />
                    </CardContent>
                </Card>

                {/* Tableau des spécifications */}
                {/**
                  * Code généré par: Tables Generator. (s. d.). HTML Tables Generator [générateur de code].
                  * https://www.tablesgenerator.com/html_table
                  */}
                <div className="tg-wrap">
                    <table className="tg" style={{ tableLayout: "fixed", width: "1109px" }}>
                        <colgroup>
                            <col style={{ width: "145px" }} />
                            <col style={{ width: "180px" }} />
                            <col style={{ width: "180px" }} />
                            <col style={{ width: "450px" }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td className="tg-d3nm">Année de sortie</td>
                                <td className="tg-0pky" colSpan={3}>{telephoneIntelligent.anneeSortie}</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm" rowSpan={4}>Construction</td>
                                <td className="tg-fymr">Dimensions</td>
                                <td className="tg-0pky" colSpan={2}>
                                    {
                                        telephoneIntelligent.hauteurMm + " x " +
                                        telephoneIntelligent.largeurMm + " x " +
                                        telephoneIntelligent.epaisseurMm + " mm"
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Poids</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.poidsG} g</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Matériaux</td>
                                <td className="tg-0pky" colSpan={2}>
                                    Avant: {telephoneIntelligent.materiauAvant}<br />
                                    Arrière: {telephoneIntelligent.materiauArriere}<br />
                                    Cadre: {telephoneIntelligent.materiauCadre}
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Résistance à l'eau</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.resistanceEau}</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm" rowSpan={4}>Écran</td>
                                <td className="tg-fymr">Type</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.technologieEcran}</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Taille</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.tailleEcranPouces}</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Résolution</td>
                                <td className="tg-0pky" colSpan={2}>
                                    {
                                        telephoneIntelligent.resolutionEcranHauteurPixels + " x " +
                                        telephoneIntelligent.resolutionEcranLargeurPixels + " pixels"
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Taux de rafraichissement</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.tauxRafraichissementEcranHz} Hz</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm" rowSpan={4}>Puce</td>
                                <td className="tg-fymr">Nom</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.nomPuce}</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Vitesse du processeur</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.vitessePuceGhz} GHz</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Cœurs</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.descriptionCoeursPuce}</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Graphiques</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.nomGraphiquesPuce}</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm" rowSpan={2}>Stockage</td>
                                <td className="tg-fymr">Configurations mémoire-stockage</td>
                                <td className="tg-0pky" colSpan={2}>
                                    {/* Boucler toutes les configurations mémoire-stockage */}
                                    {telephoneIntelligent.configurationsMemoireViveStockage.map((configuration, index) => (
                                        <div key={index}>{configuration.stockageGb} Go + {configuration.memoireViveGb} Go RAM</div>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Technologie</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.technologieStockage}</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm">Logiciel</td>
                                <td className="tg-fymr">Système d'exploitation max</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.systemeExploitation + " " + telephoneIntelligent.maxVersionSystemeExploitation}</td>
                            </tr>
                            
                            {
                                // Boucler tous les capteurs de caméras.
                                telephoneIntelligent.capteursCamera
                                    .filter(capteur => !capteur.estEnAvant) // Filtrer pour ne garder que les capteurs de la caméra arrière.
                                    .map((capteur, index) => {
                                        const isFirstRow = index === 0

                                        // Pour chaque capteur, créer ses 2 rangées de donneés.
                                        return (
                                            <Fragment key={index}>
                                                <tr>
                                                    {/* Seulement générer la cellule de titre avant le premier capteur de la caméra arrière. */}
                                                    {isFirstRow && (
                                                        <td
                                                            className="tg-d3nm"
                                                            // Chaque capteur possède 2 rangées en hauteur. Alors,
                                                            // la cellule du titre « Caméra(s) arrière(s) » doit s'étendre sur
                                                            // (le nombre de capteurs arrières) multiplié par (2 rangées par capteur).
                                                            rowSpan={telephoneIntelligent.capteursCamera.filter(capteur => !capteur.estEnAvant).length * 2}
                                                        >
                                                            Caméra(s) arrière(s)
                                                        </td>
                                                    )}

                                                    <td className="tg-fymr" rowSpan={2}>{capteur.type}</td>
                                                    <td className="tg-fymr">Résolution</td>
                                                    <td className="tg-0lax">{capteur.resolutionMp} MP</td>
                                                </tr>
                                                <tr>
                                                    <td className="tg-21f3">OIS</td>
                                                    {/* Affiche un crochet ou une croix. */}
                                                    <CelluleTableauOuiNon estOui={capteur.possedeStabilisationOptiqueImage} classes={"tg-096r"} />
                                                </tr>
                                            </Fragment>
                                        )
                                    })
                            }

                            {
                                // Boucler tous les capteurs de caméras.
                                telephoneIntelligent.capteursCamera
                                    .filter(capteur => capteur.estEnAvant) // Filtrer pour ne garder que les capteurs de la caméra avant.
                                    .map((capteur, index) => {
                                        const isFirstRow = index === 0

                                        // Pour chaque capteur, créer ses 2 rangées de donneés.
                                        return (
                                            <Fragment key={index}>
                                                <tr>
                                                    {/* Seulement générer la cellule de titre avant le premier capteur de la caméra avant. */}
                                                    {isFirstRow && (
                                                        <td
                                                            className="tg-d3nm"
                                                            // Chaque capteur possède 2 rangées en hauteur. Alors,
                                                            // la cellule du titre « Caméra(s) avant(s) » doit s'étendre sur
                                                            // (le nombre de capteurs avant) multiplié par (2 rangées par capteur).
                                                            rowSpan={telephoneIntelligent.capteursCamera.filter(capteur => capteur.estEnAvant).length * 2}
                                                        >
                                                            Caméra(s) avant(s)
                                                        </td>
                                                    )}

                                                    <td className="tg-fymr" rowSpan={2}>{capteur.type}</td>
                                                    <td className="tg-fymr">Résolution</td>
                                                    <td className="tg-0lax">{capteur.resolutionMp} MP</td>
                                                </tr>
                                                <tr>
                                                    <td className="tg-21f3">OIS</td>
                                                    {/* Affiche un crochet ou une croix. */}
                                                    <CelluleTableauOuiNon estOui={capteur.possedeStabilisationOptiqueImage} classes={"tg-096r"}/>
                                                </tr>
                                            </Fragment>
                                        )
                                    })
                            }

                            <tr>
                                <td className="tg-d3nm" rowSpan={2}>Recharge</td>
                                <td className="tg-fymr">Port</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.modelePortUsb}</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Sans-fil</td>
                                {/* Affiche un crochet ou une croix. */}
                                <CelluleTableauOuiNon estOui={telephoneIntelligent.possedeRechargeSansFil} colSpan={2} classes={"tg-0pky"} />
                            </tr>
                            <tr>
                                <td className="tg-d3nm">Batterie</td>
                                <td className="tg-fymr">Capacité</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.capaciteBatterieMah} mAh</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm">Authentification</td>
                                <td className="tg-0pky" colSpan={3}>{telephoneIntelligent.typeAuthentification}</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm" rowSpan={3}>Fonctionnalités</td>
                                <td className="tg-fymr">NFC</td>
                                {/* Affiche un crochet ou une croix. */}
                                <CelluleTableauOuiNon estOui={telephoneIntelligent.possedeNfc} colSpan={2} classes={"tg-0pky"} />
                            </tr>
                            <tr>
                                <td className="tg-fymr">Port audio</td>
                                {/* Affiche un crochet ou une croix. */}
                                <CelluleTableauOuiNon estOui={telephoneIntelligent.possedePortAudio} colSpan={2} classes={"tg-0pky"} />
                            </tr>
                            <tr>
                                <td className="tg-fymr">Carte microSD</td>
                                {/* Affiche un crochet ou une croix. */}
                                <CelluleTableauOuiNon estOui={telephoneIntelligent.possedeCarteMicroSD} colSpan={2} classes={"tg-0pky"} />
                            </tr>
                            <tr>
                                <td className="tg-d3nm" rowSpan={2}>Réseau mobile</td>
                                <td className="tg-fymr">Génération du réseau mobile</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.generationReseauMobile}G</td>
                            </tr>
                            <tr>
                                <td className="tg-fymr">Carte(s) SIM</td>
                                <td className="tg-0pky" colSpan={2}>{telephoneIntelligent.descriptionCartesSim}</td>
                            </tr>
                            <tr>
                                <td className="tg-d3nm">Couleurs</td>
                                <td className="tg-0pky" colSpan={3}>
                                    {/* Boucler toutes les couleurs */}
                                    {telephoneIntelligent.couleurs.join(", ")}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Stack>
        )
    }
}

export default PageDetailsUnTelephoneIntelligent
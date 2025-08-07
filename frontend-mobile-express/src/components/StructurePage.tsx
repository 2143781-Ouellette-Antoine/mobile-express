import { Outlet } from "react-router-dom"
import TopAppBar from "./TopAppBar"
import TemporarySnackbar from "./TemporarySnackbar"

/**
 * La structure de base de chaque page du site web.
 * Inclut la barre de navigation en haut et le contenu principal en dessous.
 * @returns Un composant React pour la structure de base de chaque page.
 */
function StructurePage() {
    return (
        <div>
            <TopAppBar />
            <TemporarySnackbar />
            {/* Le contenu principal de la page sera rendu ici. */}
            {/* Utilisation de Outlet pour afficher les composants enfants */}
            <Outlet />
        </div>
    )
}

export default StructurePage
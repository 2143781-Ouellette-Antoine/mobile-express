import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageAccueil from './pages/PageAccueil'
import PageAdministration from './pages/PageAdministration/PageAdministration'
import PageDetailsUnTelephoneIntelligent from './pages/PageDetailsUnTelephoneIntelligent/PageDetailsUnTelephoneIntelligent'
import PageInexistante from './pages/PageInexistante'
import PageRechercheAvancee from './pages/PageRechercheAvancee'
import PageTelephonesIntelligentUneCompagnie from './pages/PageTelephonesIntelligentUneCompagnie'
import PageTousTelephonesIntelligents from './pages/PageTousTelephonesIntelligents'
import PageToutesCompagnies from './pages/PageToutesCompagnies'
import StructurePage from './components/StructurePage'
import './App.css'

function App() {
    return (
        /* Routeur pour naviguer entre les pages. */
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StructurePage />}>
                    <Route index element={<PageAccueil />} />
                    <Route path="/compagnies" element={<PageToutesCompagnies />} />
                    <Route path="/compagnie/:nomCompagnie" element={<PageTelephonesIntelligentUneCompagnie />} />
                    <Route path="/telephones-intelligents" element={<PageTousTelephonesIntelligents />} />
                    <Route path="/details-telephone-intelligent/:id" element={<PageDetailsUnTelephoneIntelligent />} />
                    <Route path="/recherche-avancee" element={<PageRechercheAvancee />} />
                    <Route path="/administration" element={<PageAdministration />} />
                    <Route path="*" element={<PageInexistante />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
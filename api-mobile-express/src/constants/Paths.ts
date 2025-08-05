/**
 * Express router paths go here.
 */

export default {
    Base: '/api',
    Compagnies: {
        Base: '/compagnies',
        // Route pour obtenir toutes les compagnies de téléphones intelligents.
        GetAll: '/all',
        // Route pour obtenir les compagnies de téléphones intelligents qui sont épinglées pour la page d'accueil.
        GetCompagniesEpingleesAccueil: '/epinglees-accueil',
    },
    Materiaux: {
        Base: '/materiaux',
        // Route pour obtenir tous les matériaux.
        GetAll: '/all',
    },
    TelephonesIntelligents: {
        Base: '/telephones-intelligents',
        // Route pour obtenir tous les téléphones intelligents.
        GetAll: '/all',
        // Route pour obtenir un téléphone intelligent par son id.
        GetById: '/id/:id',
        // Route pour obtenir les dix téléphones intelligents les plus récemment sortis.
        GetDixPlusRecents: '/dix-plus-recents',
        // Route pour obtenir les téléphones intelligents d'une compagnie.
        GetAllFromCompagnie: '/compagnie/:nomCompagnie',
        // Route pour obtenir toutes les valeurs distinctes d'une clé de la base de données.
        GetAllValeursByCleBd: '/valeurs-cle-bd/:cleBd',
        // Route pour rechercher des téléphones intelligents. Les filtres sont dans les paramètres URL.
        GetRecherche: '/recherche',
        // Route pour créer un téléphone intelligent.
        Post: '/',
        // Route pour mettre à jour un téléphone intelligent.
        Put: '/',
        // Route pour supprimer un téléphone intelligent par son id.
        Delete: '/id/:id',
    },
} as const;
/**
 * @file Lire les variables d'environnement dans le fichier .env.developpement
 */

/**
 * Base de l'URL de l'API de Mobile Express.
 * @type {string}
 */
const API_URL: string = import.meta.env.VITE_API_URL

export default {
    API_URL
}
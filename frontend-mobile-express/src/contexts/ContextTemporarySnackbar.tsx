/**
 * Source: Ouellette, Antoine. (2025). [Mon projet final dans le cadre du cours de Web 3]. https://github.com/2143781-Ouellette-Antoine/react-carnet-adresses
 * Modifié par Antoine Ouellette.
 */
import React, { type ReactNode, createContext, useContext, useState } from 'react';
import type { SnackbarMessageType } from '../components/TemporarySnackbar';

/**
 * Props du contexte React: TemporarySnackbarContext.
 * @property {boolean} isSnackbarOpen Indique si le snackbar est ouvert (affiché) ou non (invisible).
 * @property {function} setIsSnackbarOpen Méthode pour changer la valeur de isSnackbarOpen.
 * @property {string} snackbarMessage Message à afficher dans le snackbar.
 * @property {function} setSnackbarMessage Méthode pour changer le message du snackbar.
 * @property {'error' | 'warning' | 'info' | 'success'} snackbarMessageType Type de message à afficher dans le snackbar. Influence la couleur du snackbar.
 * @property {function} setSnackbarMessageType Méthode pour changer le type de message du snackbar.
 */
interface TemporarySnackbarContextProps {
    isSnackbarOpen: boolean;
    setIsSnackbarOpen: (isSnackbarOpen: boolean) => void;
    snackbarMessage: string;
    setSnackbarMessage: (message: string) => void;
    snackbarMessageType: SnackbarMessageType;
    setSnackbarMessageType: (type: SnackbarMessageType) => void;
}

const TemporarySnackbarContext = createContext<TemporarySnackbarContextProps | undefined>(undefined);

/**
 * Composant React qui fournit le contexte TemporarySnackbarContext.
 * Il permet de partager l'état du snackbar (ouvert/fermé, message, type de message) à travers l'application.
 * 
 * @param {ReactNode} children - Les composants enfants qui auront accès au contexte.
 * @returns {JSX.Element} Le composant React qui fournit le contexte TemporarySnackbarContext.
 */
const TemporarySnackbarContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Variables d'état internes.
    const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [snackbarMessageType, setSnackbarMessageType] = useState<SnackbarMessageType>('error');

    return (
        <TemporarySnackbarContext.Provider
            value={{
                isSnackbarOpen: isSnackbarOpen,
                setIsSnackbarOpen: setIsSnackbarOpen,
                snackbarMessage: snackbarMessage,
                setSnackbarMessage: setSnackbarMessage,
                snackbarMessageType: snackbarMessageType,
                setSnackbarMessageType: setSnackbarMessageType
            }}
        >
            {children}
        </TemporarySnackbarContext.Provider>
    );
};

/**
 * Méthode pour récupérer les variables et méthodes du contexte TemporarySnackbarContext.
 * @returns {TemporarySnackbarContextProps | undefined} Les variables et méthodes du contexte.
 */
const useTemporarySnackbarContext = () => {
    const context = useContext(TemporarySnackbarContext);
    if (!context) {
        throw new Error(`useTemporarySnackbarContext devrait être utilisé à l'intérieur d'un TemporarySnackbarContext`);
    }
    return context;
};
  
export { TemporarySnackbarContextProvider, useTemporarySnackbarContext };
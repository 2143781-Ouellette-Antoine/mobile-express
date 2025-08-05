/**
 * Source: Ouellette, Antoine. (2025). [Mon projet final dans le cadre du cours de Web 3]. https://github.com/2143781-Ouellette-Antoine/react-carnet-adresses
 */
import React, { type ReactNode, createContext, useContext, useState } from 'react';

interface IsAuthLoadedContextProps {
  isAuthLoaded: boolean;
  setIsAuthLoaded: (isAuthLoaded: boolean) => void;
}

const IsAuthLoadedContext = createContext<IsAuthLoadedContextProps | undefined>(undefined);

const IsAuthLoadedContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthLoaded, setIsAuthLoaded] = useState<boolean>(true);

  const setIsAuthLoadedPrivate = (isAuthLoaded: boolean) => {
    setIsAuthLoaded(isAuthLoaded);
  };

  return (
    <IsAuthLoadedContext.Provider value={{ isAuthLoaded: isAuthLoaded, setIsAuthLoaded: setIsAuthLoadedPrivate }}>
      {children}
    </IsAuthLoadedContext.Provider>
  );
};

const useIsAuthLoadedContext = () => {
  const context = useContext(IsAuthLoadedContext);
  if (!context) {
    throw new Error(`useIsAuthLoadedContext devrait être utilisé à l'intérieur d'un IsAuthLoadedContext`);
  }
  return context;
};
  
export { IsAuthLoadedContextProvider, useIsAuthLoadedContext };
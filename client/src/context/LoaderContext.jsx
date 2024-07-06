import { createContext, useContext, useState } from "react";


const LoaderContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLoader = () => {
    return useContext(LoaderContext);
}
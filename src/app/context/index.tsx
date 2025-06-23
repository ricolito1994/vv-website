import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext<any>(null);
const AppContextProvider = ({children}: any) => {
    const OFFICIAL_VV_LOGO = process.env.REACT_APP_OFFICIAL_VV_LOGO;

    const ACCESS_TOKEN = "1234";

    return (
        <AppContext.Provider
            value={{
               OFFICIAL_VV_LOGO,
               ACCESS_TOKEN,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
import React from "react";

import GlobalContext from "../../components/global/context";


const GlobalProvider = () => {
    return (
        <GlobalContext.Provider value={
            {
                authData: {},
                storageData:{}
                // cualquier informacion que quieran compartir dentro de los componentes
            }
        }
        >
            { /** Aqui puedo inyectar los componentes que sean necesarios */ }
        </GlobalContext.Provider>
    )
}




export const AuthData = {
    nombre: "Taller de programacion 2",
    apellido: "ORT",
    mail: "T2@ort.edu.ar"    
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, nombre: action.nombre}            
            break;
        case 'CHANGE_EMAIL':
            return { ...state, email: action.email}            
            break;
    
        default:
            break;
    }
}


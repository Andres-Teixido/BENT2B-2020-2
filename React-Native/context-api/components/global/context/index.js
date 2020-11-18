/** 
 *  Definicion de contexto
 */

import React from "react";

const authData = {
    nombre: "NT2",
    apellido: "ORT",
    email: "nt2@ort.edu.ar"
}

export default React.createContext(authData)
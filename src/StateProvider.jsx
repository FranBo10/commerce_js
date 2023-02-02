import { createContext, useContext, useReducer } from "react";

/*Contexto para pasar las variables de un componente a otro*/
export const StateContext = createContext();

/*Provee de la herramienta para pasar los datos de un componente a otro*/
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/*Cambia el estado de initialState*/
export const useStateValue = () => useContext(StateContext);


/#* --------------------------------- Tipado --------------------------------- */
import { AUTO_LANGUEAGE, SUPORTED_LANGUAGES } from "./constants"

export type Language = keyof typeof SUPORTED_LANGUAGES // Languaage soo puedo ser de tipo q SUPORTED_LANGUAGE tenga  ose es en de
export type AutoLanguage = typeof AUTO_LANGUEAGE // AutoLanguage solo peude ser del tipo auto
export type FromLanguage = Language | AutoLanguage // FromLanguage solo peude ser uno de los dos, o el primero o el segundo
/* -------------------------------------------------------------------------- */
export interface State  {
  fromLanguage:string,
  toLanguage: string,
  fromText: string,
  result: string,
  loading:boolean
};

export type Action =
| { type: 'SET_FROM_LANGUAGE', payload: string}
| { type: 'INTERCHANGE_LANGUAGES'}
| { type: 'SET_TO_LANGUAGE', payload: string}
| { type: 'SET_FROM_TEXT', payload: string}
| { type: 'SET_RESULT', payload: string}

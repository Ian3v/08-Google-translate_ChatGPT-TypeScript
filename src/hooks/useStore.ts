
import { useReducer } from 'react';
import { FromLanguage, Language, type State, type action } from '../type.defin.js' //Importar el tipo
import { AUTO_LANGUEAGE } from '../constants.js';

//* 1. Create a iniitalState
const initialState: State = {
    fromLanguage:'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading:false
  }
  
  //* 2. Create a Reducer
  function reducer(state: State, action:action ){
    //Para saber el tipo de la accion
    const{ type } = action;
  
    if( type === 'INTERCHANGE_LANGUAGES'){

      if(state.fromLanguage === AUTO_LANGUEAGE){ //auto lenguage esta en constats.ts
        return state
      }
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
    if(type == 'SET_FROM_LANGUAGE'){
      return{
        ...state,
        fromLanguage: action.payload 
      }
    }
    if(type === 'SET_TO_LANGUAGE'){
    return { 
      ...state,
      toLanguage: action.payload 
      }
    }
    if(type === 'SET_FROM_TEXT'){
      return{
        ...state,
        loading:true,
        fromText: action.payload,
        result:''
      }
    }
    if(type === 'SET_RESULT'){
      return{
        ...state,
        loading:false,
        result:action.payload
      }
    }
  
    return state
  }

  export function useStore(){

    //* 3 usar el hook useReducer
    const [{
        fromLanguage, 
        toLanguage, 
        fromText,
        result,
        loading 
      }, dispatch] = useReducer(reducer, initialState)

      const interchangeLanguages = ()=>{
        dispatch( {type: 'INTERCHANGE_LANGUAGES'})
      }
      // const setFromLanguage = (payload: string)=>{ // Cuando no estaba tiapdo teniamos q poner string
      const setFromLanguage = (payload: string)=>{  // HAora q esta tipado el tipo q puede ser payload es limitado o solop uede ser o q tenga FromLageage   |Language o | AytoLanguage
        console.log('payload activado', payload)
        console.log('useStore fromLanguage> ',fromLanguage)

        dispatch({type: 'SET_FROM_LANGUAGE', payload  })
      }
      // const setToLanguage = (payload: string) =>{ // ya no tenemos q poner q sea un string, ya q como esta tiapado ahhora solo peude ser lo q tenga Language
      const setToLanguage = (payload: Language) =>{ //Como esta tipado lo q tiene language es |es |en |de|
        dispatch({type: 'SET_TO_LANGUAGE', payload})
      }
      const setFromText = (payload: string) =>{
        dispatch( { type: 'SET_FROM_TEXT', payload })
      }
      const setResult = (payload: string) =>{
        dispatch({type:'SET_RESULT', payload})
      }

      return{
        fromLanguage,
        toLanguage, 
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
      }
  }
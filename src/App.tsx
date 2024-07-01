import { useReducer, useState } from 'react'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


import { Matriz } from './practicaEjercicios/matriz.jsx'


//* 1. Create a iniitalState
const iniitalState = {
  fromLanguage:'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading:false
}


//* 2. Create a Reducer
function reducer(state, action){
  //Para saber el tipo de la accion
  const{ type, payload } = action;

  if( type === 'INTERCHANGE_LANGUAGES'){
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if(type == 'SET_FROM_LANGUAGE'){
    return{
      ...state,
      fromLanguage: payload 
    }
  }
  if(type === 'SET_TO_LANGUAGE'){
  return { 
    ...state,
    toLanguage: payload 
    }
  }
  if(type === 'SET_FROM_TEXT'){
    return{
      ...state,
      loading:true,
      fromText: payload,
      result:''
    }
  }
  if(type === 'SET_RESULT'){
    return{
      ...state,
      loading:false,
      result:payload
    }
  }

  return state
}

function App() {
  
  //* 3. Usando el Hook useReducer
  const [state, dispatch] = useReducer(reducer, iniitalState)

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className='App'>
      <h1>Google Translate</h1>
      <matriz/>
    </div>
  )
}

export default App

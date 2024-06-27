import { useReducer, useState } from 'react'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const{ type } = action;


}

function App() {
  
  //* Usando el Hook useReducer
  // const [state, dispatch] = useReducer(reducer, action)

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className='App'>
      <h1>Google Translate</h1>
    </div>
  )
}

export default App

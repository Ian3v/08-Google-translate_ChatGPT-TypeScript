// import {Container, Row, Col} = from 'react-bootstrap'
import { useReducer, useState } from 'react'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap'
import { type State } from './type.defin.js' //Importar el tipo

import { useStore} from './hooks/useStore.js'
import { AUTO_LANGUEAGE, SUPORTED_LANGUAGES } from './constants.js';
import { ArrowsIcon } from './components/Icons.tsx';
import { LanguageSelector} from './components/LanguageSelector.tsx'

// //! -------------------------------------------------------------------------- */
//   bueno tenemos, el estado FromLanguage q esta en un useReducer del archiv useStore
//   queremos actulizarlo con su funcion actulizador, setFromLanguage, q tambien esta en useStore

//   el problema es q desde App hacer una funcion de cambiar el estado  si se ve el cambio y si cambia el estado
//   pero si la funcion cambiar lo hacemos en el archivo q renderiza las opcione, si cambia el estado, pero no se ve el cambio
//! -------------------------------------------------------------------------- */

function App() { 
  
  //* 3. Usando el Hook useReducer
  const { fromLanguage, toLanguage,interchangeLanguages,setFromLanguage } = useStore()

 const changeFromLanguage = (e)=>{
  const value = e.target.value 
  const keys = Object.keys(SUPORTED_LANGUAGES)
  setFromLanguage(keys[value])
 }
 
 //! Estado de FromLanguage en este console tiene el actual, pero useStore no
  console.log('App Fromlangeuage> ',fromLanguage)
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Container fluid>
      <h1>G Translate</h1>

      <Row>
        
        <Col>
          {/* <h2>From</h2> */}
          <LanguageSelector onChange={changeFromLanguage}/>
          {fromLanguage}
        </Col>

        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUEAGE} onClick={ ()=>{interchangeLanguages()}}>
            <ArrowsIcon />
          </Button>
        </Col>  

        <Col>
          <LanguageSelector />
          {toLanguage}
        </Col>

      </Row>
    </Container>
  )
}


export default App

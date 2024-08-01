// import {Container, Row, Col} = from 'react-bootstrap'
import { useReducer, useState } from 'react'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Form, Stack} from 'react-bootstrap'
import { SectionType, type State } from './type.defin.js' //Importar el tipo

import { useStore} from './hooks/useStore.js'
import { AUTO_LANGUEAGE, SUPORTED_LANGUAGES } from './constants.js'; 
import { ArrowsIcon } from './components/Icons.tsx';
import { LanguageSelector} from './components/LanguageSelector.tsx'
import { TextArea } from './components/TextArea.tsx'
// //! -------------------------------------------------------------------------- */
//   bueno tenemos, el estado FromLanguage q esta en un useReducer del archiv useStore
//   queremos actulizarlo con su funcion actulizador, setFromLanguage, q tambien esta en useStore

//   el problema es q desde App hacer una funcion de cambiar el estado  si se ve el cambio y si cambia el estado
//   pero si la funcion cambiar lo hacemos en el archivo q renderiza las opcione, si cambia el estado, pero no se ve el cambio
//! -------------------------------------------------------------------------- */

function App() { 
  
  //* 3. Usando el Hook useReducer
  const 
  { 
    loading,
    fromText,
    result, 
    fromLanguage, 
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult

  } = useStore()

  

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    
    <Container fluid>
      <h1>G Translate</h1>

      <Row>
        
        <Col>
          <Stack gap={2}>
            {/* <h2>From</h2> */}
            {/* //Onchage se queja por lo q esta en la carpeta LanguageSelector, interface Props, ya q onChange le pusiomos String yu debe ser del tipo Language */}
            <LanguageSelector 
              value={fromLanguage}
              type={SectionType.From}
              onChange={setFromLanguage}
              /> 
              <TextArea 
                type={SectionType.From}
                value={fromText}
                onChange={setFromText}
                
              />
            </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUEAGE} onClick={ ()=>{interchangeLanguages()}}>
            <ArrowsIcon />
          </Button>
        </Col>  

        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
              />
              <TextArea 
                type={SectionType.To}
                value={result}
                onChange={setResult}
                loading={loading}
              />
          </Stack>
        </Col>

      </Row>
    </Container>
  )
}


export default App

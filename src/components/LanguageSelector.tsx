import {Form} from 'react-bootstrap';
import { SUPORTED_LANGUAGES } from '../constants';
import { useStore} from '../hooks/useStore'

export const LanguageSelector = ({onChange})=>{

    const {interchangeLanguages,setFromLanguage, fromLanguage} = useStore()
    
    // const onChangeOption = (e)=>{
    //     const value= e.target.value
    //     const keys = Object.keys(SUPORTED_LANGUAGES)
    //     console.log('>> e', value)
    //     console.log('>', keys[value])
    //     console.log('>', SUPORTED_LANGUAGES[`${keys[value]}`])
    //     const FromLanguageValue = SUPORTED_LANGUAGES[`${keys[value]}`] 
    //     interchangeLanguages(FromLanguageValue)
    //     setFromLanguage(keys[value])
    //     console.log('Estate FromLangegae',fromLanguage)
    // }
    /* -------------------------------------------------------------------------- */
    const changeFromLanguage = (e: string)=>{
        const value = e.target.value 
        console.log('%c23 languageSelectro >','color:red;font-size:15px;',typeof(value));
        const keys = Object.keys(SUPORTED_LANGUAGES)
        setFromLanguage(keys[value])
       }
       
       
    /* -------------------------------------------------------------------------- */

    return(
        <Form.Select aria-label='Selecciona el idioma' onChange={(e)=>{ changeFromLanguage(e); onChange(e); }}>
        {Object.entries(SUPORTED_LANGUAGES).map((key, literal)=>{
            console.log('>',literal)
            return(
                <option key={literal} value={literal}   >
                    {key[1]}
                </option>   
            )
        })
        }  
        </Form.Select>
    )
}
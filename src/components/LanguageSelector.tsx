import {Form} from 'react-bootstrap';
import { AUTO_LANGUEAGE, SUPORTED_LANGUAGES } from '../constants';
import { useStore} from '../hooks/useStore'
import { SectionType, type FromLanguage,type Language } from '../type.defin';

// interface Props {
//     // onChange: (language:string) => void
//     onChange: (language:Language) => void
// }

type Props = 
//    | { type: 'from', value: FromLanguage, onChange: (langugage: FromLanguage) =>void}
//    | { type: 'to', value: Language, onChange: ( Language: Language ) => void}
   | { type: SectionType.From, value: FromLanguage, onChange: (langugage: FromLanguage) =>void}
   | { type: SectionType.To, value: Language, onChange: ( Language: Language ) => void}

export const LanguageSelector = ({onChange, type, value}: Props)=>{

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{ // Este e sun evento de react, cambio de evento y tambien lo estamos sacando change elemnt del html selectet Element
        onChange(e.target.value as Language) //El value era un string pero estas intentado asignar en es de \ Forzamos q el evento q le vamos a pasar es Language para q ya no se queje 
    } 

    return(
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
        {type === SectionType.From && <option value={AUTO_LANGUEAGE}> Detectar idioma </option> }
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
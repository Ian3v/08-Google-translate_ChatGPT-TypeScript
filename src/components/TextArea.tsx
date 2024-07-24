import {Form } from 'react-bootstrap'
import { SectionType } from '../type.defin'

/* ---------------------------- o esto u lo otro ---------------------------- */
// type Props = 
// | { type: SectionType.From, loading?:undefined, onChange:(value: string)  => void, value:string }
// | { type: SectionType.To, loading?:boolean, onChange:(value: string)  => void, value:string }

interface Props {
    type:SectionType
    placeholder: string
    loading?: boolean
    onChange: (value: string)=> void 
    value:string
}
/* -------------------------------------------------------------------------- */
const commonStyles ={ border: 0, height: '200px', resize:'none'}
const getPlaceHolder = ({type, loading}: {type:SectionType, loading?:boolean})=>{
    if(type === SectionType.From) return 'INtroducir texto'
    if(loading === true ) return 'Cargando...'
    return 'Traduccion'
}


export const TextArea = ({type,loading, value, onChange }: Props) => {

    const styles = type === SectionType.From 
        ?
        commonStyles 
        :
        { ...commonStyles, backgroundColor: 'rgb(200, 200, 200)', resize: 'none'}

    const handleChange= (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(e.target.value)
    }

    return(
        <Form.Control 
            autoFocus= {type === SectionType.From}
            as='textarea'  // q elemenot debe rednreizar, es de REACTBOOTSTRAP, ose le digo , loq quiero renderizar en es un textarea
            style={styles}
            placeholder={ getPlaceHolder({type,loading})}
            value={value}
            onChange={handleChange}
            loading={loading}
        />
    )
}



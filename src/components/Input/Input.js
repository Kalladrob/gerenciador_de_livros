import { NativeInput } from './InputStyled';

const Input = (props) => {

    return <NativeInput placeholder={props.placeholder} value={props.value} onChange={e => props.onChange(e.target.value)}/>

}

export default Input;
import {ButtonWrapper} from './ButtonStyled';

const Button = (props) => {
    return <ButtonWrapper onClick={props.onClick}>{props.title}</ButtonWrapper>;
}

export default Button;
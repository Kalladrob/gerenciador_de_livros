import axios from 'axios';
import {Wrapper, TitleArea, Cover, Icon} from './BookcardStyled';

const BookCard = (props) => {

    return (
        <Wrapper>
            <Cover url={props.cover}/>
            <TitleArea>{props.title}</TitleArea>
            {props.shouldShowDelete && <Icon icon='delete' onClick={props.onDelete}/>}
        </Wrapper>
    )

}

export default BookCard;
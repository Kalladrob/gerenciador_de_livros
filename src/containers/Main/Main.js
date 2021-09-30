import { useState, useEffect } from 'react';
import Bookcard from '../../components/Bookcard/Bookcard';
import {OuterWrapper, LowerWrapper, CardWrapper, UpperWrapper} from './MainStyled';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
    
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            history.push('/login');
        } else {
            setIsLoading(true);
            axios.get("https://6140a962357db50017b3d7c9.mockapi.io/books")
            .then( response => {
                console.log('Result: ', response);
                setBooks(response.data);
            })
            .catch(error => {
                console.log('Result: ',error);
            })
            .finally(() => {
                setIsLoading(false);
            })
        }
    }, []);
        
    const [search, setSearch] = useState("");

    const [books, setBooks] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const showAllBooks = () => {
        return books.map(book => <CardWrapper key={book.id}><Link to={`/new/${book.id}`}><Bookcard title={book.title} author={book.author} cover={book.cover}/></Link></CardWrapper>);
    }

    const filterBooks = () => {
        return books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())).map(book => <CardWrapper key={book.id}><Bookcard title={book.title} author={book.author} cover={book.cover}/></CardWrapper>);
    }

    const renderBookList = () => {
        if (search != ''){
            return filterBooks();
        }else{
            return showAllBooks();
        }
    }

    

    return (
    <OuterWrapper>
        <UpperWrapper>            
            <Link to="/new"><Button title='Novo'/></Link>
            <Input placeholder="Pesquisar..." value={search} onChange={setSearch}/>
        </UpperWrapper>
        <LowerWrapper>
            {isLoading && "Carregando..."}
            {renderBookList()}
        </LowerWrapper>
    </OuterWrapper>);
}

export default Main;
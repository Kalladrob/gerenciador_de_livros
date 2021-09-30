import { OuterWrapper,
         BookcardWrapper,
         FieldsWrapper,
         UpperWrapper, 
         LowerWrapper } from "./RegisterStyled";
import BookCard from "../../components/Bookcard/Bookcard";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const NewBook = () => {

    const [title, setTitle] = useState("");

    const [author, setAuthor] = useState("");

    const [cover, setCover] = useState("");

    const [message, setMessage] = useState("");

    const { id } = useParams();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false)

    const clearForm = () => {
        setAuthor("");
        setCover("");
        setTitle("");
    }

    const getButtonName = () => {
        if(id){
            return "Editar"
        }else{
            return "Cadastrar"
        }
    }

    const registerBook = () => {
        setIsLoading(true)
        axios.post("https://6140a962357db50017b3d7c9.mockapi.io/books", {title, author, cover}).
        then(() => {
            clearForm();
            setMessage("Livro Cadastrado com Sucesso!")
        }).
        catch((error) => {
            setMessage("Erro ao cadastrar o livro")
        }).
        finally(() => {
            setIsLoading(false)
        })   
    }

    const updateBook = () => {
        isLoading(true);
        axios.put(`https://6140a962357db50017b3d7c9.mockapi.io/books/${id}`, {title, author, cover}).
        then(() => {
            setMessage("Livro alterado com sucesso!")
        }).
        catch((error) => {
            setMessage("Erro ao alterar o livro")
        }).
        finally(() => {
            setIsLoading(false)
        })
    }

    const deleteBook = () => {
        axios.delete(`https://6140a962357db50017b3d7c9.mockapi.io/books/${id}`).
        then(() => {
            history.push("/");
        }).
        catch((error) => {
            setMessage("Erro ao deletar o livro")
        });
    }

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            history.push('/login');
        } else {
            if (id) {
                setIsLoading(true)
                axios.get(`https://6140a962357db50017b3d7c9.mockapi.io/books/${id}`).
                then((response)=>{
                    console.log(response);
                    setTitle(response.data.title);
                    setAuthor(response.data.author);
                    setCover(response.data.cover);
                }).
                catch((error)=>{console.log("Erro",error);}).
                finally(() => {
                    setIsLoading(false);
                })
            }
        }
    }, [])

    return (
        <OuterWrapper>
            <UpperWrapper>
                <Link to="/"><Button title="Voltar"/></Link>
            </UpperWrapper>
            <LowerWrapper>
                {isLoading && "Carregando..."}
                <BookcardWrapper>
                    <BookCard onDelete={deleteBook} title={title} cover={cover} shouldShowDelete/>
                </BookcardWrapper>
                <FieldsWrapper>
                    <h2>Título</h2>              
                    <Input value={title} onChange={setTitle}/>
                    <h2>Autor</h2>
                    <Input value={author} onChange={setAuthor}/>
                    <h2>Capa</h2>
                    <Input value={cover} onChange={setCover}/>
                </FieldsWrapper>
            </LowerWrapper>
            <div>{message}</div>
            <Button title={getButtonName()} onClick={id ? updateBook : registerBook}/>
            <Button title="Limpar" onClick={clearForm}/>
        </OuterWrapper>
        );

}

export default NewBook;
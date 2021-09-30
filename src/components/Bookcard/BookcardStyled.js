import styled from 'styled-components'
import MaterialIcon from '@material/react-material-icon';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: green;
    border-radius: 15px;
    width: 230px;
`

export const Cover = styled.div`
    height: 240px;
    width: 230px;
    background-image: ${(props) => `url("${props.url}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px 15px 0px 0px;
`

export const TitleArea = styled.div`
    padding: 15px;
    font-size: 18px;
    color: white;
    height: 70px;
`

export const Icon = styled(MaterialIcon)`
    color: white;
    cursor: pointer;
`
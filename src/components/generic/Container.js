import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Flex = styled.div`
display: flex;
align-content: center;
justify-content: space-evenly;
margin: 1rem;
flex-wrap: wrap;
`;

const Container = (props) => {
    return <Flex>{props.children}</Flex>;
}
  
ReactDOM.render(
    <Container />,
    document.getElementById('root')
);

export default Container;


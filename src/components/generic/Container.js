import { Component } from "react";
import styled from 'styled-components';

const Flex = styled.div`
display: flex;
align-content: center;
justify-content: space-evenly;
margin: 1rem;
flex-wrap: wrap;
`;

class Container extends Component {
    render() {
        return <Flex>{this.props.children}</Flex>;
    }
}
  
  export default Container;


import { Component } from "react";
import styled from 'styled-components';


const Container = styled.div`
box-sizing: border-box;
  border: none;
  padding: 2rem;
  height: max-content;
  margin: auto;
  overflow: auto;
  width: 100%; 
  text-align: center;
  background-color: #4A4A55;
  border-radius: 8px;
  color: white;
  box-shadow: inset 0 0 10px #1C1C21;
  font-family: 'Inconsolata', monospace;
`;

class Display extends Component {
    render() {
      return <Container>{this.props.children}</Container>;
    }
}
  
  
  export default Display;


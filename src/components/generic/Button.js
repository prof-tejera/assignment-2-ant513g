import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const buttonType = {
  Default: '#4037C4',
  Start: '#057C48',
  Stop: '#AD0A0F',
  Pause: '#CDAE3E',
  Lap: '#4037C4',
  Reset: '#4037C4',
}

const sizes = {
  small: 48,
  medium: 60,
  large: 80,
};

const Container = styled.button `
  display: inline;
  box-sizing: border-box;
  overflow: auto;
  vertical-align: middle;
  text-align: center;
  margin: auto;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: white;
  background-color: ${(props) => props.type || "#4037C4"};
  box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 1px 1px 5px #6760D2')};
  cursor: pointer;
  &:hover {
    font-weight: 600;
    background-color:${(props) => props.type || "#342D9F"};
    box-shadow: inset 1px 1px 5px #6760D2;
  }
  &:active {
    background-color: #342D9F;
    box-shadow: inset 1px 1px 5px #25253C;
  }
  
`;

const Circle = styled.div `
    display: flex;
    margin: 0.5rem;
    align-content: center;
    overflow: auto;
    color: #EFF1F3;
    cursor: pointer;
    .something {
      background-color: orange; 
    }
`;



  

const Button = (props) => {
  const { onClick } = props;
  const size = sizes[props.size];
  const type = buttonType[props.type];
  return (
    <Circle >
        <Container
          pressed={props.pressed}
          value={props.value}
          size={size}
          type={type}
          onClick={props.onClick}
        >
          {props.value}
        </ Container>
      </Circle >
  );
};

Button.defaultProps = {
  size: "medium",
  type: "Default",
  value: 'Start',
  pressed: false,
};


ReactDOM.render(
  <Button />,
  document.getElementById('root')
);


Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["Default", "Start", "Stop", "Pause", "Lap","Cancel","Set", "Reset"]),

};


export default Button;



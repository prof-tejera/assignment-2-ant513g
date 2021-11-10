import {
  Component
} from "react";
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

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Start',
      pressed: false,
    };
}
  render() {
    const size = sizes[this.props.size];
    const type = buttonType[this.props.type];
    const { onClick } = this.props;
    return (
      <Circle >
        <Container
          pressed={this.state.pressed}
          value={this.state.value}
          size={size}
          type={type}
          onClick={this.props.onClick}
        >
          {this.props.value}
        </ Container>
        
      </Circle >
    );
  }
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["Default", "Start", "Stop", "Pause", "Lap","Cancel","Set", "Reset"]),

};

Button.defaultProps = {
  size: "medium",
  type: "Default",
};

export default Button;
import { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    box-sizing: border-box;
    margin: auto;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: auto;
    font-size: 38px;
    font-weight: 400;
    position: relative;
    flex-wrap: wrap;
`;

class DisplayTime extends Component {
  render() {
    return (
      <Container>
        {this.props.hh}:{this.props.mm}:{this.props.ss}.{this.props.ms}
      </Container>
    );
  };
}

DisplayTime.propTypes = {
  hh: PropTypes.number,
  mm: PropTypes.number,
  ss: PropTypes.number,
  ms: PropTypes.number,
}
 
DisplayTime.defaultProps = {
  hh: 0,
  mm: 0,
  ss: 0,
  ms: 0,
};

  
export default DisplayTime;


import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Display from './Display';

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

const DisplayTime = (props) => {
  return (
    <Container>
      {props.hh}:{props.mm}:{props.ss}.{props.ms}
    </Container>
  );
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

ReactDOM.render(
  <DisplayTime />,
  document.getElementById('root')
);
  
export default DisplayTime;


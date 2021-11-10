import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Label = styled.span`
  font-size: 18px;
  margin-right: 1rem;
`;

const Container = styled.div`
  font-size: 18px;
  font-family: 'Inconsolata', monospace;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const HR = styled.hr`
  border: 0;
  height: 1px;
  background: #25253C;
  background-image: linear-gradient(to right, #342D9F, #4037C4, #342D9F);
`;

const DisplayRounds = (props) => {
  return (
    <>
      <HR />
      <Container>
        <Label>{props.name} {props.lap}:</Label>
        {props.hhLap}:
        {props.mmLap}:
        {props.ssLap}.
        {props.msLap}
        </Container>
        </>
  );
}



DisplayRounds.propTypes = {
  hhLap: PropTypes.number,
  mmLap: PropTypes.number,
  ssLap: PropTypes.number,
  msLap: PropTypes.number,
}
 
DisplayRounds.defaultProps = {
  name: 'Lap',
  lap: 1,
  hhLap: 0,
  mmLap: 0,
  ssLap: 0,
  msLap: 0,
};
  
ReactDOM.render(
  <DisplayRounds />,
  document.getElementById('root')
);
export default DisplayRounds;

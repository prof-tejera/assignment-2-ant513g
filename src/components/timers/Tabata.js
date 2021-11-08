import React from "react";
import styled from 'styled-components';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Input from "../generic/Input";
import Container from "../generic/Container";
import DisplayRounds from "../generic/DisplayRounds";
import DisplayTime from "../generic/DisplayTime";
import Display from "../generic/Display";

const Label = styled.text`
padding: 0;
font-size: 16px;
color: white;
border: none;
margin: 0 0 0 0;
width: auto;
vertical-align: middle;
line-height: 40px;
font-weight: 600;
display: block;
text-align: center;
`;

const Flex = styled.div`
padding: 1rem;
display: flex;
align-content: center;
justify-content: space-between;
min-width: 80px;
`;

const Hide = styled.div`
  display: ${props => (props.hide ? 'block' : 'none')};
  position: relative;
  width: 100%;
`;

const Rounds = styled.text`
  font-family: 'Courier Prime', monospace;
  box-sizing: border-box;
  overflow: auto;
  font-size: 20px;
  font-weight: 400;
  vertical-align: middle;
  display: block;
  text-align: center;
`;

const HR = styled.hr`
  border: 0;
  height: 1px;
  background: #25253C;
  background-image: linear-gradient(to right, #342D9F, #4037C4, #342D9F);
`;



// The idea for the tabata is when you click the +, it will add a set in the bottom of the application. 
// Then the user would be able to manually edit each set. The amount of sets equal one round.
// I thought this way would work better so the user would be able to have more than two types of sets with varying times.
// The display also shows the rounds and sets (lap) that are left

class Tabata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Start',
      value: 'Start',
      rounds: 1,
      lap: 1,
      hide: false,
    };
  }
  
  render() {
    return (
      <Panel>
        <Display>
          <Label>Time Left:</Label>
          <DisplayTime name={'Rounds'}  hh={this.state.hh} mm={this.state.mm} ss={this.state.ss} ms='00' />
          <Container>
              <Label>Rounds Left:
              <Rounds>{this.state.rounds}</Rounds>
              </Label>
              <Label>Sets Left:
              <Rounds>{this.state.lap}</Rounds>
              </Label>
          </Container>
        </Display>
        <Flex>
          <Container>
            <Flex> 
        <Label> Rounds:
          <Rounds>{this.state.rounds} </Rounds>
        </Label>
        </Flex>
        <div>
          <Button size={'small'} value={'+'} onClick={() => { this.setState(oldState => { const { rounds: oldCurrent } = oldState; return { rounds: oldCurrent + 1, }; },); }} />
          <Button size={'small'} value={'-'} onClick={() => { this.setState(oldState => { const { rounds: oldCurrent } = oldState; return { rounds: oldCurrent - 1,};},);}} /> 
        </div>
        </Container>

        <Container>
            <Flex>
              {/* In this app, it is call Sets instead of lap, although the functionality is the same */}
          <Label>Sets:
            <Rounds>{this.state.lap}</Rounds>
          </Label>
          </Flex>
          <div>
              <Button size={'small'} value={'+'}
                onClick={() => {
                  this.setState(oldState => {
                    const { lap: oldCurrent } = oldState;
                    return {
                      lap: oldCurrent + 1,
                    };
                  });
                }} />
            <Button size={'small'} value={'-'} onClick={() => { this.setState(oldState => {const { lap: oldCurrent } = oldState;return {lap: oldCurrent - 1,}; });}} /> 
          </div>
          </Container>
        
        </Flex>



        <DisplayRounds name={'Set'} lap={1} hhLap={this.state.hhLap} mmLap={this.state.mmLap} ssLap={this.state.ssLap} msLap={0}/>
        <Hide hide={this.state.hide}>
          <Container>
            <Input name={'Hours'} value={this.state.hh} onChange={e => { this.setState({hhLap: e.target.value,});}}/>
            <Input name={'Minutes'} value={this.state.mm} onChange={e => {this.setState({mmLap: e.target.value,});}} />
            <Input name={'Seconds'} value={this.state.ss} onChange={e => {this.setState({ ssLap: e.target.value,}); }} />
          </Container>
        </Hide> 
        <Button
          size={'small'}
          pressed={this.state.pressed}
          value={'Edit'}
          onClick={() => {
            if (this.state.pressed) {
              this.setState({
                hide: true,
                pressed: false,
              });
              console.log('YES');
            } else {
              this.setState({
                hide: false,
                pressed: true,
              });
              console.log('NO');
            }
          }} 
        />
        
      
        <HR />
        <Container>
          <Button value={this.state.value} type={this.state.type}
            onClick = {() => { if (this.state.pressed) {
                  this.setState({
                    type: 'Start',
                    pressed: false,
                    value: 'Start',
                  });
                } else {
                  this.setState({
                    type: 'Stop',
                    pressed: true,
                    value: 'Stop',
                  }); } } }/>
          <Button value={'Reset'} type={'Reset'} className="something"  onClick={e => {
          this.setState({
            hh: 0,
            mm: 0,
            ss: 0,
            rounds: 0,
            lap: 0,
            hhLap: 0,
            mmLap: 0,
            ssLap: 0,
          }); }} />
        </Container>
       
        
      </Panel>
    );
  }
}


export default Tabata;

import React from "react";
import styled from 'styled-components';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Input from "../generic/Input";
import Container from "../generic/Container";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import Display from "../generic/Display";

const Label = styled.text`
padding: 0;
font-size: 16px;
color: white;
border: none;
margin: 16px 0 0 0;
width: auto;
vertical-align: middle;
line-height: 40px;
font-weight: 600;
display: block;
`;

const Rounds = styled.text`
  font-family: 'Courier Prime', monospace;
  box-sizing: border-box;
  overflow: auto;
  font-size: 20px;
  font-weight: 400;
  vertical-align: middle;
  display: block;
`;


// The idea for the XY is each round when finised it will add a set in the bottom of the application. 
// Then the user would be able to see how many rounds have gone by, as well in the display, it will show the amount of rounds left.
// I thought this way would work better so the user would be able to have more than two types of sets with varying times.

class XY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: 2,
      type: 'Start',
      value: 'Start',
    };
  }
  render() {
    return (
      <Panel>
        <Display>
          <Label>
            Time Left:
          </Label>
          <DisplayTime hh={this.state.hh} mm={this.state.mm} ss={this.state.ss} ms='00' />
          
            <Label>
            Rounds Left:
          </Label>
          <Rounds>
            {this.state.rounds}
            </Rounds>
        </Display>
        
        <Container>
        <Input name={'Rounds'} value={this.state.rounds}
              onChange={e => {
                this.setState({
                  rounds: e.target.value,
                });
              }}
            />
        <Input name={'Hours'} value={this.state.hh}
              onChange={e => {
                this.setState({
                  hh: e.target.value,
                });
              }}
            />
             <Input name={'Minutes'} value={this.state.mm}
              onChange={e => {
                this.setState({
                  mm: e.target.value,
                });
              }}
            />
             <Input name={'Seconds'} value={this.state.ss}
              onChange={e => {
                this.setState({
                  ss: e.target.value,
                });
              }}
          />
       </Container>
        <Container>
        <Button value={this.state.value} type={this.state.type}
            onClick = {() => { if (this.state.pressed) {
                  this.setState({
                    type: 'Start',
                    pressed: false,
                    down: false,
                    value: 'Start',
                  });
                } else {
                  this.setState({
                    type: 'Stop',
                    pressed: true,
                    down: true,
                    value: 'Stop',
                  }); } } }/>
        <Button value={'Reset'}  type={'Reset'}  onClick={e => {
          this.setState({
            hh: 0,
            mm: 0,
            ss: 0,
            rounds: 0,
            hhLap: 0,
            mmLap: 0,
            ssLap: 0,
          }); }} />
        </Container>
        <DisplayRounds name={'Round'} lap={2} hhLap={this.state.hhLap} mmLap={this.state.mmLap} ssLap={this.state.ssLap} msLap={0}/>
        <DisplayRounds name={'Round'} lap={1} hhLap={this.state.hhLap} mmLap={this.state.mmLap} ssLap={this.state.ssLap} msLap={0}/>
      </Panel>
    );
  }
}


export default XY;

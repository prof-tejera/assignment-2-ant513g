import React from 'react';
import Panel from '../generic/Panel';
import Container from '../generic/Container';
import Display from '../generic/Display';
import Button from '../generic/Button';
import DisplayRounds from '../generic/DisplayRounds';
import DisplayTime from '../generic/DisplayTime';


// For the stopwatch, each new lap will be displayed on the bottom of the app with the time elasped since the last lap.
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      name: 'Lap',
      lap: 1,
      type: 'Start',
      value: 'Start',
    };
  }
  render() {
    return (
      <Panel>
        <Display>
          <DisplayTime hh={this.state.hh} mm={this.state.mm} ss={this.state.ss} ms='00' />
        </Display>
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
        <Button value={'Reset'} type={'Reset'}onClick={e => {
                this.setState({
                  hh: 0,
                  mm: 0,
                  ss: 0,
                  hhLap: 0,
                  mmLap: 0,
                  ssLap: 0,
                });
              }} />
        <Button value={'Lap'} />
         
        </Container>
        <DisplayRounds name={this.state.name} lap={this.state.lap} hhLap={this.state.hhLap} mmLap={this.state.mmLap} ssLap={this.state.ssLap} msLap={0}/>
       </Panel>
    );
  }
}

export default Stopwatch;

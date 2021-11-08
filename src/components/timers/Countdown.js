import React from 'react';
import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Container from '../generic/Container';
import Display from '../generic/Display';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Button value={'Reset'} type={'Reset'} onClick={e => {
                this.setState({
                  hh: 0,
                  mm: 0,
                  ss: 0,
                  ms: 0,
                });
              }} />
          </Container>
      </Panel>
    );
  }
}

export default Countdown;

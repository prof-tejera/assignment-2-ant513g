import React from 'react';
import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Container from '../generic/Container';
import Display from '../generic/Display';
import Button from '../generic/Button';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Start',
      value: 'Start',
      hh: 0,
      mm: 0,
      ss: 0,
    };
  }



  render() {


    const { hh, mm, ss, interval } = this.state;
// CORRECT WAY
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));


    const tick = () => {
      console.log('count ' + hh + ":" + mm + ":" + ss);
      console.log('count', hh, 'this.state.hh', this.state.hh);
      
      //HOURS
      if (this.state.mm == 0 && this.state.hh != 0) {
        this.setState({
          hh: this.state.hh - 1,
        });
      }
      //MINUTES
      if (this.state.ss == 0 && this.state.mm != 0) {
        this.setState({
          mm: this.state.mm - 1,
        });
      }

        if (this.state.ss == 59) {
        console.log('This is 59!');
        this.setState({
          hh: this.state.hh - 1,
          mm: this.state.mm - 1,
        });
        
      };
      
      this.setState({
        ss: this.state.ss - 1,
      });
    };

    const isRunning = !!interval;




    
    return (
      <Panel>
        <ButtonCopy />
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
            // onClick = {() => { if (this.state.pressed) {
            //       this.setState({
            //         type: 'Start',
            //         pressed: false,
            //         down: false,
            //         value: 'Start',
            //       });
            //     } else {
            //       this.setState({
            //         type: 'Stop',
            //         pressed: true,
            //         down: true,
            //         value: 'Stop',
            //       });
            // }
            // }}


            onClick={() => {
              if (interval) {
                clearInterval(interval);
                this.setState({
                  interval: null,
                });
              } else {
                this.setState({
                  interval: setInterval(tick, 1000),
                });
              }
            }}
          


            



          />
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

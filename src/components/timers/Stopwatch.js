import React from 'react';
import ReactDOM from 'react-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import Panel from '../generic/Panel';
import Container from '../generic/Container';
import Display from '../generic/Display';
import Button from '../generic/ButtonOriginal';
import DisplayRounds from '../generic/DisplayRounds';
import DisplayTime from '../generic/DisplayTime';


// setTimeout(() => {
//   div.html('Updating from componentDidMount!');
// }, 5000);

// const Counter = ({ count, setCount }) => {
//   useEffect(() => {
//     console.log("MOUNT Counter");

//     return () => {
//       console.log("before UNMOUNT Counter");
//     };
//   }, []);

//   return (
//     <div className="main-panel">
//       <div className="display">Current {count}</div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      name: 'Lap',
      lap: 1,
      type: 'Start',
      value: 'Start',
      hh: 0,
      mm: 59,
      ss: 55,
      ms: 0,
    };
  }
  render() {
    const { interval } = this.state;

    const tick = () => {
      this.setState({
        ss: this.state.ss + 1,
      });
      console.log('count ' + this.state.hh + ":" + this.state.mm + ":" + this.state.ss);
      console.log('count', 'this.state.hh', this.state.ss);
      if (this.state.ss == 60) {
        console.log('This is 59!');
        this.setState({
          mm: this.state.mm + 1,
          ss: 0,
        });
      }
      if (this.state.mm == 60) {
        console.log('This is 59!');
        this.setState({
          hh: this.state.hh + 1,
          mm: 0,
        });
      }
    };

    
    const getLap = () => {
      return  (<DisplayRounds
      name={this.state.name}
      lap={this.state.lap}
      hhLap={this.state.hhLap}
      mmLap={this.state.mmLap}
      ssLap={this.state.ssLap}
      msLap={0}
    />)
    };
    

    const isRunning = !!interval;

    return (
      
      <Panel>
      
        <Display>
          <DisplayTime hh={this.state.hh} mm={this.state.mm} ss={this.state.ss} ms={this.state.ms} />
        
        </Display>
        <Container>
          <Button value={this.state.value} type={this.state.type}
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
              if (this.state.pressed) {
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
                });
              }
            }
            }
            
          >   {isRunning ? 'Stop' : 'Start'} </Button>
          



          
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
       
        
        <DisplayRounds
          name={this.state.name}
          lap={this.state.lap}
          hhLap={this.state.hh}
          mmLap={this.state.mm}
          ssLap={this.state.ss}
          msLap={0}

        />
       </Panel>
    );
  }
}

export default Stopwatch;

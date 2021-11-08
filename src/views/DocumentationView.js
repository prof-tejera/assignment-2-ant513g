import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import Input from "../components/generic/Input";
import DisplayTime from "../components/generic/DisplayTime";
import DisplayRounds from "../components/generic/DisplayRounds";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #h2h2h2;
`;

const Background = styled.div`
 color: black;
 background-color: #6760d2;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Button"
            component={<Button value="Button" />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the button",
                type: "string",
                defaultValue: "medium",
              },
              {
                prop: "type",
                description: "Changes the type of button",
                type: "string",
                defaultValue: "default",
              },
              {
                prop: "onClick",
                description: "Binds the onClick",
                type: "N/A",
                defaultValue: "N/A",
              },
            ]}
          />
          <DocumentComponent
            title="Input"
            component={<Input />}
            propDocs={[
              {
                prop: "name",
                description: "Assigns a name",
                type: "string, number, or node",
                defaultValue: "n/a",
              },
              {
                prop: "onChange",
                description: "Binds the onChange",
                type: "n/a",
                defaultValue: "n/a",
              },
            ]}
          />
          <DocumentComponent
            title="Display Time"
            component={<DisplayTime />}
            propDocs={[
              {
                prop: "hh",
                description: "Sets the hours value",
                type: "number",
                defaultValue: 0,
              },
              {
                prop: "mm",
                description: "Set the minutes value",
                type: "number",
                defaultValue: 0,
              },{
                prop: "ss",
                description: "Sets the seconds value",
                type: "number",
                defaultValue: 0,
              },{
                prop: "ms",
                description: "Sets the milliseconds",
                type: "number",
                defaultValue: 0,
              },
            ]}
          /><Background>
          <DocumentComponent
            title="Display Rounds"
            component={<DisplayRounds />}
            propDocs={[
              {
                prop: "hhLap",
                description: "Sets the hours value",
                type: "number",
                defaultValue: 0,
              },
              {
                prop: "mmLap",
                description: "Set the minutes value",
                type: "number",
                defaultValue: 0,
              },{
                prop: "ssLap",
                description: "Sets the seconds value",
                type: "number",
                defaultValue: 0,
              },{
                prop: "msLap",
                description: "Sets the milliseconds",
                type: "number",
                defaultValue: 0,
              },
              {
                prop: "lap",
                description: "Sets the number of laps",
                type: "number",
                defaultValue: 1,
              },
              {
                prop: "name",
                description: "Sets the name of the rounds",
                type: "string",
                defaultValue: 'Lap',
              },
            ]}
          /></Background>
        </div>
      </Container>
    );
  }
}

export default Documentation;

import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const MarkDownInput = ({ markdown, onChange }) => (
  <FormGroup controlID="formControlTextTarea">
    <ControlLabel> Markdown Input:</ControlLabel> <br />
    <FormControl
      componentClass="textarea"
      placeholder="Enter Markdown"
      value={markdown}
      onChange={onChange}
    />
  </FormGroup>
);

export default MarkDownInput;

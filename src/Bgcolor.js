import {React, useState} from 'react';
import Select from 'react-select';

function Bgcolor() {
  var colors = [
    {
      vaue: 1,
      label: 'navy',
    },
    {
      vaue: 2,
      label: 'crimson',
    },
    {
      vaue: 3,
      label: 'orange',
    },
    {
      vaue: 4,
      label: 'greenyellow',
    },
    {
      vaue: 5,
      label: 'black',
    },
  ];
  var [setcolor, ddlvalue] = useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  };
  return (
    <div>
      <style>{'body {background-color:' + setcolor + ';}'}</style>
      <Select options={colors} onChange={ddlhandle}></Select>
      <center>
        <b>The background color is: {setcolor}</b>
      </center>
    </div>
  );
}
export default Bgcolor
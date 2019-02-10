import React from 'react';
import { Table } from 'reactstrap';

const Option = (props) => {
    return ( 
        
        
       
         
            



 <table class="table">
  <thead>
    <tr>

      <th scope="col">Todo/s</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{props.optionText}</td>
      <td><button onClick = {props.handleAddOption(props.optionText)}>Remove</button></td>
     
    </tr>
  </tbody>
        
</table>

     );
}

export default Option;
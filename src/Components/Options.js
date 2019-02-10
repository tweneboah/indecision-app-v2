import React from 'react';
import Option from './Option';



const Options = (props) => {
    return (  
        <div>
            <h2>You have: {props.options.length} to todos</h2>
           
           {props.options.map((option) => (
               <Option handleAddOption = {props.handleDeleteOption}
                key={option} 
                optionText = {option}>{option}
               
                </Option>))
           }

           <button className ="btn btn-danger m-2" onClick = {props.handleDeleteOptions}>Remove All</button>

           <button onClick = {props.handleDeleteOption}>Remove</button>

ß
        </div>



    );
}

export default Options;
import React from 'react';
import Option from './Option'


const Options = (props) => {
    return (  
        <div>
            <h2>Your total options are: {props.options.length}</h2>
           
           {props.options.map((option) => (
               <Option handleAddOption = {props.handleDeleteOption}
                key={option} 
                optionText = {option}>{option}
               
                </Option>))
           }

           <button onClick = {props.handleDeleteOptions}>Remove All</button>

           <button onClick = {props.handleDeleteOption}>Remove</button>
        </div>
    );
}

export default Options;
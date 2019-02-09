import React from 'react';

const Option = (props) => {
    return ( 
        <div>
            
            {props.optionText}

            <button onClick = {props.handleAddOption(props.optionText)}>Remove</button>
            
        </div>
     );
}

export default Option;
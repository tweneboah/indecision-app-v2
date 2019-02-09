import React, { Component } from 'react';




class AddOptions extends Component {
    
    state = {
        error: undefined
    }
  handleAddOption = (e) => {
     e.preventDefault();
     const option = e.target.elements.option.value.trim();
      
     let error = this.props.handleAddOptions(option)
     this.setState({
         error: error
     })
     
  }

    render() { 
        return (  
            <div>
                <h3>Add Options</h3>
                <h3>{this.state.error}</h3>
                <form onSubmit = {this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
 export default AddOptions;
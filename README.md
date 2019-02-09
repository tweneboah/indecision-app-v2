```javascript
import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
         );
    }
}
 
class Action extends Component {
  
    handlePick = () => {
       alert('Handle pick was clicked')
    }
    render() { 
        return ( 
            <div>
                <button onClick = {this.handlePick}>What Should I do?</button>
            </div>
         );
    }
}
 

class Options extends Component {
    
    handleRemoveAll = () => {
        alert('Handle remove all')
    }
    render() { 
        return (  
            <div>
                <h2>Your total options are: {this.props.options.length}</h2>
               
               { this.props.options.map((option) => <Option key={option} optionText = {option}>{option}</Option>)
               }

               <button onClick = {this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}
 
class Option extends Component {
    render() { 
        return ( 
            <div>
                {/* //<p>Option</p> */}
                {this.props.optionText}
            </div>
         );
    }
}
 
class AddOptions extends Component {
    
  handleAddOption = (e) => {
     e.preventDefault();
     const option = e.target.elements.option.value.trim();

     if(option){
     this.props.options.push(option)
     }
     console.log(this.props.options) 
  }

    render() { 
        return (  
            <div>
                <h3>Add Options</h3>
                <form onSubmit = {this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
 
class IndecisionAp extends Component {
    state = {  }

   
    render() { 
        const options = ['One', 'two']
        return ( 
            <div>
                <Header 
                title ="Indecision App"
                subTitle = 'Put your life in computer'
                 />
                <Action/>
                <Options options = {options}/>
                <AddOptions options = {options}/>

            </div>
         );
    }
}
 
export default IndecisionAp;



```

# FORM EVENT
```javascript
import React, { Component } from 'react';


class IndecisionAp extends Component {
    state = { 
        options: ['One', 'Two']
     }

     handleDeleteOptions = () => {
         this.setState({
             options: []
         })
     }

    handlePick = () => {
         const randonNum = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[randonNum]
         alert(option)
    }

     handleAddOptions = (option) => {
          console.log(option)
          this.setState({
              options: this.state.options.concat([option])
          })
     }
    render() { 
        
        return ( 
            <div>
                <Header 
                title ="Indecision App"
                subTitle = 'Put your life in computer'
                 />
                <Action
                 hasOptions = {this.state.options.length <= 0}
                 handlePick = {this.handlePick}
                 />
                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOptions 
                options = {this.state.options}
                handleAddOptions = {this.handleAddOptions}/>

            </div>
         );
    }
}

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
         );
    }
}
 
class Action extends Component {
  
    handlePick = () => {
       alert('Handle pick was clicked')
    }
    render() { 
        return ( 
            <div>
                <button 
                onClick = {this.props.handlePick}
                disabled = {this.props.hasOptions}
                
                >What Should I do?</button>
        
            </div>
         );
    }
}
 

class Options extends Component {
    
    render() { 
        return (  
            <div>
                <h2>Your total options are: {this.props.options.length}</h2>
               
               { this.props.options.map((option) => <Option key={option} optionText = {option}>{option}</Option>)
               }

               <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}
 
class Option extends Component {
    render() { 
        return ( 
            <div>
                {/* //<p>Option</p> */}
                {this.props.optionText}
            </div>
         );
    }
}
 
class AddOptions extends Component {
    
  handleAddOption = (e) => {
     e.preventDefault();
     const option = e.target.elements.option.value.trim();
      
     this.props.handleAddOptions(option)
     
  }

    render() { 
        return (  
            <div>
                <h3>Add Options</h3>
                <form onSubmit = {this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
 

 
export default IndecisionAp;



```

# Adding item, validation,

```javascript
import React, { Component } from 'react';


class IndecisionAp extends Component {
    state = { 
        options: ['One', 'Two']
     }

     handleDeleteOptions = () => {
         this.setState({
             options: []
         })
     }

    handlePick = () => {
         const randonNum = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[randonNum]
         alert(option)
    }

     handleAddOptions = (option) => {

      if(!option){
          return 'Enter valid item'
      } else if (this.state.options.indexOf(option)> -1) {
           return 'Item exist'
      }
            this.setState({
                options: this.state.options.concat([option])
            })
            console.log(option)
        }
          
         
     
    render() { 
        
        return ( 
            <div>
                <Header 
                title ="Indecision App"
                subTitle = 'Put your life in computer'
                 />
                <Action
                 hasOptions = {this.state.options.length <= 0}
                 handlePick = {this.handlePick}
                 />
                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOptions 
                options = {this.state.options}
                handleAddOptions = {this.handleAddOptions}/>

            </div>
         );
    }
}

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
         );
    }
}
 
class Action extends Component {
  
    handlePick = () => {
       alert('Handle pick was clicked')
    }
    render() { 
        return ( 
            <div>
                <button 
                onClick = {this.props.handlePick}
                disabled = {this.props.hasOptions}
                
                >What Should I do?</button>
        
            </div>
         );
    }
}
 

class Options extends Component {
    
    render() { 
        return (  
            <div>
                <h2>Your total options are: {this.props.options.length}</h2>
               
               { this.props.options.map((option) => <Option key={option} optionText = {option}>{option}</Option>)
               }

               <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}
 
class Option extends Component {
    render() { 
        return ( 
            <div>
                {/* //<p>Option</p> */}
                {this.props.optionText}
            </div>
         );
    }
}
 
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
 

 
export default IndecisionAp;



```
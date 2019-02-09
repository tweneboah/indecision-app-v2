import React, { Component } from 'react';

//Components
import Header from './Header';
import Action from './Action';
import AddOptions from './AddOptions'
import Options from './Options'



class IndecisionAp extends Component {
    state = { 
        options: ['One', 'Two']
     }

     handleDeleteOptions = () => {
         this.setState({
             options: []
         })
     }

     handleDeleteOption = (option) => {
   console.log('hdo', option)
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
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOptions 
                options = {this.state.options}
                handleAddOptions = {this.handleAddOptions}/>

            </div>
         );
    }
}

export default IndecisionAp;



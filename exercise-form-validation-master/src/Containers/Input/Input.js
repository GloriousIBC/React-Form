import React, { Component } from 'react'

export class Input extends Component {

  getClassCSS = () => {
        let cssClass = "Inout InputElement";
        if(this.props.error.status && this.props.error.isTouched) {
            cssClass += "Invalid";
        }
        return cssClass
  }
    
  render() {
    return (
      <>
        <input 
            onChange={this.prop.onChangeInput} 
            value={this.props.value} 
            className={this.getClassCSS()} 
            name={this.props.name} 
            placeholder={this.props.placeholder}/>
            <p className='ErrorMessage'>this.props.error.message</p>
      </>
    )
  }
}

export default Input
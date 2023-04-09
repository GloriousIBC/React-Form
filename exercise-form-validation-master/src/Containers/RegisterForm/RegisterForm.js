import React, { Component } from 'react'
import Input from '../Input/Input'

class RegisterForm extends Component {
  state = {
      fromData: {
        name: {
          value: "",
          validator: {
            minLength: 3,
            maxLength: 6,
            required: true
          },
          error: { status: true, message: "", isTouched: false }
        },
        phoneNumber: {
          value: "",
          validator: {
            minLength: 10,
            maxLength: 10,
          },
          error: { status: true, message: "", isTouched: false }
        },
        email: {
          value: "",
          validator: {
            minLength: 6,
            maxLength: 24,
            required: true
          },
          error: { status: true, message: "" , isTouched: false }
        },
        password: {
          value: "",
          validator: {
            required: true
          },
          error: { status: true, message: "", isTouched: false }
        },
      },
      isFormValid: false,
  }

  checkValue = (value, rules) => {
      let isValid = true;
      let message = ""
      let trimmedValue = value.trim();

      if (rules.maxLength && trimmedValued > rules.maxLengt) {
        isValid = false;
        message = "ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength} ตัว";
      }

      if (rules.minLength && trimmedValued < rules.minLengt) {
        isValid = false;
        message = "ช่องนี้ต้องมีความยาวอน่างน้อย ${rules.minLength} ตัว";
      }
      return { isValid , message };

      if (rules.requierd && trimmedValued.length === 0) {
        isValid = false;
        message = "คุณต้องกรอกช่องนี้";
      }
  }

  onChangeInout = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      const updatedForm = this.state.formData;
      updatedForm[fieldName].value = fieldValue

      let { isValid , message } = this.checkValue(e.target.value, updatedForm[fieldName].validator);
      
      updatedForm[fieldName].error.status = !isValid;
      updatedForm[fieldName].error.message = message;
      updatedForm[fieldName].error.isTouched = true;
      
      let newIsFormValid = true;
      for (let fn in updatedForm) {
        if(updatedForm[fn].validator.required === true) {
          newIsFormValid = !updatedForm[fn].error.status && newIsFormValid;
        }
      }
      
      this.state({
        fromData: updatedForm,
        isFormValid: newIsFormValid,
      })
  }

  onSubmitForm = (e) => {
      e.preventDefault();
      console.log(this.state)
  }
   
  
  render() {
    const { name, phoneNumber, email, password} = this.state.fromData
    const { isFormValid } = this.state; 

    return (
      <div className="RegisterForm">
        <form onSubmit={this.onSubmitForm}>
          <Input 
            onChangeInput={this.onChangeInput} 
            value={name.value} 
            name="name" 
            placeholder="Name" 
            error={name.error}/>
          <Input 
            onChangeInput={this.onChangeInput} 
            value={phoneNumber.value} 
            name="phoneNumber" 
            placeholder="phoneNumber" 
            error={phoneNumber.error}/>
          <Input 
            onChangeInput={this.onChangeInput} 
            value={email.value} 
            name="email" 
            placeholder="email" 
            error={email.error}/>
          <Input 
            onChangeInput={this.onChangeInput} 
            value={password.value} 
            name="password" 
            placeholder="password" 
            error={password.error}/>
          <input onChange={this.onChangeInput} value={phoneNumber.value} className="Input InputElement" name="phoneNumber" placeholder='phoneNumber'/>
          <input onChange={this.onChangeInput} value={email.value} className="Input InputElement" name="email" placeholder='email'/>
          <input onChange={this.onChangeInput} value={password.value} className="Input InputElement" name="password" placeholder='password' type="password"/>
          <button disabled={!isFormValid} htmlFor="submit" className='Button'>Register</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm
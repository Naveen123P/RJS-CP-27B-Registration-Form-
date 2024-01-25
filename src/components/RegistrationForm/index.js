import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    formSubmit: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameError: true})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showLastNameError: true})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.onBlurLastName()
    this.onBlurFirstName()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({formSubmit: true})
    }
    // } else if (firstName === '') {
    //   this.setState({errorMsg1: 'Required'})
    // } else if (lastName === '') {
    //   this.setState({errorMsg2: 'Required'})
    // } else {
    //   this.setState({formSubmit: true})
    // }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  displayForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      formSubmit: false,
      showFirstNameError: false,
      showLastNameError: false,
    })
  }

  firstNameInput = () => {
    const {firstName, showFirstNameError} = this.state
    const showInputError = showFirstNameError ? 'error-class' : ''
    console.log(showInputError)
    return (
      <>
        <label htmlFor="fname" className="name">
          FIRST NAME
        </label>
        <br />

        <input
          type="text"
          id="fname"
          placeholder="First Name"
          value={firstName}
          onChange={this.onChangeFirstName}
          className={showInputError}
          onBlur={this.onBlurFirstName}
        />
        <br />
        {showFirstNameError ? <p className="message-error">Required</p> : ''}
      </>
    )
  }

  lastNameInput = () => {
    const {lastName, showLastNameError} = this.state
    const showInputError = showLastNameError ? 'error-class' : ''
    console.log(showLastNameError)
    return (
      <>
        <label htmlFor="lname" className="name">
          LAST NAME
        </label>
        <br />
        <input
          type="text"
          id="lname"
          placeholder="Last Name"
          value={lastName}
          onChange={this.onChangeLastName}
          className={showInputError}
          onBlur={this.onBlurLastName}
        />
        <br />
        {showLastNameError ? <p className="message-error">Required</p> : ''}
      </>
    )
  }

  render() {
    const {formSubmit} = this.state
    console.log(formSubmit)
    return (
      <div className="bg-container1">
        <h1 className="heading">Registration</h1>
        <div className="bg-container2">
          {!formSubmit && (
            <form onSubmit={this.onSubmitForm}>
              <div className="first-name">{this.firstNameInput()}</div>
              <div className="last-name">{this.lastNameInput()}</div>
              <button type="submit">Submit</button>
            </form>
          )}
          {formSubmit && (
            <div className="bg-container2 successBox">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-img"
              />
              <p className="success-text">Submitted Successfully</p>
              <button type="button" onClick={this.displayForm}>
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

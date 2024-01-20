import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {firstName: '', lastName: '', formSubmit: false}

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({formSubmit: true})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  displayForm = () => {
    this.setState({firstName: '', lastName: '', formSubmit: false})
  }

  render() {
    const {firstName, lastName, formSubmit} = this.state
    return (
      <div className="bg-container1">
        <h1 className="heading">Registration</h1>
        <div className="bg-container2">
          {!formSubmit && (
            <form onSubmit={this.onSubmitForm}>
              <label htmlFor="fname">FAST NAME</label>
              <br />

              <input
                type="text"
                id="fname"
                placeholder="First Name"
                value={firstName}
                onChange={this.onChangeFirstName}
                required
              />
              <br />
              <label htmlFor="lname">LAST NAME</label>
              <br />
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                value={lastName}
                onChange={this.onChangeLastName}
                required
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          )}
          {formSubmit && (
            <div className="successBox">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-img"
              />
              <h1>Submitted Successfully</h1>
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

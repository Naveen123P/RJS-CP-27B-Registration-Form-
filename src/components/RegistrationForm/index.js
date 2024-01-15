import Component from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {formSubmit: false}

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({formSubmit: true})
  }

  render() {
    const {formSubmit} = this.state
    return (
      <div className="bg-container1">
        <h1 className="heading">Registration</h1>
        <div className="bg-container2">
          {!formSubmit && (
            <form onSubmit={this.onSubmitForm}>
              <label htmlFor="fname">FAST NAME</label>
              <input type="text" id="fname" placeholder="First Name" required />
              <label htmlFor="lname">LAST NAME</label>
              <input type="text" id="lname" placeholder="Last Name" required />
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
              <button type="button">Submit Another Response</button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

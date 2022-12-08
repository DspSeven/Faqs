import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import UserDetails from '../UserDetails'

class LoginSection extends Component {
  state = {
    userWebsite: '',
    userName: '',
    userPassword: '',
    searchInput: '',
    usersList: [],
    checkStatus: false,
  }

  // getting website name
  getWebsiteName = event => {
    this.setState({userWebsite: event.target.value})
  }

  // getting user name
  getUserName = event => {
    this.setState({userName: event.target.value})
  }

  // getting password
  getPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  // creating new data of user
  getAllDetails = event => {
    event.preventDefault()
    const {userWebsite, userName, userPassword} = this.state
    const userDetails = {
      id: v4(),
      newUserWebsite: userWebsite,
      newUserName: userName,
      newPassword: userPassword,
    }
    this.setState(prevState => ({
      usersList: [...prevState.usersList, userDetails],
      userWebsite: '',
      userName: '',
      userPassword: '',
    }))
  }

  //
  showPassword = event => {
    console.log(event.target.value)
    const {checkStatus} = this.state
    this.setState({checkStatus: !checkStatus})
  }

  // filtered users passwords
  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  //
  getFilteredPasswords = () => {
    const {usersList, searchInput} = this.state
    return usersList.filter(eachUser =>
      eachUser.newUserWebsite.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  // delete password
  deletedPasswords = id => {
    const {usersList} = this.state
    const deletePassword = usersList.filter(eachUser => eachUser.id !== id)
    console.log(deletePassword)
    this.setState({usersList: deletePassword})
  }

  render() {
    const {userWebsite, userName, userPassword, checkStatus} = this.state
    const searchResults = this.getFilteredPasswords()
    console.log(searchResults)

    return (
      <div className="password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="login-section-container">
          <div className="sub-container">
            <h1 className="heading-one">Add New Password</h1>
            <div>
              <form onSubmit={this.getAllDetails} className="form">
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-logo"
                  />
                  <hr className="h-line" />
                  <input
                    type="text"
                    onChange={this.getWebsiteName}
                    value={userWebsite}
                    placeholder="Enter Website"
                    className="website-input"
                  />
                </div>
                <div className="username-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-logo"
                  />
                  <hr className="h-line" />
                  <input
                    type="text"
                    onChange={this.getUserName}
                    value={userName}
                    placeholder="Enter Username"
                    className="website-input"
                  />
                </div>
                <div className="password-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website-logo"
                  />
                  <hr className="h-line" />
                  <input
                    type="password"
                    onChange={this.getPassword}
                    value={userPassword}
                    placeholder="Enter Password"
                    className="website-input"
                  />
                </div>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-image"
          />
        </div>
        <div className="password-logo-container">
          <div className="your-password-container">
            <h1 className="heading-two">
              Your Passwords{' '}
              <span className="span-one">{searchResults.length}</span>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                onClick={this.getFilteredPasswords}
                className="search-logo"
              />
              <hr />
              <input
                type="search"
                onChange={this.getSearchInput}
                className="search-input"
                placeholder="search"
              />
            </div>
          </div>
          <div className="check-container">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.showPassword}
              className="check-input"
            />
            <label htmlFor="checkbox" className="show-password">
              Show Passwords
            </label>
          </div>
          {searchResults.length === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords"
              />
              <p className="para">No Passwords</p>
            </div>
          ) : (
            <ul className="unordered-list">
              {searchResults.map(eachUser => (
                <UserDetails
                  userDetails={eachUser}
                  key={eachUser.id}
                  checkStatus={checkStatus}
                  deletedPasswords={this.deletedPasswords}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default LoginSection

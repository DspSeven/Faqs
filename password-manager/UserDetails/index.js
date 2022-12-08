import './index.css'

const UserDetails = props => {
  const profileColors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]

  const profilePicColors = profileColors[Math.floor(Math.random()) * 10]
  console.log(profilePicColors)
  //
  const {userDetails, checkStatus, deletedPasswords} = props
  const {newUserWebsite, newUserName, newPassword, id} = userDetails
  const firstLetterInWebsite = newUserWebsite.slice(0, 1)

  const replacePassword = checkStatus ? (
    <p className="user-name-two">{newPassword}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="image"
    />
  )

  //

  const deletePassword = () => {
    deletedPasswords(id)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        className="button-two"
        style={{background: {profilePicColors}}}
      >
        {firstLetterInWebsite}
      </button>
      <div>
        <div className="hi-five">
          <div className="user-details">
            <p className="website">{newUserWebsite}</p>
            <p className="user-name">{newUserName}</p>
            {replacePassword}
          </div>
          <button
            type="button"
            onClick={deletePassword}
            className="delete-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-logo"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default UserDetails

import notifi from "../images/notification.png"
import "../styles/account.css"

function Notification() {
  return (
    <div>
      <div className='account'>
        <img src={notifi} alt=''/>
        <label>No Notification Yet</label><br/>
        <button>Continue Shopping</button>
      </div>
    </div>
  )
}

export default Notification

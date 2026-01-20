import './template.css'

export const MenuTemplate = () => {
  return (
    <div className="menu">
      <div className="menu__chat">
        <span className="new__chat">
          <a>New chat</a>
        </span>
      </div>
      <div className="menu__chats">
        <span className="chats">Your chats </span>
      </div>
    </div>
  )
}

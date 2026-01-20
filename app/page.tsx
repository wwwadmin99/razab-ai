import { H1 } from '@/app/components/title/title'
import { Button } from '@/app/components/ui/button/button'
import { Header } from '@/app/components/header/header'
import { MenuTemplate } from '@/app/components/template/template'

import './page.css'
import { Input } from '@/app/components/ui/input/input'

const Home = () => {
  return (
    <div className="container">
      <div className="content__menu">
        <MenuTemplate></MenuTemplate>
      </div>
      <div className="content">
        <div className="header">
          <Header version="1.1"></Header>
        </div>
        <div className="items">
          <div className="item">
            <div className="title">
              <H1>How can I help?</H1>
            </div>
            <div className="chats"></div>
            <div className="input__chat">
              <form className="form">
                <Input className="input" placeholder="Скажите свою проблему" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

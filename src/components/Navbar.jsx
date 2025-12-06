import React from 'react'
import dayjs from 'dayjs'
import { navIcons, navLinks } from '../constants'

const Navbar = () => {
  return (
      <nav>
          <div>
              <img src="./public/images/logo.svg" alt="logo" />
              <p className='font-bold'>Sarthak's Portfolio</p>
              <ul>
                  {navLinks.map((item)=>{
                      return(
                          <li key={item.id}>{item.name}</li>
                      )
                  })}
              </ul>
          </div>
          <div>
              <ul>
                  {navIcons.map((item)=>{
                      return(
                        <li key={item.id}>
                            <img src={item.img} alt={item.name} className='icon-hover' />
                        </li>
                      )
                  })}
              </ul>
              <time dateTime="">{dayjs().format('ddd MMM D h:mm A')}</time>
          </div>
    </nav>
  )
}

export default Navbar
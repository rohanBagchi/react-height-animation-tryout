import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export const Card = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>

      <div className="card">
        <CSSTransition
          in={!isCollapsed}
          timeout={300}
          classNames="content"
        >
          <div className="base-style">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae labore voluptates nihil, maxime voluptate consequatur! Vero tenetur similique ad veniam amet delectus quae quod tempore perspiciatis! Esse, vitae earum?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae labore voluptates nihil, maxime voluptate consequatur! Vero tenetur similique ad veniam amet delectus quae quod tempore perspiciatis! Esse, vitae earum?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae labore voluptates nihil, maxime voluptate consequatur! Vero tenetur similique ad veniam amet delectus quae quod tempore perspiciatis! Esse, vitae earum?
          </div>
        </CSSTransition>
      </div >
      <button onClick={() => setIsCollapsed(prev => !prev)} style={{ display: 'block' }}>
        {isCollapsed ? 'Show' : 'Hide'}
      </button>
    </div>
  )
}

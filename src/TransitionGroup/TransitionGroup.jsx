import React, { useState } from 'react'
import {
  CSSTransition,
  TransitionGroup as TransitionGroupLib,
} from 'react-transition-group'
import './TransitionGroup.css'

const CollapsedContent = (props) => {
  return (
    <div className="collapsed" {...props}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam dolores eius ab laboriosam excepturi, consectetur consequuntur maiores at voluptas ipsam cum reiciendis assumenda tenetur natus in omnis deleniti.
    </div>
  )
}

const ExpandedContent = (props) => {
  return (
    <div className="expanded" {...props}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam dolores eius ab laboriosam excepturi, consectetur consequuntur maiores at voluptas ipsam cum reiciendis assumenda tenetur natus in omnis deleniti.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam dolores eius ab laboriosam excepturi, consectetur consequuntur maiores at voluptas ipsam cum reiciendis assumenda tenetur natus in omnis deleniti.
    </div>
  )
}

export const TransitionGroup = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div>

      <button onClick={() => setIsCollapsed(prev => !prev)} style={{ display: 'block' }}>
        {isCollapsed ? 'Show' : 'Hide'}
      </button>
      <div className="card">
        <TransitionGroupLib>
          {isCollapsed && (
            <CSSTransition
              key='collapsed'
              timeout={200}
              classNames="collapsed"
            >
              <CollapsedContent />
            </CSSTransition>
          )}
          {!isCollapsed && (
            <CSSTransition
              key='expanded'
              timeout={500}
              classNames="expanded"
            >
              <ExpandedContent />
            </CSSTransition>
          )}
        </TransitionGroupLib>
      </div>
    </div>
  )
}

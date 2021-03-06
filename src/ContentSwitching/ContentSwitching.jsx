import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

/**
 * Expand animation
 *
 * 1. Render expanded content
 * 2. Animate height
 *
 * Collapse animation
 *
 * 1. Render collapsed content
 * 2. Animate height
 */

const CollapsedContent = (props) => {
  return (
    <div className="collapsed" {...props}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p>
        Asperiores iste magnam dolores eius ab laboriosam excepturi, consectetur consequuntur maiores at voluptas ipsam cum reiciendis assumenda tenetur natus in omnis deleniti.
      </p>
    </div>
  )
}

const ExpandedContent = (props) => {
  return (
    <div className="expanded" {...props}>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      </p>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam dolores eius ab laboriosam excepturi, consectetur consequuntur maiores at voluptas ipsam cum reiciendis assumenda tenetur natus in omnis deleniti.
      </p>
    </div>
  )
}

export const ContentSwitching = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div>
      <div className="card">
        <CSSTransition
          in={isAnimating}
          timeout={200}
          classNames="content-switching"
          onEntering={() => {
            setIsCollapsed(false)
          }}
          onExited={() => {
            setIsCollapsed(true)
          }}
        >
          <div className="base">
            {isCollapsed && <CollapsedContent />}
            {!isCollapsed && <ExpandedContent />}
          </div>
        </CSSTransition>
      </div >
      <button onClick={() => setIsAnimating(prev => !prev)} style={{ display: 'block', marginTop: '10px' }}>
        {isCollapsed ? 'Show' : 'Hide'}
      </button>
    </div>
  )
}

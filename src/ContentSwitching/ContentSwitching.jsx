import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export const ContentSwitching = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>

      <div className="card">
        <CSSTransition
          in={!isCollapsed}
          timeout={300}
          classNames="content"
        >
          <div className="ContentSwitching--base-style">
            {isCollapsed && (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae labore voluptates nihil, maxime voluptate consequatur! Vero tenetur similique ad veniam amet delectus quae quod tempore perspiciatis! Esse, vitae earum?
              </>
            )}
            {!isCollapsed && (
              <>
              In the late 1920s, American automaker General Motors (GM) introduced four brands to supplement its five existing brands of passenger cars.

              In descending order of price, these were LaSalle, to supplement Cadillac; Viking (example pictured), to supplement Oldsmobile; Marquette, to supplement Buick; and Pontiac, to supplement Oakland. The brands were introduced in an effort to fill gaps in GM's pricing ladder and produce cars that were cheaper to make for its existing divisions.

              The Great Depression resulted in the failure of most of these brands. Viking and Marquette were each discontinued within two years of their introductions, and LaSalle after slightly more than a decade.
              </>
            )}
          </div>
        </CSSTransition>
      </div >
      <button onClick={() => setIsCollapsed(prev => !prev)} style={{ display: 'block' }}>
        {isCollapsed ? 'Show' : 'Hide'}
      </button>
    </div>
  )
}

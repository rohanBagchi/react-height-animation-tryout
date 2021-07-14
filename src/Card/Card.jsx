import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './style.css'

export const Card = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="card">
            <div className="content">
                <>
                    <CSSTransition
                        in={isCollapsed}
                        timeout={300}
                        classNames="collapsed-content"
                        unmountOnExit
                    >
                        <div>

                            Collapsed!!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae labore voluptates nihil, maxime voluptate consequatur! Vero tenetur similique ad veniam amet delectus quae quod tempore perspiciatis! Esse, vitae earum?
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={isCollapsed === false}
                        timeout={300}
                        classNames="expanded-content"
                        unmountOnExit
                    >
                        <div>

                            Expanded!!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi delectus aspernatur fugiat laudantium pariatur rem tempora quia natus nobis harum alias, optio consectetur temporibus, doloremque reprehenderit adipisci voluptates. Atque rerum id dolorem. Consequuntur dignissimos suscipit odit illum officia praesentium reiciendis iusto necessitatibus voluptas dolore nam, voluptate ab porro rerum.
                        </div>
                    </CSSTransition>
                </>
            </div>

            <button onClick={() => setIsCollapsed(prev => !prev)}>
                {isCollapsed ? 'Show more' : 'Show less'}
            </button>
        </div >
    )
}

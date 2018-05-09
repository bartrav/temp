import React from 'react';
import { push as Menu } from 'react-burger-menu'

export default class Example extends React.Component {
    render () {
        let sidebarStyle = {
            backgroundColor: 'black',
        }
        return (
            <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" } 
                      outerContainerId={ "outer-container" } 
                      width={ '20%' } 
                      style={sidebarStyle}
                      />
                <main id="page-wrap">

                </main>
            </div>
        );
    }
}

/* 
slide
stack
elastic
bubble
push
pushRotate
scaleDown
scaleRotate
fallDown
reveal
*/
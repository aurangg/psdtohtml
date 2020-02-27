import React from 'react';
import './toolbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
                <a href="/"><img src="assets/logo.png" alt=""/></a>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li style={{borderRight:'1px solid #ebebeb'}}>
                        <a href="/"><img id="contact" src="assets/contact_text.png" alt="menu" /></a>
                    </li>
                    <li>
                        <a href="/"><img id="menu" src="assets/menu_text.png" alt="menu" /></a>
                    </li>
                </ul>
            </div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default toolbar;
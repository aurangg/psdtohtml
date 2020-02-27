import React from 'react';
import './sidedrawer.css';
const SideDrawer = props => {
    let drawerClasses = "side_drawer"
    if(props.show) {
        drawerClasses = "side_drawer open"
    }
    return(
        <nav className={drawerClasses}>
            <div className="side_drawer_img">
                <img className="img" src="assets/logo.png" alt="logo" />
            </div>
        <ul>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Menu</a></li>
        </ul>
    </nav>
    )


    //Other Way of Adding Class using PUSH Method
        // let drawerClasses = ['side_drawer'];
        // if(props.show)
        // {
        //     drawerClasses = ['side_drawer', 'open']
        // }

        // return(
        //     <nav className={drawerClasses.join(' ')}>
        //         //Other Code 
        //     </nav>
        // )
}


export default SideDrawer;
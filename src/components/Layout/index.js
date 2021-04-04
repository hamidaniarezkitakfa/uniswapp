import React from 'react';
import Header from '../Header';
import Drawer from '../actualite/drawer';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
      <Drawer/>
        {props.children}
    </div>
   )

 }

export default Layout
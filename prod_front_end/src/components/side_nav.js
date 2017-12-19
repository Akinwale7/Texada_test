import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class SideNav extends Component{
  render(){
    return(
      <div className="side-nav">
         <Link to="/">Home</Link>
         <Link to="/upload">Upload File</Link>
         <Link to="/prod/new">Add New</Link>
         <Link to="/fileexport">Export file</Link>
         <Link to="">Contact</Link>
      </div>
    )
  }
}

export default SideNav;
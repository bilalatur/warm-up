import React from 'react';
import {Switch,Route,NavLink} from 'react-router-dom';

//Components
import EditForm from './EditForm'

function Header(){
    return (
        <div className="header-div">
           <NavLink exact to='/' className="navlink-header navlink-home">Home</NavLink>
           <NavLink exact to='/edit' className="navlink-header">Edit Form</NavLink>
            
            <Switch>
                <Route exact path="/" />
                <Route exact path="/edit" component={EditForm}/>
            </Switch>
        </div>
    )
}

export default Header;

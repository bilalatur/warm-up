import React from 'react';
import {Switch,Route,NavLink} from 'react-router-dom';

//Components
import CreateForm from './CreateForm'
import Home from './Home'

function Header(){
    return (
        <div className="header-div">
           <NavLink exact to='/' className="navlink-header navlink-home">Home</NavLink>
           <NavLink exact to='/create' className="navlink-header">Crear publicación</NavLink>
            
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/create" component={CreateForm}/>
            </Switch>
        </div>
    )
}

export default Header;
import './NavbarStyles.css';
import {Component} from 'react';
import { MenuItems } from '../Navbar/MenuItems';
import { Link } from 'react-router-dom';


class Navbar extends Component{
    state = {clicked:false};
    handleclick= () =>{
        this.setState({clicked: !this.state.clicked})
    }
      render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>PathwaysPast</h1>
                <div className='menu-icon' onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                        )
                    })}
                    
                </ul>
                <button><Link to="/signup" style={{textDecoration:"none"}} className='d' >SignUp</Link></button>

            </nav>
        )
      }
}
export default Navbar
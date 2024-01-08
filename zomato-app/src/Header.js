import React ,{Component} from 'react'
import {Link} from "react-router-dom"
import './Header.css';
const url="http://localhost:9000/auth/userinfo"

//const navi=useNavigate();

export default class Header extends Component{
    constructor() {
        super()
        this.state = {
          userData: ''
        }
      }
    
      handleLogout = () => {
        sessionStorage.setItem("loginStatus", "loggedOut")
        sessionStorage.setItem("userInfo", "")
        sessionStorage.removeItem("ltk")
        sessionStorage.setItem("userData", "")
        sessionStorage.setItem("token", "")
        this.setState({ userData: "" })
        
       // this.props.history.push("/")
        
      }
  
        conditionHead=()=>{
            //console.log(this.state.userData,"userdata-1")
            if(this.state.userData.name){
             const user=this.state.userData;
             sessionStorage.setItem("LoginStatus","LoggedIn");
             sessionStorage.setItem("userData",JSON.stringify(user));
             return(
                <>
                 <Link className="btn btn-outline-info me-2 ms-2" to="/">HI, {user.name}</Link>
                 <Link className="btn btn-outline-secondary me-2 ms-2" to="/"   onClick={this.handleLogout}>Log Out</Link>
          </> 
             )
            }else{
                return(
                    <>
                    <Link className="btn btn-outline-info me-2 ms-2" to="/login">login</Link>
            <Link className="btn btn-outline-secondary" to="/register">register</Link> 
            </>
                )
            }
        } 

    render(){
        return(
            
                  <header className="container-fluid p-2 d-flex justify-content-between flex-wrap bg-dark">
                    <div id="brand"
                    >Zomato</div>
           <div className="mt-1">
            <Link className="btn btn-outline-primary " to="/">Home</Link>
            {this.conditionHead()}
          
            
        </div>
             
                </header>
            
        )
    }

    componentDidMount=()=>{

        fetch(url, {
          method: 'GET', headers: {
            "x-access-token": sessionStorage.getItem("token")
          }
        })
          .then((res) => res.json())
          .then((data) => {
           // console.log(data)
            this.setState({ userData: data })
           // console.log(this.state.userData,"userdata")
          })
    
      }

}



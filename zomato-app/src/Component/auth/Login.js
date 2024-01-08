import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';



import Header from '../../Header';
const lurl="http://localhost:9000/auth/login"



class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: "",
            message:""
        }
    }

 
handleChange=(e)=>{
    console.log(e)
   // const name_1=e.target.value;
   // console.log(name_1)
    //this.setState({name:name_1})
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name,'jjj', e.target.value ,"hhh",this.state.email)
    
}

handleSubmit = () => {
    //method POST
    // body : data
    // headers : json
    fetch(lurl,
        {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data,"login")
        console.log(data.auth)
    sessionStorage.setItem("msg",data.auth)
if(data.auth === false){
    console.log("in")
    this.setState({message:data.auth}
        )
        console.log(this.state.message)
}
else{
    console.log("out")
    sessionStorage.setItem("token",data.token)
    this.props.history.push("/")
}

})
        console.log("reg")
}
   
    render() {
        return (
            <>
            <Header/>
            <div className="container mb-4">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3>Login</h3>
                        </div>
                        <div className="panel-body">
                            <h2 style={{ color: "red" }}>{this.state.message}</h2>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="email" className="control-label">
                                        Email
                                    </label>
                                    <input
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="password" className="control-label">
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-outline-success mt-3 mb-3" onClick={this.handleSubmit}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
      <div className="text-center">
        <p>Not a member? <Link to="/register">Register</Link></p>
       
      </div>

      <Footer/>
    </>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
const rurl="http://localhost:9000/auth/register"


class Register extends Component {
    constructor(){
        super()
        this.state={
            name: "",
            email: "",
            phone: "",
            password: ""
        }
    }

 
handleChange=(e)=>{
    console.log(e)
   // const name_1=e.target.value;
   // console.log(name_1)
    //this.setState({name:name_1})
    this.setState({ [e.target.id]: e.target.value })
    console.log(e.target.id,'jjj', e.target.value ,"hhh",this.state.name)
    
}

handleSubmit = () => {
    //method POST
    // body : data
    // headers : json
    fetch(rurl,
        {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(this.props.history.push("/login"))
}

    render() {
        return (
            <>
            <Header />
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Register</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="fname" className="control-label">
                                    FirstName
                                </label>
                                <input
                                    className="form-control"
                                    id="name"
                                    value={this.state.name}
                                    
                                   
                                    onChange={this.handleChange}
                                />
                               
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email" className="control-label">
                                    Email
                                </label>
                                <input
                                    className="form-control"
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone" className="control-label">
                                    Phone
                                </label>
                                <input
                                    className="form-control"
                                    id="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="password" className="control-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <button className="btn btn-outline-success mt-3 mb-3 pe-5 ps-5 " onClick={this.handleSubmit}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        );
    }


}

export default Register;
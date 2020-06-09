
import React from 'react';
//import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

        // <div>
        //   <form onSubmit={(event) => this.props.login(event)}>
        //     <label>
        //       Email:
        //       <input type="text" name="email" />
        //     </label>
        //     <label>&nbsp;&nbsp;</label>
        //     <label>
        //       Password:
        //       <input type="text" name="password" />
        //     </label>
        //     <label>&nbsp;&nbsp;</label>
        //     <input type="submit" value="Log In"/>
        //   </form>
        // </div>



        <form onSubmit={(event) => this.props.login(event)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>





        );
    }


};

export default Login;
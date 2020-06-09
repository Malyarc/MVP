import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

          <form onSubmit={(event) => this.props.sendRegistration(event)}>
          <h3>Sign Up</h3>

          <div className="form-group">
              <label>First name</label>
              <input type="text" name='firstname' className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" name='lastname' className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" name='email' className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" name='password' className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
              <a onClick = {this.props.logIn} href='#'>Already registered? Sign in</a>
          </p>
      </form>




        // <div>
        //   Sign Up
        //   <form onSubmit={(event) => this.props.sendRegistration(event)}>
        //   <label>
        //       First Name: &nbsp;
        //       <input type="text" name="firstname" />
        //     </label>
        //     <br></br>
        //     <label>
        //       Last Name: &nbsp;
        //       <input type="text" name="lastname" />
        //     </label>
        //     <br></br>

        //     <label>
        //       Email: &nbsp;
        //       <input type="text" name="email" />
        //     </label>
        //     <br></br>

        //     <label>
        //       Password: &nbsp;
        //       <input type="text" name="password" />
        //     </label>
        //     <br></br>

        //     <input type="submit" value="Submit"/>
        //   </form>
        // </div>

        );
    }


};

export default SignUp;
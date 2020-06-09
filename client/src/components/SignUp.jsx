import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

        <div>
          Sign Up
          <form onSubmit={(event) => this.props.sendRegistration(event)}>
          <label>
              First Name: &nbsp;
              <input type="text" name="firstname" />
            </label>
            <br></br>
            <label>
              Last Name: &nbsp;
              <input type="text" name="lastname" />
            </label>
            <br></br>

            <label>
              Email: &nbsp;
              <input type="text" name="email" />
            </label>
            <br></br>

            <label>
              Password: &nbsp;
              <input type="text" name="password" />
            </label>
            <br></br>

            <input type="submit" value="Submit"/>
          </form>
        </div>

        );
    }


};

export default SignUp;
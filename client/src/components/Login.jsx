import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

        <div>

          <form onSubmit={(event) => this.props.login(event)}>

            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>&nbsp;&nbsp;</label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <label>&nbsp;&nbsp;</label>
            <input type="submit" value="Log In"/>
          </form>
        </div>

        );
    }


};

export default Login;
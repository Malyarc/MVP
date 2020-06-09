import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

          <div>Welcome, {this.props.user.firstname} {this.props.user.lastname}</div>

        );
    }


};

export default Welcome;
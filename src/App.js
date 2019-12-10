import React,{ Component } from 'react';
import fire from './config/base';
import Home from './components/home';
import Login from './components/login';

class App extends Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    render() {
        return (
            <div>{this.state.user ? (<Home />) : (<Login />)}</div>
            
        );
    }
}

export default App;
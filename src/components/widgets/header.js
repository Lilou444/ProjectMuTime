import React, { Component } from 'react';
import fire from '../../config/base';
import "../../App.css";


class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        console.log("logging out");
        fire.auth().signOut();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="/">MuTime</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Accueil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/favorites">Favoris</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class="nav-link active" id="btnLogout" onClick={this.logout} href="#" aria-disabled="true">
                        <i class="fas fa-sign-out-alt mr-1"></i>
                        Logout
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header;

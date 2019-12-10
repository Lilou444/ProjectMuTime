import React , {Component} from 'react';
import Header from './widgets/header';
import * as actions from './action/index';


class Home extends Component {
    // componentDidMount(){
    //     actions.getAlbums().then(item => console.log(item));
    // }
    render(){
        return(
            <div className="container">
                <div class="row mt-4">
                    <div class="col-md-10 mx-auto">
                        <Header/>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div className="card border-light">
                                    <img scr="" alt="" className="card-img-top"/>
                                    <div className="card-body">
                                        <span className="text-primary"> Beyonce</span>
                                        <div className="card-title">
                                            album title
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="links">
                                            <a href="#"><i className="fas fa-info text-danger"></i></a>
                                            <a href="#"><i className="fas fa-star text-danger"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;

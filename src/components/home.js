import React,{Component} from 'react';
import Header from './widgets/header';
import Search from './searchBar/searchbar';
import * as actions from './action/index';
import {Link} from 'react-router-dom';
import { functionTypeAnnotation } from '@babel/types';
import swal from 'sweetalert';




class Home extends Component {
    state = {
        albums:[]
    }
    componentDidMount(){
        actions.getAlbums().then(item => this.setState({
            albums : item
        }));
    }
    searchAlbums = (term) => {
        actions.getAlbums(term).then(item => this.setState({
            albums : item
        }));
    }
    addToFavorites = (album) => {
        let oldFavorites = JSON.parse(localStorage.getItem('favorites')) ||  [];
        if(this.checkAlbum(oldFavorites,album)){
            swal({
                title : 'Album existe !',
                text : 'Album déjà en favoris',
                icon :  'warning'
            });
            return false;
        }
        oldFavorites.push(album);
        let favorites = oldFavorites;
        localStorage.setItem('favorites',JSON.stringify(favorites));
        swal({
            title : 'Album ajouté !',
            text : 'Album déjà ajoute en favoris',
            icon :  'success'
        });
    }
    checkAlbum= (albums,album) => {
        let found = albums.some(function(item){
            return item.album.id === album.album.id;
        });
        return found;
    }

    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ?
            albums.map((item,index) =>(
                <div key={index} className="col-md-4 mb-2">
                    <div className="card border-danger">
                        <img src={item.album.cover_big} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <span className="text-primary"> {item.artist.name}</span>
                            <div className="card-title">
                                {item.title}
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="links">
                                <Link to={`/details/${item.album.id}`} className="link"><i className="fas fa-info text-danger"></i></Link>
                                <a onClick={() => this.addToFavorites(item)} className="link" ><i className="fas fa-star text-danger"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        : null; 
    }
    render(){
        console.log(this.state);
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header/>
                        <Search searchAlbums={this.searchAlbums}/>
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;

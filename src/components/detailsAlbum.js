import React,{Component} from 'react';
import * as actions from './action/index';
import Header from './widgets/header';




class DetailsAlbum extends Component {
    state = {
        album : '',
        tracks : []
    }
    componentDidMount(){
        actions.getAlbum(this.props.match.params .id).then( album => {
            this.setState({
                album,
                tracks : album.tracks.data
            })
        });
    }
    renderAlbum = () => {
            const {album} = this.state;
                return (
                    <div  className="col-md-4 mb-2">
                        <div className="card border-danger">
                            <img src={album.cover_big} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <span className="text-primary"> {album.release_date}</span>
                                <span className="text-primary"> {album.artist.name}</span>
                                <div className="card-title">
                                    {album.title}
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    render(){
        console.log(this.state);
        return(
            <div className="">
                details album
            </div>
        )
    }



}


export default DetailsAlbum ;
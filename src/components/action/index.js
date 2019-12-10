import axios from 'axios';


const API_KEY= 'ecf1597ddamsh6830af79cc9fddfp1b3554jsn54c899d33174';

const request = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 30000,
    headers: {'x-rapidapi-key' : API_KEY}
})

export function getAlbums(search = 'beyonce'){
    const albums = request.get(`search?q=${search}`)
        .then(response => response.data.data)
        .catch(error => console.log(error));
    return albums;
}

export function getAlbum(id){
    const album = request.get(`album/${id}`)
                .then(response => response.data)
                .catch(error => console.log(error));
    return album;
}

export function getFavoritesAlbums(){
    const albums = localStorage.getItem('favorites');
    return albums;

}
import axios from 'axios';


const API_KEY= 'ecf1597ddamsh6830af79cc9fddfp1b3554jsn54c899d33174';

const request = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 30000,
    headers: {'x-rapidapi-key' : API_KEY}
})

export function getAlbums(search = 'eminem'){
    const albums = request.get(`search?q=${search}`)
        .then(response => response.data.data)
        .catch(error => console.log(error));
}
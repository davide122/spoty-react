
import { headers } from '../../utilities/constants';
import { changesongs } from '../reducers';
const GetSongs = async()=>{
 
        
 console.log("hello")
const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=drake', {headers: headers})
console.log(response)
return await response.json();


}

export  {GetSongs}
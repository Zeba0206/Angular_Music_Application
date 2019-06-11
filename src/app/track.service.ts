import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './track';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
 
  public track;
  public count=100;
 

  constructor(private http:HttpClient) { }


getTrendMusic():any{

  return this.http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0166f9d49b2e57dfc0894f62078ee6b7&format=json')
}

getMusic(value):any{
  var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=0166f9d49b2e57dfc0894f62078ee6b7&track=${value}&format=json`;
  return this.http.get(url);
}

addtoWishList(music):Observable<any>{
  console.log("addedtowishlist",music);
  this.count++;
  this.track = new Track(this.count,music.name,music.url);

  return this.http.post('http://localhost:8070/api/v1/track',this.track, {responseType: 'text'});
}

getWishList():Observable<any>{
 return this.http.get<any>('http://localhost:8070/api/v1/track');
}


removeWishList(id){
  console.log("delete working");
 return this.http.delete(`http://localhost:8070/api/v1/track/${id}`,id);  
}

getDetails(artist,name): any{

console.log(artist,name)
  console.log("details fetched")
  var url=`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=0166f9d49b2e57dfc0894f62078ee6b7&artist=${artist}&track=${name}&format=json`;
  return this.http.get(url);
}

}
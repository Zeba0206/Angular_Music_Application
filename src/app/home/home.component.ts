import { Component, OnInit } from '@angular/core';
import { TrackService } from "../track.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    musicArray: any= [];
     constructor(private trackService:TrackService, private route: Router ) { }
    
     ngOnInit() {
       this.trackService.getTrendMusic().subscribe(data =>

        this.musicArray=data.tracks.track
        );
       }

       click(value){
        
        this.route.navigateByUrl("/result/"+value);
        console.log("This Works");
             }

       addFavourite(music): any{
        console.log("add fav");
        this.trackService.addtoWishList(music).subscribe(console.log, err => {
          console.log(err, "is this getting executed")
        })
        console.log(music);
        }

        getDetails(music){
          console.log(music);
          console.log(music.name, music.artist.name);
          this.route.navigateByUrl("/details/"+music.name+"/"+music.artist.name);
        }

      }
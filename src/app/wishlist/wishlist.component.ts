import { Component, OnInit } from '@angular/core';
import { TrackService } from "../track.service";
import { Track } from '../track';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  track:Track[]

  constructor(private trackService:TrackService) { }

  ngOnInit() {
    this.trackService.getWishList().subscribe((data: any) => {
      this.track = data
    }) 
  }

  removeFavourite(id): any{
    console.log("remove fav");
    this.trackService.removeWishList(id).subscribe()
    }

}

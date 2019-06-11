import { Component, OnInit } from '@angular/core';
import { TrackService } from "../track.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private trackService : TrackService, private route: ActivatedRoute, private location: Location, private router:Router) { }
  musicArray:any=[];
  
  ngOnInit() {
    this.getMusic();
  }

  getMusic(): void{
    const search= this.route.snapshot.paramMap.get('id');
    this.trackService.getMusic(search).subscribe(data => {
    console.log("it works");

    this.musicArray=data.results.trackmatches.track;
  });
}
}

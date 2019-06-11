import { Component, OnInit } from '@angular/core';
import { TrackService } from "../track.service" ;
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private trackService : TrackService, private route: ActivatedRoute, private router :Router) { }

  music:any;

  ngOnInit() {
    this.getDetails();
  }


  getDetails(): void {

    const artist = this.route.snapshot.paramMap.get('id1');
    const name = this.route.snapshot.paramMap.get('id2');

    console.log(artist,name);

     this.trackService.getDetails(artist,name).subscribe(data => {
      console.log("This works");
      this.music=data;
      console.log(this.music)
      console.log(data);
    });
}

}

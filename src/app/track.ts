export class Track{
    trackId:number;
    trackName: String;
    trackComments:String;

    constructor(trackId,trackName,trackComments){
        this.trackId=trackId;
        this.trackName=trackName;
        this.trackComments=trackComments;
    }
}
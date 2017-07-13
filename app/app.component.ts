import { environment } from './../environments/environment';
import { SongList } from './../assets/data/songlist.data.';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
    if(!localStorage.getItem('songList')){
      localStorage.setItem('songList', JSON.stringify(SongList));
    }

    
    
  }
}



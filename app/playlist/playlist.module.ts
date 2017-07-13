import { CommonModule } from '@angular/common';
import { SongComponent } from './song/song.component';
import { NgModule } from '@angular/core';
import {FormsModule  } from '@angular/forms';
import { PlaylistComponent } from './playlist.component';



@NgModule({
    imports: [
        CommonModule,//common built-in directive, ngIf, etc
        FormsModule //for template drive form approach
    ],
    exports: [
        FormsModule, //we export this so that in app.module.ts we don't have to import it again
        CommonModule
    ],
    declarations: [
        PlaylistComponent,
        SongComponent
        
],
    providers: [],
})
export class PlaylistModule { }

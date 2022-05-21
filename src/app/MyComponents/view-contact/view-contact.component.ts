import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { directory } from 'src/app/directory';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  @Input() dir: directory = new directory;
  @Output() dirDelete:EventEmitter<directory>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(dir: directory){
    
    this.dirDelete.emit(dir);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import { directory } from 'src/app/directory';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() addContact:EventEmitter<directory>=new EventEmitter();
  constructor() { }

  directory:any[]=[];
  ngOnInit(): void {
  }

  onFormSubmit(f: NgForm):void{
    
    const directory={
      id:0,
      name: <string> f.controls['name'].value,
      cnumber: <string> f.controls['cnumber'].value
    }
    
    this.addContact.emit(directory);
    
  }

}

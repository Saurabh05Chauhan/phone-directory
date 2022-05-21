import { Component, OnInit } from '@angular/core';
import {directory} from '../../directory';
@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.css']
})
export class PhoneDirectoryComponent implements OnInit {

  directory: directory[] = [
  
  ];
  constructor() { 
    
    let localItem= localStorage.getItem('subscriberList')
        if(localItem!=null){
          let contactlist= JSON.parse(localItem);
          this.directory= contactlist
        }
        else{
         this.directory=[];
  }
  }

  ngOnInit(): void {
    
  }

  deleteDirectory(directory: directory){
    
    const index= this.directory.indexOf(directory);
    this.directory.splice(index,1);
    localStorage.setItem('subscriberList',JSON.stringify(this.directory));
  }

  addContact(directory:directory){
    
   
  var id=0;
  if(this.directory.length==0){
    id=1;
  }
  else{

   id= this.directory[this.directory.length-1].id+1;
  }
  directory.id=id;
  
  this.directory.push(directory);
  localStorage.setItem('subscriberList',JSON.stringify(this.directory));
  }
}

import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  readonly url: string = "ws://localhost:3000"
  constructor(){
    this.socket = io(this.url);
  }
  

  listen(eventname:string){
    return new Observable((subscriber) =>{
      this.socket.on(eventname, (data:any)=>{
        subscriber.next(data);
      })
    })
  }

}
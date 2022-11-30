import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  //ws://localhost:3000
  readonly url: string = "ws://3000-sesifredodev-eveserver-9evsikiwgqf.ws-eu77.gitpod.io/"
  constructor(){
    this.socket = io(this.url);
  }
  
  send(command:string){
    this.socket.on()
  }
  listen(eventname:string){
    return new Observable((subscriber) =>{
      this.socket.on(eventname, (data:any)=>{
        subscriber.next(data);
      })
    })
  }

}
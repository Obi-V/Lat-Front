import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  username = 'username';
  message = '';
  messages: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    var pusher = new Pusher('6410227d2f95a0b3c3a8', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      this.messages.push(data);
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(() => this.message = '');
  }
}


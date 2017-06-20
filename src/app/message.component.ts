import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component
({
    selector : 'messages',
    template : `
        <h2>Messages</h2>
        <ul>
            <li *ngFor="let m of messages">
                {{ m }}
            </li>
        </ul>
        `
})

export class MessageComponent
{
    messages;

    constructor(messageService: MessageService){
        this.messages = messageService.getMessage();
    }
}
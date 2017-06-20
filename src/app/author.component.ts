import { Component } from '@angular/core';
import { AuthorsService } from './author.service';

@Component
({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        <ul>
            <li *ngFor="let a of authors"> 
                {{ a }}
            </li>
        </ul>
        `
})

export class AuthorsComponennt
{
    authors;

    constructor(authorsService:AuthorsService)
    {
        this.authors = authorsService.getAuthors();
    }
}
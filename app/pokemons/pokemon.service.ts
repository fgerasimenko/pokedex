import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import './../util/rxjs-extensions';

import { Pokemon } from './pokemon.model';

@Injectable()
export class PokemonService {
    private apiUrl: string ='app/pokedex';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    //private contatosUrl:
    constructor(
        private http: Http
    ){}

    findAll(): Promise<any[]>
    {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Pokemon[])
            .catch();
    }
}
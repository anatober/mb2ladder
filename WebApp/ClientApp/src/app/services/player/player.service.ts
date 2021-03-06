import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Player } from 'src/app/models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private readonly http: HttpClient) { }

  async getPlayerList(): Promise<HttpResponse<Array<Player>>> {
    return await this.http.get<Array<Player>>(`${window.location.origin}/players/list`, { observe: 'response' }).toPromise();
  }
}

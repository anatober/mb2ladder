import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Register } from 'src/app/models/register/register';
import { Login } from 'src/app/models/register/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  async register(model: Register): Promise<HttpResponse<any>> {
    return await this.http.post<HttpResponse<any>>(`${window.location.origin}/auth/register`, model, { observe: 'response' }).toPromise();
  }

  async signIn(model: Login): Promise<HttpResponse<any>> {
    return await this.http.post<HttpResponse<any>>(`${window.location.origin}/auth/signIn`, model, { observe: 'response' }).toPromise();
  }
}

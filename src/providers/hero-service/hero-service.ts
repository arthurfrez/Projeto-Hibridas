import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

/*
  Classe gerada para fazer acesso a API da Marvel.
*/
@Injectable()
export class HeroServiceProvider {
  data: any;
  offset: number = -20;

  constructor(public http: HttpClient) {

  }

  load() {
    if(this.data) {
      return Promise.resolve(this.data);
    }

    // incremento para scroll infinito
    this.offset += 20;

    return new Promise(resolve => {
      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
        '2e38bfa776e241f7437c8569f782f153731c0a7e8f18039296e1ddc535b38be95d9edf20'
      );

      this.http.get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&offset=${this.offset}&limit=20&apikey=8f18039296e1ddc535b38be95d9edf20&hash=${hash}`
      )
      .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getDescription(id: number) {
    return new Promise(resolve => {
      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
        '2e38bfa776e241f7437c8569f782f153731c0a7e8f18039296e1ddc535b38be95d9edf20'
      );

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&apikey=8f18039296e1ddc535b38be95d9edf20&hash=${hash}`
        )
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

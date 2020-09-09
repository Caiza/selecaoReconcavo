import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from './../../../environments/environment';
import { Farmacia } from './../../farmacia/models/farmacia';
import { FiltroFarmaciaVO } from './../../farmacia/models/vo/filtro-farmacia-vo';
import { Bairro } from './../models/bairro';


@Injectable()
export class BairroService {

    private readonly PATH: string = '/drugstneighborhoodsores';

    constructor(
        private http: HttpClient,
    ) { }


    buscarTodosBairros(): Observable<any> {
        return this.http.get(env.baseApiUrl + this.PATH);
    }

    buscarBairroPorNome(nome: String): Observable<any> {
        return this.http.get(env.baseApiUrl + this.PATH + nome);
    }

    cadastrarBairro(bairro: Bairro): Observable<any> {
        return this.http.post(env.baseApiUrl + this.PATH, bairro);
    }
}

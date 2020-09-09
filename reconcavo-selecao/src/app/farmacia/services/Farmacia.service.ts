import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Farmacia } from '../models/farmacia';
import { FiltroFarmaciaVO } from '../models/vo/filtro-farmacia-vo';
import { environment as env } from './../../../environments/environment';

@Injectable()
export class FarmaciaService{

    private readonly PATH: string = '/drugstores';

    constructor(
        private http: HttpClient,
      ) { }


    buscaTodasFarmacia(): Observable<any>{
        return this.http.get(env.baseApiUrl + this.PATH);
    }

    buscarFarmaciaPorNome(nome: String): Observable<any>{
        return this.http.get(env.baseApiUrl + this.PATH + nome);
    }

    buscarFarmaciaPorBairro(filtroFarmaciaVO: FiltroFarmaciaVO): Observable<any>{
        return this.http.get(env.baseApiUrl + this.PATH + filtroFarmaciaVO);
    }
  
    atualizaFarmacia(farmacia: Farmacia): Observable<any>{
      return this.http.put(env.baseApiUrl + this.PATH, farmacia);
    }
  
    cadastrarFarmacia(farmacia: Farmacia): Observable<any>{
      return this.http.post(env.baseApiUrl + this.PATH,  farmacia);
    }

    remover(id: number): Observable<any>{
        return this.http.delete(env.baseApiUrl + this.PATH +  id);
      }

}
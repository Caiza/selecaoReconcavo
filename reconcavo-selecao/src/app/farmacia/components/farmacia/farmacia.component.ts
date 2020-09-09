import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bairro } from 'src/app/bairro/models/bairro';
import { BairroService } from 'src/app/bairro/services/bairro.service';

import { Farmacia } from '../../models/farmacia';
import { FarmaciaService } from '../../services/Farmacia.service';
import { FiltroFarmaciaVO } from './../../models/vo/filtro-farmacia-vo';



@Component({
    selector: 'app-menu',
    templateUrl: './farmacia.component.html',
    styleUrls: ['./farmacia.component.css']
  })
  export class FarmaciaComponent implements OnInit{

    private _listBairro = {} as Bairro;
    private _listFarmacia = {} as Farmacia;


    constructor(
      private fb: FormBuilder,
      private bairroService: BairroService,
      private farmaciaService: FarmaciaService
    ) { }

    form: FormGroup;
    
    ngOnInit(): void {
      this.buscaTodasFarmacia();
      this.buscarListaBairros();
    }

    gerarForm(){
      this.form = this.fb.group({
        nome: ['', [Validators.required]],
        neighborhoods: ['', [Validators.required]],
        isOpen: ['', [Validators.required]]
      })
    }

    buscarListaBairros(){
      return this.bairroService.buscarTodosBairros().subscribe(
        retorno => {
          this._listBairro = retorno;
        }
      );
    }

    cadastrar(){
      const farmacia: Farmacia = this.form.value;
      this.farmaciaService.cadastrarFarmacia(farmacia).subscribe();
    }

    buscaTodasFarmacia(){
      return this.farmaciaService.buscaTodasFarmacia().subscribe( retorno => {
        this._listFarmacia = retorno;
      });
    }

    buscarListaFarmacia(){
      return this.farmaciaService.buscaTodasFarmacia().subscribe( retorno => {
        this._listFarmacia = retorno;
      })
    }

    buscar(nome: String){
      if(nome == null){
        this.buscarListaFarmacia();
      }else{
        this.buscarFarmaciaPorNome(nome);
      }
    }

    buscarFarmaciaPorNome(nome: String){
      return this.farmaciaService.buscarFarmaciaPorNome(nome).subscribe( retorno => {
        this._listFarmacia = retorno;
      });
    }

    buscarFarmaciaPorBairro(filtroFarmaciaVO: FiltroFarmaciaVO){
      return this.farmaciaService.buscarFarmaciaPorBairro(filtroFarmaciaVO).subscribe( retorno => {
        this._listFarmacia = retorno;
      });
    }

    atualizaFarmacia(farmacia: Farmacia){
       this.farmaciaService.atualizaFarmacia(farmacia).subscribe();
    }

    removeFarmacia(id: number){
      this.farmaciaService.remover(id).subscribe();
   }

    get listBairro(){
      return this._listBairro;
    }
    get listFarmacia(){
      return this._listFarmacia;
    }
  

  }
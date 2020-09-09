import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Farmacia } from 'src/app/farmacia/models/farmacia';

import { Bairro } from '../models/bairro';
import { FarmaciaService } from './../../farmacia/services/Farmacia.service';
import { BairroService } from './../services/bairro.service';



@Component({
    selector: 'app-menu',
    templateUrl: './bairro.component.html',
    styleUrls: ['./bairro.component.css']
  })
  export class BairroComponent implements OnInit {
      
    private _listBairro = {} as Bairro;
    private _listFarmacia = {} as Farmacia;


    constructor(
      private fb: FormBuilder,
      private bairroService: BairroService,
      private farmaciaService: FarmaciaService
    ) { }

    form: FormGroup;

    ngOnInit(): void {
    this.buscarListaBairros();
    this.buscarListaFarmacia();
    this.gerarForm();
    }

    gerarForm(){
      this.form = this.fb.group({
        nome: ['', [Validators.required]],
        idFarm: ['', [Validators.required]]
      })
    }

    cadastrar(){
      const bairro: Bairro = this.form.value;
      this.bairroService.cadastrarBairro(bairro).subscribe();
    }

    buscarListaBairros(){
      return this.bairroService.buscarTodosBairros().subscribe( retorno => {
        this._listBairro = retorno;
      });
    }

    buscarListaFarmacia(){
      return this.farmaciaService.buscaTodasFarmacia().subscribe( retorno => {
        this._listFarmacia = retorno;
      })
    }

    buscarBairroPorNome(nome: String){
      return this.bairroService.buscarBairroPorNome(nome).subscribe( retorno => {
        this._listBairro = retorno;
      });
    }

    buscar(nome: String){
      if(nome == null){
        this.buscarListaFarmacia();
      }else{
        this.buscarBairroPorNome(nome);
      }
    }

    get listBairro(){
      return this._listBairro;
    }
    get listFarmacia(){
      return this._listFarmacia;
    }
  
  }
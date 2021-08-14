import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-data-bases',
  templateUrl: './data-bases.component.html',
  styleUrls: ['./data-bases.component.css']
})
export class DataBasesComponent implements OnInit {

  personForm: FormGroup;
  invalidID = false;
  personNotFound = false;
  showErrorOperation = false;
  operationFailure :string;
  constructor(private http:HttpClient) { 
    this.personForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  doInsertar(formValues){
    this.showErrorOperation = false;
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    let url = environment.createPersonAction;
    this.http.post<any>(url,JSON.stringify(formValues),{headers})
      .subscribe(data =>{
        this.personForm.reset();
      },
        err =>{
          this.showErrorOperation = true;
          this.operationFailure = 'Crear'
        });
    

  }
  doActualizar(){
    const formValues = this.personForm.getRawValue();
    console.log(formValues)
    
    console.log(this.personForm.controls['id'].value);
    this.showErrorOperation = false;
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    let url = environment.updatePersonACtion;
    console.log(JSON.stringify(formValues))
    this.http.post<any>(url,JSON.stringify(formValues),{headers})
      .subscribe(data =>{
        this.personForm.controls['id'].enable();
        this.personForm.reset();
      },
        err =>{
          this.showErrorOperation = true;
          this.operationFailure = 'Actualizar'
        });
    
  }
  doEliminar(){
    const formValues = this.personForm.getRawValue();
    this.showErrorOperation = false;
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    let url = environment.deletePersonAction;
    this.http.post<any>(url,JSON.stringify(formValues),{headers})
      .subscribe(data =>{
        this.personForm.controls['id'].enable();
        this.personForm.reset();
      },
        err =>{
          this.showErrorOperation = true;
          this.operationFailure = 'Eliminar'
        });
    
    
  }

  doConsultar(){
    this.showErrorOperation = false;
    this.personNotFound = false;
    let id = this.personForm.controls['id'].value;
    if(id){
      this.invalidID = false;
      let url = environment.searchPersonAction + id;
      console.log(url)
      this.http.get<any>(url).subscribe(data => {   
        if(data){
          this.personForm.controls['id'].patchValue(data.id);
          this.personForm.controls['id'].disable();
          this.personForm.controls['name'].patchValue(data.name);
          this.personForm.controls['last_name'].patchValue(data.last_name);
          this.personForm.controls['age'].patchValue(data.age);
        }else{
          this.personNotFound = true;
        }
      });

    }else{
      this.invalidID = true;
    }
    
  }

}

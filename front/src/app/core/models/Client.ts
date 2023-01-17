export interface Client {
  cliente_code:number,
  identity_doc: string,
  company_name:string,
  comercial_name:string,
  person_name:string,
  person_first_lastname:string,
  person_second_lastname:string,
  birthdate:Date,
  country:string,
  address:string,
  email:string,
  password:string,
  phone_number:string,
  date_start:Date,
  works:Doc[],
  taxes:number,
  discount:number,
  apply_rates:number,

}

export interface Doc {
  name:string,
  base_doc:string,
  code:string;
  isPay:boolean
}

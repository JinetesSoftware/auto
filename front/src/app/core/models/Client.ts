export interface Client {
  _id: string;
  client_code: string;
  identity_doc_type: string; //NIE o CIF , Dropdown
  identity_doc: string;
  company_name: string;
  comercial_name: string;
  person_name: string;
  person_first_lastname: string;
  person_second_lastname: string;
  birthdate: Date;
  age: number;
  country: string;
  address: string;
  email: string;
  password: string;
  phone_number: string;
  date_start: Date;
  works: Doc[];
  docs: Doc[];
  taxes: number | string;
  discount: number | string;
  apply_rates: number | string;
  status: boolean;
}

export interface Doc {
  name: string;
  base_doc: string;
  code: string;
  isPay: boolean;
}

export interface ClientReq {
  role: String;
  data: {
    client: Client;
  };
}

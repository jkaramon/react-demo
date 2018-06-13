type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: number,
    lng: number
  }
};

type Company = {
  name: string,
  catchPhrase: string,
  bs: string
};

export type APIUser = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
};

export type ReduxUser = {
  id: number,
  name: string,
  email: string,
  addressCity: string,
  phone: string,
  website: string,
  companyName: string
};

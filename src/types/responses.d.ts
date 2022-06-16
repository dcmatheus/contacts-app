export interface ContactResponse {
  id: number;
  name: string;
  email: string;
  mobile: string;
}

export interface LoginResponse {
  token?: string,
  invalidCredential?: string
}

export interface Test extends Omit<ContactResponse, 'id'> {}

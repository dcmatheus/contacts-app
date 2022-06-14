import { Contact } from './contact';

export interface ContactResponse extends Contact {
  id: number;
}

export interface LoginResponse {
  token?: string,
  invalidCredential?: string
}

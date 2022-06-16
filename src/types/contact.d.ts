import { ContactResponse } from './responses';

export interface Contact extends Omit<ContactResponse, 'id'> {}

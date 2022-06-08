import { Contact, ContactResponse } from 'types';
import api from './connect';

export async function getContacts(): Promise<ContactResponse[]> {
  try {
    const response = await api.get('/contacts');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteContact(id: number): Promise<string> {
  try {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Erro ao excluir contato. Tente novamente';
  }
}

export async function createContact(contact: Contact) {
  try {
    const response = await api.post('/contacts', contact);
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Erro ao criar contato. Tente novamente';
  }
}

export async function updateContact(id: number, contact: Contact) {
  try {
    const response = await api.put(`/contacts/${id}`, contact);
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Erro ao atualizar contato. Tente novamente';
  }
}

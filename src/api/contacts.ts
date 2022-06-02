import { Contact } from 'types';
import api from './connect';

export async function getContacts(token: string): Promise<Contact[]> {
  try {
    const response = await api.get('/contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteContact(token: string, id: number): Promise<string> {
  try {
    const response = await api.delete(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Erro ao excluir contato. Tente novamente';
  }
}

export async function createContact(token: string, contact: Contact) {
  try {
    const response = await api.post('/contacts', contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Erro ao criar contato. Tente novamente';
  }
}

export async function updateContact(token: string, contact: Contact) {
  try {
    const response = await api.put(`/contacts/${contact.id}`, contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Erro ao atualizar contato. Tente novamente';
  }
}

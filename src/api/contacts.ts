import { Contact } from 'types';
import api from './connect';

async function getContacts(token: string): Promise<Contact[]> {
  try {
    const response = await api.get('/contacts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
}

export default getContacts;

import api from './connect';
import { LoginResponse } from '../types';

const invalidCredential = 'Email ou senha incorreta. Verifique e tente novamente.';

async function loginUser(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;
    return { token };
  } catch (error) {
    return { invalidCredential };
  }
}

export default loginUser;

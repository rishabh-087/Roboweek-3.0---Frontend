import axios from 'axios';

const API_URL = 'http://localhost:8000';

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const signInWithGoogle = async (): Promise<void> => {
  window.location.href = `${API_URL}/auth/google/signin`;
};

export const handleGoogleCallback = async (code: string): Promise<AuthResponse> => {
  const response = await axios.get(`${API_URL}/auth/google/callback?code=${code}`);
  return response.data;
};
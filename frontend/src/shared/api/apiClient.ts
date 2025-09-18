import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async searchByCode<T>(code: string): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(`/search/${code}`);
    return response.data;
  }
}

export default new ApiClient();

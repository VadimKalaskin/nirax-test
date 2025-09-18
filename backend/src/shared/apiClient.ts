import axios, { type AxiosInstance, type AxiosResponse } from 'axios';
import dotenv from "dotenv";

dotenv.config();
const BASE_URL = process.env.NIRAX_API_BASE_URL;

class ApiClient {
  private static instance: ApiClient;
  private client: AxiosInstance | null = null;

  private constructor() {}

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  async init() {
    const res = await axios.post(`${BASE_URL}/auth`, {});
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (res.status === 200) {
      headers['Authorization'] = `Bearer ${res.data.result.accessToken}`;
    }

    this.client = axios.create({
      baseURL: BASE_URL,
      headers,
    });
  }

  async searchByCode<T>(code: string): Promise<T> {
    if (!this.client) {
      throw new Error('ApiClient не инициализирован. Вызовите init().');
    }
    const response: AxiosResponse<T> = await this.client.get(`/parts/by-searchcode/${code}`);
    return response.data.result;
  }
}

export default ApiClient.getInstance();

import { api } from "../axios-config/axios.config";

async function getAllPosts<T>(url: string): Promise<T> {
  const resp = await api.get(url);
  return resp.data.content as T;
}

export const PostSrvices = { getAllPosts };

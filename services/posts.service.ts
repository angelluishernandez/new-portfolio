import axios from "axios";
import { ENDPOINTS } from "../constants/api";

export const fetchAllPosts = async () => {
  try {
    const { data } = await axios.get(ENDPOINTS.POSTS_ENDPOINT);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAuthors = async (id: string) => {
  try {
    const {
      data: { name },
    } = await axios.get(`${ENDPOINTS.AUTHORS_API_URL}/${id}`);
    return name;
  } catch (error) {
    console.error(error);
  }
};

export const getFeaturedImage = async (id: string) => {
  try {
    const res = await axios.get(`${ENDPOINTS.MEDIA_API_URL}/${id}`);
    return res.data.guid.rendered;
  } catch (error) {
    console.error(error);
  }
};

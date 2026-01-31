import axios from "axios";

const API_URL = "https://697de17497386252a26947bb.mockapi.io/news";

export const getNews = async() => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const addNews = async(news) => {
    const res = await axios.post(API_URL, news);
    return res.data;
};

export const updateNews = async(id, news) => {
    const res = await axios.put(`${API_URL}/${id}`, news);
    return res.data;
};

export const deleteNews = async(id) => {
    await axios.delete(`${API_URL}/${id}`);
};
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29669781-317417cb25e4625a08da5b15a';
const getImages = async (searchValue, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safeSearch=true&page=${page}&per_page=12`
  );
  return response.data;
};

export default getImages;

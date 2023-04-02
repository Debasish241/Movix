import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTIxYzgxYmUzNzViNDIyNDliNTA0YjU5MWZlMzliMSIsInN1YiI6IjY0MjQ5Y2NmYTNlNGJhMDA3NzkxZTNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ftg8bZ47lk0EMoAn6oygkLb0w8SwPMxGvgre8b4bZk";

const headers = {
    Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try{
        const {data}=await axios.get
        (BASE_URL + url, {
            headers,
            params
        })
        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}
import axios from "axios";

export const trendingFilters = {
    popular:"popular",
    trending: "trending",
    mostWatched: "watched/weekly"

}

export const apiInstance = axios.create({
    baseURL : "https://api.trakt.tv",
    headers : {
        'Authorization' : 'Bearer 4c0eb7c6eea1cf26057bacd4d0fbf64711b53d2f9450ecd4caaa0acbee7196a1',
        'trakt-api-version' : '2',
        'trakt-api-key' : '1e60b0bdce5063318a2b9995d1755d7f1ce2f2d7a1a9772fa8a1cfeace11b698'
    }
})
import axios from "axios";
import jwt from "jsonwebtoken";
const auth = {
    inMemoryToken: null,
    refreshLogin: async (callback) => {
        auth.inMemoryToken = await (await (axios.post("/api/auth/refresh"))).data;

        callback ? callback(auth.inMemoryToken) : "";
    },
    login: async (response, callback) => {
        //get jwt and store it in auth.inMemoryToken
        auth.inMemoryToken = await (await axios.post("/api/auth/google", {
            tokenId: response.tokenId
        })).data;

        callback ? callback(auth.inMemoryToken) : "";
    },
    logout: async (callback) => {
        auth.inMemoryToken = null;
        await axios.post("/api/auth/cancelrefresh");
        window.location.replace("/");

        callback ? callback() : "";
    },
    getUserFromToken: () => {
        return auth.inMemoryToken ? jwt.decode(auth.inMemoryToken).user : null;
    },
    tokenRefresher: async () => {

    }
};

export default auth;


function getNewRefreshToken(userId) {

}
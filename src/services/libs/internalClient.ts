import axios from "axios";

export const BASE_URL = "https://emkc.org/api/v2/piston";

export const internalClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

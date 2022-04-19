import axios from "axios";
import api from "../../api/$api";
import aspida from "@aspida/axios";

const client = axios.create({
	baseURL: process.env.BASE_URL || "http://localhost:8080",
});

export const httpClient = api(aspida(client));

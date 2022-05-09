import axios from 'axios';

export default class ApiService {
    static host = 'http://localhost:8000';

    static parseQuery(qp) {
        if (!qp || !Object.keys(qp).length) {
            return '';
        }

        return Object.keys(qp).map(key => qp[key] ? `${key}=${qp[key]}` : '').filter(x => x !== '').join('&');
    }

    static get(url, qp) {
        return axios.get(ApiService.host + url, {params: qp}).then((response) => {
            return response?.data;
        });
    }
}
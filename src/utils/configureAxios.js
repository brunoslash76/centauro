import axios from 'axios';

export default history => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers['Access-Control-Allow-Headers'] =
        'Origin, X-Requested-With, Content-Type, Accept';
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (history.location.pathname.indexOf('forgotPassword') !== -1) {
                return Promise.reject(error);
            }

            if (error.response.status === 401) {
                if (
                    !window.location.href.includes('backurl') &&
                    !window.location.href.includes('login')
                )
                    history.push(`/login?backurl=${window.location.pathname}`);
            }

            return Promise.reject(error);
        },
    );
};

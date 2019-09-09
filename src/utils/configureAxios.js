import axios from 'axios';

export default history => {
    axios.defaults.baseURL = 'https://api.github.com/users/';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers['Access-Control-Allow-Origin'] = 'https://api.github.com';
    axios.defaults.headers['Access-Control-Allow-Headers'] = 'Authorization';
    axios.defaults.headers['Acces-COntrol-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE';
    axios.defaults.headers['Access-Control-Expose-Headers'] = ' ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval';
    axios.defaults.withCredentials = false;
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) {
                if (
                    !window.location.href.includes('backurl') &&
                    !window.location.href.includes('')
                )
                    history.push(`/?backurl=${window.location.pathname}`);
            }

            return Promise.reject(error);
        },
    );
};

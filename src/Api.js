import axios from "axios";
const apiURL = 'https://ameregistry.azurewebsites.net'

const api = axios.create({
    baseURL: apiURL
})


//request interceptor to add the auth token header to requests
api.interceptors.request.use(req => {
    // refresh token every 10 mins using current token
    if (localStorage.getItem("accessToken") != null) {

        // if this token is 5 mins old, then refresh it
        // if the refresh attempt fails, the user will be redirected to the login page
        var tokenAge = Math.abs(new Date().getTime() - localStorage.getItem("accessTokenBirth"));
        if (tokenAge > 300000) { // 5 mins

            // prevents refreshing token whilst refresh token is in progress
            localStorage.setItem("accessTokenBirth", new Date().getTime())

            axios.get(apiURL + "/user/refresh", {
                headers: {
                    "Authorization": localStorage.getItem("accessToken")
                }
            }).then((response) => {
                localStorage.setItem("accessToken", response.data);
            }).catch((error) => {
                // the user was probably inactive for too long, so the token could not be refreshed
                localStorage.clear();
                window.location = "/login";
            })
        }
        req.headers.authorization = localStorage.getItem("accessToken");
    }

    return req;
});

export default api;

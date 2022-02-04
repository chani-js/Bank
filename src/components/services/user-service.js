import axios from "axios";

export async function getUser(jwt) {
    const config = {
        headers: {
            "Authorization" : `Bearer ${jwt}`
        },
    };
    const res = await axios.post('http://localhost:3001/api/v1/user/profile', {}, config);
    return res.data.body;
}

export async function getJWT(e) {
    const res = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: e.email,
        password: e.password
    });
    localStorage.setItem('jwt', res.data.body.token);
    return res.data.body.token;
}

export async function updateUserProfile(e, jwt){
    const config = {
        headers: {
            "Authorization" : `Bearer ${jwt}`
        },
    };
    const res = await axios.put('http://localhost:3001/api/v1/user/profile', {
        firstName: e.firstName,
        lastName: e.lastName
    }, 
        config
    );
    console.log('res', res);
    return res.data;
}
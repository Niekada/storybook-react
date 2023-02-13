import axios from "axios";

const USER_API_URL = "https://testapi.io/api/rokasandreikenas/resource/user"

export const fetchUsers = () => {
    return axios
        .get(USER_API_URL)
        .then((response) => response.data.data);
};

export const createUser = (user) => {
    return axios
        .post(USER_API_URL, user)
        .then((response) => response.data.data);
};

export const loginUser = async (loggingUser) => {
    const users = await fetchUsers();
    return new Promise((resolve, reject) => {
        const { email, password } = loggingUser;
        const userChecker = (user) => user.email === email && user.password === password;
        const existingUser = users.find(userChecker)

        if (existingUser) {
            resolve(existingUser)
        } else {
            reject("Invalid credentials")
        }

        //existingUser? resolve(loggingUser) : reject("Invalid credentials");
    });
};
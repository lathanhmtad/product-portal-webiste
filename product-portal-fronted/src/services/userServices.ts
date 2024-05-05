import {ListResponse} from "../models/ListResponse";
import {User} from "../models/User";

import axios from "axios";

class UserServices {
    public async getUsers(): ListResponse<User> {
        const users : ListResponse<any> = await axios.get('http://localhost:8080/api/v1/users')
            .then(res => {
                return res;
            })
        return users;
    }
}


export {}
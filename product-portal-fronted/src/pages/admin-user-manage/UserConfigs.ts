import ResourceUrl from "../../constants/ResourceUrl";
import {Configs} from "../../types/Configs";

class UserConfigs extends Configs {
    static managerPath = '/admin'
    static resourceUrl = ResourceUrl.USER
    static resourceKey = 'users'
}

export default UserConfigs
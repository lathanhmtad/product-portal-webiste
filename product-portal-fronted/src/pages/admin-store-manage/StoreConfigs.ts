import ResourceUrl from "../../constants/ResourceUrl";
import {Configs} from "../../types/Configs";

class StoreConfigs extends Configs{
    static managerPath = '/admin/store'
    static resourceUrl = ResourceUrl.STORE
    static resourceKey = 'stores'
}

export default StoreConfigs
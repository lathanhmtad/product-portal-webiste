import ApplicationConstants from "./ApplicationConstants";

const apiPath = ApplicationConstants.API_PATH

class ResourceUrl {
    // Admin
    static USER = apiPath + '/users'
    static STORE = apiPath + '/stores'

    // Client
}

export default ResourceUrl
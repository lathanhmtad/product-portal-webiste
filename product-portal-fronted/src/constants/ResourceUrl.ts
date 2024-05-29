import ApplicationConstants from "./ApplicationConstants";

const apiPath = ApplicationConstants.API_PATH

class ResourceUrl {
    // Admin
    static USER = apiPath + '/users'
    static STORE = apiPath + '/stores'

    // Client
    static CLIENT_SELLER_REGISTER = apiPath + '/sellers/register'
    static CLIENT_SELLER_ADD_PRODCUT = apiPath + '/sellers/add-product'
    static CLIENT_SELLER_UPDATE_PRODUCT = apiPath + '/sellers/update-product'
    static CLIENT_CATEGORY = apiPath + '/categories'

    static PRODUCT = apiPath + '/products'

    // Auth
    static LOGIN  = apiPath + '/auth/login'
}

export default ResourceUrl
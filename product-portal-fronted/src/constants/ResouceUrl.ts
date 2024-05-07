import ApplicationConstants from './AppConstants';

const apiPathV1: string = ApplicationConstants.API_PATH_V1;

class ResourceUrl {
    // admin
    static USER = apiPathV1 + '/users';
    static STORE = apiPathV1 + '/stores'

    // client

    // auth
}

export default ResourceUrl;
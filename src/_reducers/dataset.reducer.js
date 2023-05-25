import { datasetConstants } from '../_constants';

export function dataset(state = {}, action) {
    switch (action.type) {
        case datasetConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case datasetConstants.GETALL_SUCCESS:
            return {
                items: action.dataset
            };
        case datasetConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
       
        default:
            return state
    }
}

import { datasetConstants } from '../_constants';
import { datasetService } from '../_services';
import { history } from '../_helpers';

export const datasetActions = {   
    getAllDataset
};

//get all dataset
function getAllDataset() {
    return dispatch => {
        dispatch(request());

        datasetService.getAllDataset()
            .then(
                dataset => dispatch(success(dataset)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: datasetConstants.GETALL_REQUEST } }
    function success(dataset) { return { type: datasetConstants.GETALL_SUCCESS, dataset } }
    function failure(error) { return { type: datasetConstants.GETALL_FAILURE, error } }
}

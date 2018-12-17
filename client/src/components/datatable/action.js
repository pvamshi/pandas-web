import DATATABLE from './constants';
const datatableDataFetchStart = {
  type: DATATABLE.DATATABLE_DATA_FETCH_START,
};
const datatableDataFetchSuccess = (data) => ({
  type: DATATABLE.DATATABLE_DATA_FETCH_SUCCESS,
  data,
});
const datatableDataFetchError = (error) => ({
  type: DATATABLE.DATATABLE_DATA_FETCH_ERROR,
  message: error,
});
const dataFileSelectAction = (file) => {
  console.log('file selected');
  return (dispatch) => {
    console.log('starting');
    dispatch(datatableDataFetchStart);
    return fetch(`http://localhost:8080/pandas?taskid=${file.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        dispatch(datatableDataFetchSuccess(data));
      })
      .catch((error) => dispatch(datatableDataFetchError(error)));
  };
};

export { dataFileSelectAction };

import DATAFILES from './constant';

const startFetchingAction = () => ({
  type: DATAFILES.GET_START,
});

const fetchSuccessAction = (data) => ({
  type: DATAFILES.GET_SUCCESS,
  payload: data,
});

const fetchFailedAction = (error) => ({
  type: DATAFILES.GET_FAIL,
  payload: error,
});

const fetchDatafiles = () => {
  return (dispatch) => {
    dispatch(startFetchingAction());
    return fetch('http://localhost:5000/api/read/')
      .then((response) => response.json())
      .then((data) => dispatch(fetchSuccessAction(data)))
      .catch((error) => dispatch(fetchFailedAction(error)));
  };
};

const dataFileSelectAction = (file) => ({
  type: DATAFILES.FILE_SELECT,
  payload: file,
});
export { fetchDatafiles, dataFileSelectAction };

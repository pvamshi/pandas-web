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
    return fetch('http://localhost:8080/tasks')
      .then((response) => response.json())
      .then((response) => {
        console.log('data', response);
        return response;
      })
      .then((data) => dispatch(fetchSuccessAction(data)))
      .catch((error) => dispatch(fetchFailedAction(error)));
  };
};

export { fetchDatafiles };

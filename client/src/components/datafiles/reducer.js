import DATAFILES from './constant';

const initialState = { files: null, isFetching: false, error: null };
const datafiles = (state = initialState, action) => {
  switch (action.type) {
    case DATAFILES.GET_START:
      return { ...state, isFetching: true, error: null };
    case DATAFILES.GET_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    case DATAFILES.GET_SUCCESS:
      return {
        ...state,
        files: action.payload,
        isFetching: false,
        error: null,
      };

    default:
      return state;
  }
};

export default datafiles;

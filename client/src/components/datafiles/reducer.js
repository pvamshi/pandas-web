import DATAFILES from './constant';

const convert = (raw) =>
  raw.data.map((row, rowIndex) =>
    raw.columns.reduce(
      (accumulated, current, index) => ({
        ...accumulated,
        [current]: row[index],
      }),
      {
        id: raw.index[rowIndex],
      },
    ),
  );

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
        files: convert(action.payload),
        isFetching: false,
        error: null,
      };

    default:
      return state;
  }
};

export default datafiles;

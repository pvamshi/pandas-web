import DATAFILES from './constant';

const convert = (raw) =>
  raw.data.map((row) =>
    raw.columns.reduce(
      (accumulated, current, index) => ({
        ...accumulated,
        [current]: row[index],
      }),
      {},
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
      // const data = action.payload;
      // const files = data.data.map((val, index)=>({[key]: data.data[]}))
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

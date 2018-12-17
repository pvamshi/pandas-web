import DATATABLE from './constants';
const initialState = {
  progress: false,
  data: null,
  data_dummy: {
    columns: [
      'acct',
      'utc_date',
      'num_courses_visited',
      'total_minutes_visited',
      'lessons_completed',
      'projects_completed',
    ],
    data: [
      [0, '2015-01-09', 1, 11.6793745, 0, 0],
      [0, '2015-01-10', 2, 37.2848873333, 0, 0],
      [0, '2015-01-11', 2, 53.633746333299996, 0, 0],
      [0, '2015-01-12', 1, 33.489269666700004, 0, 0],
      [0, '2015-01-13', 1, 64.7796776667, 0, 0],
      [0, '2015-01-14', 1, 151.617576833, 1, 0],
      [0, '2015-01-15', 1, 142.395963833, 0, 0],
      [0, '2015-01-16', 0, 0, 0, 0],
      [0, '2015-01-17', 1, 9.8495625, 0, 0],
      [0, '2015-01-18', 1, 38.330548, 0, 0],
    ],
    index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  error: null,
};

const datatable = (state = initialState, action) => {
  switch (action.type) {
    case DATATABLE.DATATABLE_DATA_FETCH_START:
      return { ...state, progress: true };

    case DATATABLE.DATATABLE_DATA_FETCH_SUCCESS:
      return { ...state, progress: false, data: action.data };
    case DATATABLE.DATATABLE_DATA_FETCH_ERROR:
      return { ...state, progress: false, error: action.error };
    default:
      return state;
  }
};

export default datatable;

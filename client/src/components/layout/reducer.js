import LAYOUT from './constants';

const initialState = { sidebarOpen: true };
const layout = (state = initialState, action) => {
  switch (action.type) {
    case LAYOUT.TOGGLE:
      return Object.assign({}, state, { sidebarOpen: !state.sidebarOpen });
    default:
      return state;
  }
};

export default layout;

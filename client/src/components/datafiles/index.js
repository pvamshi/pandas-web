import { connect } from 'react-redux';
import DatafileContainer from './DatafileContainer';

const mapStateToProps = (state) => state.datafiles;
// const mapDispatchToProps = (dispatch) => ({
//   toggle: () => dispatch(toggleAction()),
// });

const Layout = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(DatafileContainer);

export default Layout;

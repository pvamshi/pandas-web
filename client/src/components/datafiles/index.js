import { connect } from 'react-redux';
import DatafileContainer from './DatafileContainer';
import { dataFileSelectAction } from './action';

const mapStateToProps = (state) => state.datafiles;
const mapDispatchToProps = (dispatch) => ({
  fileSelect: (file) => dispatch(dataFileSelectAction(file)),
});

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatafileContainer);

export default Layout;

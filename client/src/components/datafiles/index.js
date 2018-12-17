import { connect } from 'react-redux';
import { dataFileSelectAction } from '../datatable/action';
import DatafileContainer from './DatafileContainer';

const mapStateToProps = (state) => state.datafiles;
const mapDispatchToProps = (dispatch) => ({
  fileSelect: (file) => dispatch(dataFileSelectAction(file)),
});

const Datafiles = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatafileContainer);

export default Datafiles;

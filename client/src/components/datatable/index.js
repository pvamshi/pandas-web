import { connect } from 'react-redux';
import DataTableContainer from './DataTableContainer';

const mapStateToProps = (state) => state.datatable;
// const mapDispatchToProps = (dispatch) => ({
//   fileSelect: (file) => dispatch(dataFileSelectAction(file)),
// });

const Datatable = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(DataTableContainer);

export default Datatable;

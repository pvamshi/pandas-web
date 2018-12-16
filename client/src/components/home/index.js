import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';

const mapStateToProps = (state) => state.data;
// const mapDispatchToProps = (dispatch) => ({
//   fileSelect: (file) => dispatch(dataFileSelectAction(file)),
// });

const Home = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(HomeContainer);

export default Home;

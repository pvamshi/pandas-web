import { connect } from 'react-redux';
import toggleAction from './action';
import LayoutContainer from './LayoutContainer';

const mapStateToProps = (state) => ({ sidebarOpen: state.layout.sidebarOpen });
const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleAction()),
});

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutContainer);

export default Layout;


import { connect } from "react-redux";
import Counter from "../../components/counter/counter.component";
import { decreaseCounter, increaseCounter } from "../../reducers/couunter/counter.action";

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
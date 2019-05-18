import React from "react";
import { connect } from "react-redux";
import getChannels from "../../store/actions/channels";

const Channels = () => (
  <ul className="list-group">
    <li className="list-group-item">Laravel</li>
    <li className="list-group-item">Angular</li>
    <li className="list-group-item">Vuejs</li>
    <li className="list-group-item">Web development</li>
  </ul>
);

class ChannelsContainer extends React.Component {
  componentWillMount() {
    this.props.getChannels();
  }

  render() {
    return <Channels />;
  }
}

/* Pass props into component from Redux store*/
const mapStateToProps = state => ({
  channels: state.channels
});

/* Get store/actions dispatch them as props into component */
const mapDispatchToProps = dispatch => ({
  getChannels: () => {
    dispatch(getChannels());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsContainer);

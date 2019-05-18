import React from "react";
import { connect } from "react-redux";
import getChannels from "../../store/actions/channels";
import ChannelsList from "./ChannelsList";

class ChannelsContainer extends React.Component {
  componentWillMount() {
    this.props.getChannels();
  }
  render() {
    return <ChannelsList passToListChannel={this.props.propChannels} />;
  }
}

/* Pass props into component from Redux store*/
const mapStateToProps = state => ({
  propChannels: state.loadChannels
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

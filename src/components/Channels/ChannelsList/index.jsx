import React from "react";

const ChannelsList = ({ passToListChannel }) => (
  <ul className="list-group">
    {passToListChannel.map(channel => (
      <li key={channel.id} className="list-group-item">
        {channel.name}
      </li>
    ))}
  </ul>
);

export default ChannelsList;

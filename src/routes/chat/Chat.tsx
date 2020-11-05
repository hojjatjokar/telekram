import React from "react";
import { useLocation } from "react-router-dom";
import { getQueryStringParams } from "../../utils/url";

function Chat() {
  let location = useLocation();
  let queries = getQueryStringParams(location.search);
  console.log("queies", queries);

  return <div>Chat</div>;
}

export default Chat;

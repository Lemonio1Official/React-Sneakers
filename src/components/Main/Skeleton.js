import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={340}
    viewBox="0 0 280 347"
    backgroundColor="#c7c7c7"
    foregroundColor="#a3cddb"
    {...props}
  >
    <rect x="4" y="1" rx="8" ry="8" width="267" height="260" />
    <rect x="0" y="283" rx="9" ry="9" width="280" height="19" />
    <rect x="0" y="311" rx="9" ry="9" width="280" height="19" />
  </ContentLoader>
);

export default MyLoader;

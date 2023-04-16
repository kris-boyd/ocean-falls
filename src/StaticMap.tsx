import React from "react";

export default function StaticMap({ width, height }: IDimension) {
  return (
    <div
      style={{
        backgroundImage: `url('https://api.mapbox.com/styles/v1/krisboyd/cl6leg7ea000w14mrkl03b1yn/static/-127.6906,52.3518,16/${width}x${height}?access_token=pk.eyJ1Ijoia3Jpc2JveWQiLCJhIjoiY2w2azVpcXdxMTlyMDNjbzJ5dWIxODZxaSJ9.-WDtw9QaqwiPtZyokBre6Q')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
      }}
    />
  );
}

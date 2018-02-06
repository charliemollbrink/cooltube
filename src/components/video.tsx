import * as React from "react";
import ReactPlayer from "react-player";
const videos = require("../data/videoList.json");
export interface VideoProps { };

export class Video extends React.Component<VideoProps, {}> {
  render() {
    return (
       <ReactPlayer url='https://www.youtube.com/watch?v=BhIEIO0vaBE' controls={true} playing />
      )
    }
  };

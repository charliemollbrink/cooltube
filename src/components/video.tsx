import * as React from "react";
import ReactPlayer from "react-player";

//const videos = require("../data/videoList.json");

export interface VideoProps {
  videoUrl: string,
  thumbnail: string
};

export class Video extends React.Component<VideoProps, {}> {
  render() {
    return (
       <ReactPlayer url={this.props.videoUrl} controls={true} playing={false} />
      )
    }
  };

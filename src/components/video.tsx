import * as React from 'react';
import ReactPlayer from 'react-player';

//const videos = require("../data/videoList.json");

export interface VideoProps {
  title: string,
  videoUrl: string,
  thumbnail: string,
};

export class Video extends React.Component<VideoProps, {}> {
  render() {
    return (
        <article className="video">
          <div className="video--description">
            <div className="description--title">
              <h3>{this.props.title}</h3>
            </div>
          </div>
          <div className="video--player">
            <ReactPlayer url={this.props.videoUrl} controls={true} playing={false} />
          </div>
        </article>

      )
    }
  };

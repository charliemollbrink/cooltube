import * as React from "react";
import { Link } from 'react-router-dom';
import { Video } from './video';

const videoList = require("../data/videoList.json");

export interface VideoListProps {
  show: number
};

export class VideoList extends React.Component<VideoListProps, {}> {
  render() {
    let rows = [], props;
    for (let i = 0; i < videoList.items.length; i++) {
      props = {
        title: videoList.items[i].snippet.title,
        videoUrl: 'https://www.youtube.com/watch?v=' + videoList.items[i].id,
        thumbnail : videoList.items[i].snippet.thumbnails.medium.url,
      }
      rows.push(
            <li>
              <Link to={"video/" + videoList.items[0].id}>
                <Video videoUrl={props.videoUrl} thumbnail={props.thumbnail}
                title={props.title} key={i}/>
              </Link>
            </li>);
    };
    return (
        <ul>
          {rows}
        </ul>
      );
    }
  };

import * as React from "react";
import { Link } from 'react-router-dom';
import { Video } from "./video";

const videoList = require("../data/videoList.json");

export interface VideoListProps {
  show: number
};

export class VideoList extends React.Component<VideoListProps, {}> {
  render() {
    let rows = [];
    //console.log(Object.entries(videoList)[items]);
    for (let i = 0; i < videoList.items.length; i++) {
      const props = {
        videoUrl: 'https://www.youtube.com/watch?v=' + videoList.items[i].id,
        thumbnail : videoList.items[i].snippet.thumbnails.medium.url

      }

      rows.push(<Video videoUrl={props.videoUrl} thumbnail={props.thumbnail} key={i}/>);
    };
    return (
        <ul>
          <li>
            <Link to={"video/" + videoList.items[0].id}>
              <article>
                {rows}
              </article>
            </Link>
          </li>
        </ul>
      );
    }
  };

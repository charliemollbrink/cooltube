import * as React from "react";
import { Link } from 'react-router-dom';

const videoList = require("../data/videoList.json");

export interface VideoListProps { };

export class VideoList extends React.Component<VideoListProps, {}> {
  render() {
    return (
        <ul>
          <li>
            <Link to={"video/" + videoList.items[0].id}>
              <article>
                <img src={videoList.items[0].snippet.thumbnails.medium.url}/>
              </article>
            </Link>
          </li>
        </ul>
      );
    }
  };

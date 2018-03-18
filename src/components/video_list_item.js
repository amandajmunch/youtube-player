import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // created a video props in Video list, so we need to pass it over here. bootstrap below

  // we have the thumbnail, the name of the video. the below response is what youtube renders

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)}className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src=
          {imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
          {video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

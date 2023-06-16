import React, { FC, useState } from "react";
import styles from "./MovieDetailBlock.module.css";

import PlayIcon from "../../assets/images/play-icon-2.png";

interface MovieDetailBlockProps {
  posterPath: string;
  youtubePath: string;
  movieName: string;
  movieStatus: string;
  movieReleaseTime: string;
  movieDescription: string;
}

const MovieDetailBlock: FC<MovieDetailBlockProps> = ({
  posterPath,
  youtubePath,
  movieName,
  movieStatus,
  movieReleaseTime,
  movieDescription,
}) => {
  const [isTrailerPlayed, setIsTrailerPlayed] = useState(false);
  const handlePlayIcon = () => {
    setIsTrailerPlayed(true);
  };

  return (
    <div>
      <div className={styles["poster"]}>
        {isTrailerPlayed ? (
          <iframe
            className={styles["youtube-video-embeded"]}
            src={youtubePath}
            width="420"
            height="315"
            title="youtubeEmbededVideo"
          ></iframe>
        ) : (
          <React.Fragment>
            <img
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt="poster"
            />

            <div onClick={handlePlayIcon}>
              <img src={PlayIcon} alt="playIcon" />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default MovieDetailBlock;

import React, { FC } from "react";

import SearchIcon from "../../assets/images/search-all.png";

interface MovieBlockProps {
  movieList: Object[];
  movieBlockTitle: string;
  movieBlockIdentifier: number;
}

const MovieBlock: FC<MovieBlockProps> = ({ movieList, movieBlockTitle, movieBlockIdentifier }) => {

    const movieBlockItem = {
        1: '',
        2: '',
        3: ''
    };

  return (
    <div>
      <div>
        <p>{movieBlockTitle}</p>
        <div>
          <p>See All</p>
          <img src={SearchIcon} alt="searchAll" />
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default MovieBlock;

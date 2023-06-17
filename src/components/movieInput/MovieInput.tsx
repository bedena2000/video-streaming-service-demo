import React, { FC, useRef, RefObject } from "react";
import styles from "./MovieInput.module.css";

import { BsSearch } from "react-icons/bs";

interface MovieInputProps {
  movieText: string;
  changeMovieText: React.Dispatch<React.SetStateAction<string>>;
  searchFunc: (text: string) => void;
}

const MovieInput: FC<MovieInputProps> = ({
  movieText,
  changeMovieText,
  searchFunc,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={styles["movie-input"]}>
      <input
        ref={inputRef}
        type="text"
        value={movieText}
        onChange={(event) => changeMovieText(event.target.value)}
      />
      <div
        onClick={() => {
          if (inputRef.current) {
            if (inputRef.current.value) {
              searchFunc(inputRef.current.value);
            }
          }
        }}
      >
        <BsSearch />
      </div>
    </div>
  );
};

export default MovieInput;

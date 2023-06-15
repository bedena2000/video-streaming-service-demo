import React, { FC, useEffect, useState } from "react";
import styles from "./Scroller.module.css";

import ScrollerIcon from "../../assets/images/scroller-icon.png";

// Hooks
import useHeight from "../customHooks/useHeight";

const Scroller: FC = () => {
  const [windowHeigh] = useHeight();
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const medium = window.innerHeight / 2;
    if (windowHeigh >= medium) {
      setIsRender(true);
    } else {
      setIsRender(false);
    }
  }, [windowHeigh]);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {isRender ? (
        <div onClick={handleScroll} className={styles["scroller"]}>
          <img src={ScrollerIcon} alt="scrollerIcon" />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Scroller;

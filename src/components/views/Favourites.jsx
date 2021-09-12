import MemesList from "../memes/MemesList";
import { AiFillHeart } from "react-icons/ai";

export function Favourites() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>
        Favourites <AiFillHeart />
      </h1>
      <MemesList type="favourite" />
    </div>
  );
}

const styles = {
  div: {
    textAlign: "center",
    margin: 0
  },
  h1: {
    margin: 5
  }
};

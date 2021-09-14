import { MemesList } from "../memes/MemesList";
import { FaRegSmileBeam } from "react-icons/fa";

export function Regular() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>
        Regular <FaRegSmileBeam />
      </h1>
      <MemesList type="regular" />
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

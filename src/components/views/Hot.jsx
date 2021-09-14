import { MemesList } from "../memes/MemesList";
import { AiTwotoneFire } from "react-icons/ai";

export function Hot() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>
        Hot <AiTwotoneFire />
      </h1>
      <MemesList type="hot" />
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

import classes from "./MemItem.module.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FcLikePlaceholder, FcDislike } from "react-icons/fc";

export function MemItem(props) {
  return (
    <li key={props.id}>
      <div>
        <h3> {props.title} </h3>
        <img className={classes.img} src={props.img} alt="IT meme" />
      </div>
      <span>
        upvotes: {props.upvotes}
        <button
          className={classes.button}
          onClick={() => props.upvoteFunc(props.id)}
        >
          <AiFillLike />
        </button>
      </span>
      <span>
        downvotes: {props.downvotes}
        <button
          className={classes.button}
          onClick={() => props.downVoteFunc(props.id)}
        >
          <AiFillDislike />
        </button>
      </span>
      <div>
        <button
          className={classes.button}
          onClick={() => props.favMemeFunc(props.id)}
        >
          {props.isFavourite ? "Remove from favourites" : "Add to favourites"}
          {""}
          {props.isFavourite ? <FcDislike /> : <FcLikePlaceholder />}
          {""}
        </button>
      </div>
    </li>
  );
}

export default MemItem;

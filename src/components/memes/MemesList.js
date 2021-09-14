import { MemItem } from "./MemItem";
import { useState } from "react";
import { MEMES_LIST_STATE } from "../../App";
import classes from "./MemesList.module.css";

export function MemesList(props) {
  const [memesList, setMemesList] = useState(MEMES_LIST_STATE);

  const addUpVote = id => {
    let newMemesList = [];
    memesList.map(mem => {
      if (mem.id === id) {
        mem.upvotes = mem.upvotes + 1;
      }
      return newMemesList.push(mem);
    });
    setMemesList(newMemesList);
  };

  const addDownVote = id => {
    let newMemesList = [];
    memesList.map(mem => {
      if (mem.id === id) {
        mem.downvotes = mem.downvotes + 1;
      }
      return newMemesList.push(mem);
    });
    setMemesList(newMemesList);
  };

  const addFavourite = id => {
    let newMemesList = [];
    memesList.map(mem => {
      if (mem.id === id && !mem.isFavourite) {
        mem.isFavourite = true;
      } else if (mem.id === id && mem.isFavourite) {
        mem.isFavourite = false;
      }
      return newMemesList.push(mem);
    });
    setMemesList(newMemesList);
  };

  return (
    <ul className={classes.ul}>
      {memesList
        .filter(mem => {
          switch (props.type) {
            case "regular":
              return mem.upvotes - mem.downvotes < 5;
            case "hot":
              return mem.upvotes - mem.downvotes >= 5;
            case "favourite":
              return mem.isFavourite;
            default:
              return console.log("error");
          }
        })
        .map(mem => (
          <MemItem
            key={mem.id}
            id={mem.id}
            title={mem.title}
            upvotes={mem.upvotes}
            downvotes={mem.downvotes}
            isFavourite={mem.isFavourite}
            img={mem.img}
            upvoteFunc={addUpVote}
            downVoteFunc={addDownVote}
            favMemeFunc={addFavourite}
          />
        ))}
    </ul>
  );
}

export default MemesList;

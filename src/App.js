import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Hot } from "./components/views/Hot";
import { Regular } from "./components/views/Regular";
import { Favourites } from "./components/views/Favourites";
import Header from "./components/views/Header";

export const MEMES_LIST_STATE = [
  {
    id: 1,
    title: "Mem 1",
    upvotes: 0,
    downvotes: 0,
    img:
      "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be89c10a5b2f1d5dec6_wEUE9CgYOhBCLN7l5mZ3-DkRM7Pi4wVnfVhE0bRBsJsh-cb1g0bbi8S2oRDj5ssjDwo7cqi4T9PDuPrT6zIV1LxX2GX4fyxx8G8XnNbGUFvM5Q1m-lqGiQqi0c8BfCeVIztTRIt5.png",
    isFavourite: false
  },
  {
    id: 2,
    title: "Mem 2",
    upvotes: 0,
    downvotes: 0,
    img:
      "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33beaa2121c403e729f3e_cFdC0T4-nFznndnWBG6Dx4sbRY_jGLBvCSq6BM_uXkJ_n3nL4pKSC_RPSlnAbDYDw0U_BNjM_mftxXGf0dwoRTp1vB5HWk1TJR6U-69iJLAugpxpnzRgXpxfI4Tr1talrjrJg0AP.png",
    isFavourite: false
  },
  {
    id: 3,
    title: "Mem 3",
    upvotes: 0,
    downvotes: 0,
    img:
      "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bebe44f3e19ce7517a1_s62ArniRRC2JEeZRbH3jL8uA6RzCa3va7ifEc4I5P0g_WOAQOcs5GTn552DT5j6NcKcUQT0y3qiGr_cQcZWXrEHpjU5lOsdhE5XO5MTbvRe7V7hQ7JhkfoKWfOloevM8fewXC2-v.png",
    isFavourite: false
  },
  {
    id: 4,
    title: "Mem 4",
    upvotes: 0,
    downvotes: 0,
    img:
      "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bef80ae86897420ec75_dT0rPCkMXWdb_d6cCbcDILKXYJijN4mhwD3nJtocwSn0JZGYUgi7eGezDpGzTFW-G5cyYV8EpB9bgLO1j0oqn0dVXY3vsc8XRby6WtxZmu-q0qNRgpl-OpurJ0tjEszFUl74GiBn.png",
    isFavourite: false
  },
  {
    id: 5,
    title: "Mem 5",
    upvotes: 0,
    downvotes: 0,
    img:
      "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png",
    isFavourite: false
  }
];

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Regular />
          </Route>
          <Route path="/hot">
            <Hot />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/regular">
            <Regular />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

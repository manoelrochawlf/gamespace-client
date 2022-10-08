import { CardGame } from "pages/Home/Card";
import FavoriteGames from "./Favorites";
import GameGenres from "./Genres";


const GameList = () => {
    return (
        <>
            <h2>Recently Added</h2>
            <CardGame/>         
            <FavoriteGames/>
            <GameGenres/>
        </>           
     );
}
 
export default GameList;
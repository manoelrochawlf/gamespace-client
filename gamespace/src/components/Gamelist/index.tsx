import { CardGame } from "pages/Home/Card";
import FavoriteGames from "./Favorites";
import GameGenres from "./Genres";
import { AlignText } from "./Genres/styles";


const GameList = () => {
    return (
        <AlignText>
            <h2>Recently Added</h2>
            <CardGame/>         
            <FavoriteGames/>
            <GameGenres/>
        </AlignText>
                    
     );
}
 
export default GameList;
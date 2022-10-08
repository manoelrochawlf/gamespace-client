import { CardGame } from "pages/Home/Card";

const GameGenres = () => {
    return (
        <>
            <h2>Ação</h2>
                <CardGame/>
            <h2>Esportes</h2>
                <CardGame/>
            <h2>Luta</h2>
                <CardGame/>                     
        </>           
     );
}
 
export default GameGenres;
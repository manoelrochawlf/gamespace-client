import * as S from './styles'
import Banner from './banner';
import Button from 'components/Button';

import GameList from 'components/Gamelist';

const logo = require('assets/imgs/logo.png') as string;

const Home = () => {
	return (
        <S.Home>
                <header>
		        <S.HomeHeaderDetails>
				<div>                                      
                                        <S.HomeHeaderDetailsLogo>                                                       
                                                <img src={logo} alt="Logo" />                                                                                                                   
                                        </S.HomeHeaderDetailsLogo>
				</div>
                                <Button/>       
			</S.HomeHeaderDetails>
		</header>                  	        
                <Banner/>
                <GameList/>
        </S.Home>
);
};

export default Home;
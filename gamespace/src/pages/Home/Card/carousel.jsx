import Carousel from 'react-elastic-carousel'
import * as S from './styles'

const CarouselCards = ({...props}) => {

    return ( 
        <>
        <Carousel itemsToShow={5}>
                   {props.data && 
               props.data.map((game, i) =>
               
                    
               <S.Div key={game.id}>
          <S.Div2>
                   <picture>
                     <source
                       src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F877a7025891846be8f1d58326703b564"
                       type="image/webp" />

                     <S.Image
                       draggable={false}
                       loading="lazy"
                       src={game.CoverImageUrl} />
                   </picture>
                   <S.Imagesizer className="builder-image-sizer" />
                 </S.Div2><S.Div3>
                     <S.Div4>
                     {props.dataz && 
               props.dataz.map((genders, i) =>
                       <S.Div5 key={genders.id}>{genders.name}</S.Div5>
                       )}
                       <S.Div6>{game.Title}</S.Div6>
                     </S.Div4>
                   </S.Div3>
              </S.Div>
              
         ) }
        
                   </Carousel> 
        </>
     );
}
 
export default CarouselCards;
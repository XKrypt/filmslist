import { FilmCard, FilmImage, FilmTitle } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function FilmItem({filmTitle}) {
      
    return (
        <FilmCard>
            <FilmImage>
                <MaterialCommunityIcons name="film" size={72} color="white" />
            </FilmImage>
            <FilmTitle>{ filmTitle }

            </FilmTitle>
        </FilmCard>
    )
}
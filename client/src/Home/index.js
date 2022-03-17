import { Wrapper, Content, Bio, Title, List } from './Home.styles';
import BackgroundImg from '../img/backgroundOption1.JPG'

const Home = () => {
    return (
        <Wrapper img={BackgroundImg}>
            <Content>
            <Bio>Anna VanWalsen is a painter, illustrator, and book nerd living and working out of Columbus, Ohio. Using an array of media and styles, her work seeks to blur the line between the mundane and mystical. Her areas of specialities include mural making, design, portraiture, illustration, and project management. She lives in Columbus's Merion Village with her partner Nick and their two cats Stevie and Higgins.</Bio>

            <Title>SELECTED WORKS</Title>

            <ui>
                <List>Enchanted Portal mural for Alley Islands, Blockfort Gallery, Columbus, OH, April 2022</List>
                <List>The Color of Freedom Coloring Book Illustration Series for the Central Ohio Freedom Fund, Collaboration with C.O.F.F. and Wriply M. Benet, January 2022</List>
                <List>Central Ohio Freedom Fund Logo, Spring 2021</List>
                <List> Orchid & Ivy mural for The Alibi Cocktail and Bourbon Lounge, Columbus, OH, collaboration with Rachel Kaufman, October 2020</List>
                <List>Sun Seeker mini mural for Virtual Scrawl, August 2020</List>
                <List>Outta This World: Planetary Babes solo exhibition at Wanderlust Studio, Columbus, OH, October 2020</List>
                <List>The Greek Mythology Series solo exhibition at Saint James Tavern, Columbus, OH, September 2019</List>
                <List>Green Goddess, Lookout, and Pirate Friends for Alley Islands, Blockfort Gallery, Columbus, OH, July 2019</List>
                <List>Pink Lady mural for Breakaway Music Festival, June 2019</List>
                <List> Food Fight! murals and production management for Massachusetts Avenue Condado Tacos, IndianapoLists, IN, March 2019</List>
                <List>Enchanted Tacos select murals and production management for the Bridge Park Condado Tacos, Columbus, OH, February 2019</List>
                <List>Goth Rainbow select murals and production management for the Short North Condado Tacos, Columbus, OH, January 2019</List>
                <List>Margarita Queen select murals and production management for the Pinecrest Condado Tacos, Cleveland, OH, November 2018</List>
                <List>Cyber Skate select murals and production management for the Lawrenceville Condado Tacos, Pittsburgh, PA, October 2018</List>
                <List> Cloud Babe mural for Spirit Walls Art and Music Fest, Pittsburgh, PA, August 2018</List>
                <List>DJ Babe mural for Breakaway Music Festival, August 2018</List>
                <List> Sirens of Tequila select murals and production assistant for the Polaris Condado Tacos, Columbus, OH, August 2018</List>
                <List> Queso Queens select murals and production assistant for the Broad Ripple Condado Tacos, IndianapoLists, IN, June 2018</List>
                <List> Tiger Babe select murals and production assistant for The Banks Condado Tacos, Cincinnati, OH, April 2018</List>
                <List>Haunted Gates for Haunted Fest mural for Haunted Fest Music Festival, October 2017</List>
                <List> Gilded Mandala select murals for the Clintonville Condado Tacos, Columbus, OH, October 2017</List>
            </ui>
            </Content>
        </Wrapper>
    )
}

export default Home

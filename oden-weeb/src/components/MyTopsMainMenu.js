import React, { useState } from 'react';
import TopAnime from './TopAnime';
import TopEnding from './TopEnding';
import TopOpening from './TopOpening';

const MyTopsMainMenu = () => {
    const [openingOpen, setOpeningOpen] = useState(false)
    const [endingOpen, setEndingOpen] = useState(false)
    const [animeOpen, setAnimeOpen] = useState(false)

    function Popup(props) {
        return (props.trigger) ? (
            <div className="popup open">
                {props.children}
            </div>
        ) : "";
    }





    return (
        <main className="myTopsMainMenu">
            <span className="topMenuTitle"><h1>Retrouvez ici sous forme de Top mes classements totalement subjectif sur la culture manga !</h1></span>
            <section>
                <div onClick={() => setOpeningOpen(!openingOpen)} className="topsSections">
                    <h1> Top 10 Opening </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={openingOpen}>
                    <TopOpening />
                </Popup>
            </section>

            <section>
                <div className="topsSections" onClick={() => setEndingOpen(!endingOpen)}>
                    <h1> Top 10 Ending </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={endingOpen}>
                    <TopEnding />
                </Popup>
            </section>

            <section>
                <div className="topsSections" onClick={() => setAnimeOpen(!animeOpen)}>
                    <h1> Top 10 Anime </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={animeOpen}>
                    <TopAnime />
                </Popup>
            </section>
        </main>
    );
};

export default MyTopsMainMenu;
import '../styles/MainScreen.css';
import React, { useState }  from "react";
import Portfolio from './Portfolio';
import NewsGpt from './NewsGpt';

const MainScreen = () => {
    const [selectedOption, setSelectedOption] = useState('portfolio'); // Default to 'portfolio'
    return (
        <div className="mainscreen-container">
            <div className="sidebar">
                <button onClick={() => setSelectedOption('portfolio')}>Main Portfolio</button>
                <button onClick={() => setSelectedOption('news_gpt')}>News GPT</button>
                <button onClick={() => setSelectedOption('grid_bot')}>Grid Bot</button>
            </div>

            <div className="content">
                {selectedOption === 'portfolio' && <Portfolio />}
                {selectedOption === 'news_gpt' && <NewsGpt />}
                {selectedOption === 'grid_bot' && <div>Show Another Component</div>}
            </div>
        </div>
    );
}
export default MainScreen;
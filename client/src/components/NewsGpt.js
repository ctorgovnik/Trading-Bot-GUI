import React, { useState } from 'react';
import '../styles/NewsGpt.css';
const NewsGpt = () =>{

    const [isLiveTrading, setIsLiveTrading] = useState(false);
    const handleControl = (action) => {
        switch (action) {
            case 'start':
                // Make API call to start your service
                break;
            case 'stop':
                // Make API call to stop your service
                break;
            default:
                console.error('Unknown action');
        }
    }

    const handleToggleTradingMode = async (event) => {
        const mode = event.target.checked ? 'live' : 'paper';
        try {
            const response = await fetch('/api/set-trading-mode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ mode: mode })
            });
            const data = await response.json();
            if (data.status === 'success') {
                setIsLiveTrading(prevState => !prevState);
            }
        } catch (error) {
            console.error("Error setting trading mode:", error);
        }
    };

    return (
        <div>
            <h1 className="news-gpt-title">News GPT Control Center</h1>

            <div className="control-panel">
                <button onClick={() => handleControl('start')}>Start</button>
                <button onClick={() => handleControl('stop')}>Stop</button>
                <div className="toggle-switch">
                    <input
                        type="checkbox"
                        id="tradingMode"
                        checked={isLiveTrading}
                        onChange={handleToggleTradingMode}
                    />
                    <label htmlFor="tradingMode" className="slider"></label>
                </div>
                <span>{isLiveTrading ? 'Live Trading' : 'Paper Trading'}</span>

            </div>
        </div>
    );
}

export default NewsGpt;

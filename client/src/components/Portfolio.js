import React from 'react';
import '../styles/Portfolio.css';
const Portfolio = () =>{
    return (
        <div className="container">
            <h1 className="portfolio-title">Portfolio Dashboard</h1>
            {/* Total Balance Widget */}
            <div className="widget header-widget">
                <h1>$10,000</h1> {/* Placeholder Value */}
                <p>+5% ($500)</p> {/* Placeholder Value */}
            </div>

            {/* Chart Widget */}
            <div className="widget chart-widget">
                Chart Goes Here
            </div>

            {/* Recent Purchases Widget */}
            <div className="widget recent-purchases-widget">
                <table>
                    <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date/Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Placeholder Rows */}
                    <tr>
                        <td>Bitcoin</td>
                        <td>$45,000</td>
                        <td>0.1</td>
                        <td>10 Aug 2023</td>
                    </tr>
                    {/* Add more rows as required */}
                    </tbody>
                </table>
            </div>

            {/* Biggest Gainers & Losers Widget */}
            <div className="widget gainers-losers-widget">
                <div>
                    <h3>Gainers</h3>
                    {/* List of gainers goes here */}
                </div>
                <div>
                    <h3>Losers</h3>
                    {/* List of losers goes here */}
                </div>
            </div>
        </div>
    );

}

export default Portfolio;

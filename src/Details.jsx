import React, { useState } from 'react'

function Details() {

    const [news, setNews] = useState([
        {
            source: {
                id: null,
                name: "CNBC"
            },
            author: "Pia Singh",
            title:
                "Stocks making the biggest moves premarket: Activision Blizzard, Chipotle, First Republic Bank & more - CNBC",
            description:
                "First Republic Bank shares dropped, fueling its potential to again weigh on the broader banking sector. Other regional bank stocks rose before the bell.",
            url:
                "https://www.cnbc.com/2023/04/26/stocks-making-the-biggest-moves-premarket-atvi-cmg-frc.html",
            urlToImage:
                "https://image.cnbcfm.com/api/v1/image/107210798-16790685572023-03-17t135606z_1344895251_rc21vz9clcdl_rtrmadp_0_global-banks-usa-adeyemo.jpeg?v=1682511576&w=1920&h=1080",
            publishedAt: "2023-04-26T12:19:36Z",
            content:
                "Check out the companies making headlines before the bell on Wednesday.\r\nEnphase Energy The solar inverter company slid 16% after reporting disappointing revenue guidance for the second quarter. The c… [+4628 chars]"
        }
    ]);

    return (
        <div className='container'>
            <div className="conatiner" style={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"
            }}>
                <img src={news[0].urlToImage} style={{ maxWidth: "60rem" }} alt="news image" srcset="" />
                <h3 style={{ width: "60rem" }}>{news[0].title}</h3>
                <p style={{ width: "60rem" }}>{news[0].description}</p>
            </div>
        </div>
    )
}

export default Details
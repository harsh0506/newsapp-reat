import "./App.css";
import { useState, useEffect } from "react";
import News from "./News"
import "./App.css"
export default function App() {

  const [key, setKey] = useState("India");
  const [apiCalls, setApiCalls] = useState(0);


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

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${key}&apiKey=6af2af1ad4e64d7f9fa625a08a2a8def`;
    const today = new Date().toISOString().slice(0, 10); // get today's date in YYYY-MM-DD format
    const cachedData = localStorage.getItem(`${key}-${today}`);
    if (cachedData) {
      // if cached data is present, parse it and set state
      setNews(JSON.parse(cachedData).articles);
      console.log("cached data")
    }
    else {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setApiCalls(apiCalls => apiCalls += 1)
          console.log(data);
          console.log("non cached data")
          localStorage.setItem(`${key}-${today}`, JSON.stringify(data));
          setNews(data.articles);
        })
        .catch((error) => console.log(error));
    }
  }, [key]);


  useEffect(() => {
    function deleteYesterdaySportsData() {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10); // get yesterday's date in YYYY-MM-DD format
      localStorage.removeItem(`${key}-${yesterday}`);
      console.log(yesterday)
    }

    const intervalId = setInterval(deleteYesterdaySportsData, 86400000); // run once every day

    return () => clearInterval(intervalId);
  }, []);

  const items = ["sports", "india", "bollywood", "agriculture", "stock_market", "buisness", "military", "technology"]

  return (
    // Your JSX code here
    <>
      <h1>Latest News</h1>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
      }}>
        {
          items.map((item) => <div><button style={{
            color: "white"
          }} onClick={() => setKey(item)}>{item}</button></div>)
        }
      </div>
      {key}
      <div class="grid-container">
        {news.map(article => (

          <div key={article.title} className="containers">
            <div className="row">
              <div className="col">
                <News
                  img={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

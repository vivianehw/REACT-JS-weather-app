import React, { useEffect, useState } from 'react';
import './App.css';

import url from './services/url';
import apiKey from './services/apiKey';
import OptionsDisplayer from './components/optionsDisplayer';
import InfoDisplayer from './components/infoDisplayer';

// https://t4.ftcdn.net/jpg/03/85/33/67/360_F_385336747_lCcNeRpqrhmwr3TiToK4DokmwljzEY1q.jpg

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [unit, setUnit] = useState('metric');
  const [lang, setLang] = useState('pt_br');

  const pull_data = (unitData, langData) => {
    setUnit(unitData);
    setLang(langData);
  }

  /*
  useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch();
    // convert the data to json
    const json = await response.json();

    // set state with the result
    setData(json);
  }

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);;
}, [])
*/

  /*
    useEffect(() => {
      url.get(`weather?appid=${apiKey}&lat=44.34&lon=10.99&${unit}&${lang}`)
        .then((res) => {
          setWeatherData(res.data);
        })
    }, []);
  */

  useEffect(() => {
    const getData = async () => {
      const data = await url.get(
        `weather?appid=${apiKey}&lat=44.34&lon=10.99&units=${unit}&lang=${lang}`
      ).then((res) => {
        setWeatherData(res.data);
        setLoading(false);
      })
    };

    getData().catch(console.error)
  }, [])

    if (loading === true) {
      return(
        <div>
          loading...
        </div>
      )
    } else {
      return (
        <div className="App" >
          <header className="App-header">
            <OptionsDisplayer push_data={pull_data} />
          </header>
    
          <section className="App-body-section">
            <InfoDisplayer data={weatherData} />
          </section>
    
          <footer className="App-footer">
            <p>teste</p>
          </footer>
        </div>
      );
    }
}

export default App;

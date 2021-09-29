import './App.css';
// import Card from './Components/Card/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@restart/ui/esm/Button';
// import { Col, Row, Spinner } from 'react-bootstrap';
// import { useEffect, useState } from 'react';
// import News from './Components/News/News';
// import { ButtonBase, buttonBaseClasses, Rating } from '@mui/material';
// import { Button } from '@mui/material';
// import Newspaper from './Components/Newspaper/Newspaper';


// const c = [];
// const.number = c.length ===0 ? 5:10;


function App() {
  /*  const [news, setNews] = useState([])
   useEffect(() => {
     fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=ccfcab558b334815a6fa3b312b9cd193')
       .then(res => res.json())
       .then(data => setNews(data.articles));
   }, []) */


  return (
    <div className="App">
      {/*[here the below line is the main condition, there are two condition seperate between the : sign and check which condition is true and show the output linke that] 

       {news.length===0 ? <span>Loading</span> : <span>Done</span>} */}
      {/* this previous single line code we write elaborately in below code */}


      {/* or */}


      {/*  {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw} ></News>)
            }
          </Row>
      }
 */}
      {/* <Button variant="contained">My First button</Button>
      <Button variant="text">Text</Button> */}
      {/* <Newspaper></Newspaper> */}




      <p className='bg-danger-200 text-4xl hover:text-blue-900'>This is my first tailwind style text</p>
      <a href="#" class="no-underline ...">Link with no underline</a>

      <p className='text-primary'>hello my text</p>
      <p className='text-danger'>hello my text</p>

    </div>

  );
}

export default App;

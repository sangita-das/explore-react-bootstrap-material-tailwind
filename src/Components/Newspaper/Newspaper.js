import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Newses from '../Newses/Newses';


const Newspaper = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2021-09-27&to=2021-09-27&sortBy=popularity&apiKey=ccfcab558b334815a6fa3b312b9cd193')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          articles.map(article => <Grid item xs={2} sm={4} md={4}>
            <Newses article={article}></Newses>
          </Grid>)
        }
      </Grid>
    </Box>
  );
};

export default Newspaper;
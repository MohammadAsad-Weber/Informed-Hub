import React, { useState, useEffect } from 'react';

import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';
import Spinner from './Spinner';

export default function NewsArea({ category, apiKey }) {

  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(10);

  const capitalise = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  document.title = `Informed Hub - ${capitalise(category)}`;

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&page=${page}&pageSize=12&apiKey=${apiKey}`;
    const response = await fetch(url);

    setProgress(30)
    const data = await response.json();
    setProgress(60)

    setArticles(data.articles)
    setTotalResults(data.totalResults)
    setLoading(false)
    setProgress(100)
  }

  useEffect(() => {
    updateNews()
  }, [])

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&page=${nextPage}&pageSize=12&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    setArticles(articles.concat(data.articles))
    setTotalResults(data.totalResults)
    setPage(nextPage)
  }

  return (
    <>
      <LoadingBar
        height={2}
        shadow={true}
        color='blue'
        progress={progress}
      />
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div id='newsArea'>
          {articles.map((element, index) => {
            return <NewsItem key={index}
              img={element.urlToImage}
              headline={element.title ? element.title : 'Breaking News'}
              description={element.description ? element.description : 'Some Description Here...'}
              url={element.url}
              date={element.publishedAt}
              source={element.source.name}
            />
          })}
        </div>
      </InfiniteScroll>
    </>
  )
}
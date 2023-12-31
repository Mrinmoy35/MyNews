import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    //document.title = `${capitalizeFirstLetter(props.category)} - MyNews`;
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [url,SetUrl]=useState('')


    const updateNews = async () => {
        
        SetUrl(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`);
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    // useEffect(() => {
    //     document.title = `${capitalizeFirstLetter(props.category)} - MyNews`;
    //     updateNews();
    //     // eslint-disable-next-line
    // }, [])

    useEffect(()=>{
        document.title = `${capitalizeFirstLetter(props.category)} - MyNews`;
        updateNews();
    },[url, props.category])
    


    /* handlePrevClick = async () => {
         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&api={apiKey}&pages=${state.page - 1}&pageSize=${props.pageSize}`;
 
         setState({loading:true});
         let data = await fetch(url);
         let parsedData = await data.json()
         setState({loading:false});
         setState({
             page: state.page - 1,
             articles: parsedData.articles,
             loading:false
         });
         setState({ page: state.page - 1 })
         updateNews();
     } */
    /* handleNextClick = async () => {
         /*
         if (!(state.page + 1 > Math.ceil(state.totalResults / props.pageSize))){
             let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&api={apiKey}&pages=${state.page + 1}&pageSize=${props.pageSize}`;
 
             setState({loading:true});
             let data = await fetch(url);
             let parsedData = await data.json();
             setState({loading:false});
             setState({
                 page: state.page + 1,
                 articles: parsedData.articles,
                 loading:false
             });
     }
     
         setState({ page: state.page + 1 })
         updateNews();
     }*/

    const fetchMoreData = async () => {

        SetUrl(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`);
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)



    };
    //setArticles(articles.concat(parsedData.articles))
    //setTotalResults(parsedData.totalResults)


    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>MyNews - Top {capitalizeFirstLetter(props.category)} headlines  </h1>

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            >
                <div className="container">


                    <div className="row">
                        {articles.map ((element) => {
                            return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title: ""} description={element.description ? element.description : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                                </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
        /*<div className="container d-flex justify-content-between">
            <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
            <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button> to addprevious and next*/




    )
}

    News.defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

export default News;

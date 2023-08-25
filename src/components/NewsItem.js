import React from 'react'

const NewsItem = (props)=> {
    let { title, description, imgurl, newsurl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className=" badge rounded-pill bg-danger">{source}</span>
            <img src={!imgurl ? "https://images.hindustantimes.com/tech/img/2023/08/21/1600x900/g357f4_1692605903382_1692605903600.png" : imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...
              </h5>
              <p className="card-text">{description}.....</p>
              <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {date}</small></p>
              <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
          </div>
        </div>
      </div>
    )
}


export default NewsItem

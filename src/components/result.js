import React, { Component } from 'react';
import NewsCard from './newsCard.js';
import Spinner from './spinner.js';
import PropTypes from 'prop-types';

export class Result extends Component {

    static defaultProps = {
        query: 'cricket'
    }
    static propTypes = {
      query: PropTypes.string
    }
    constructor(){
        super();
        this.state={
         articles :  [],
         loading : false,
         category: super.category
        }
      }
      
     async componentDidMount(){
       
        let url = `https://newsapi.org/v2/everything?q=${this.state.category}&from=2021-11-29&to=2021-11-29&sortBy=popularity&apiKey=e493ea6f81404e80ad08346d2437febd`;
        console.log(this.state.category)
        this.setState({ loading: true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles : parseData.articles, loading : false})
      }
    
    render(){
        return(
          <>
          {this.state.loading && <Spinner/>}
          {this.state.articles.map((element)=>{
            return <NewsCard key={element.url} urltoImage={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
          })}
          </>
        )
    }
}
 
export default Result
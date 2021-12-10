import React, { Component } from 'react';
import NewsCard from './newsCard.js';
import Spinner from './spinner.js';

export class News extends Component {  
    constructor(){
        super();
        this.state={
         articles :  [],
         loading : false
        }
      }
      
     async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e493ea6f81404e80ad08346d2437febd";
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles : parseData.articles,loading : false})
      }
    
    render(){
        return(
          <>
          {this.state.loading && <Spinner/>}
          {this.state.articles ? this.state.articles.map((elements)=>{
            return <NewsCard key={elements.url} urltoImage={elements.urlToImage} title={elements.title} description={elements.description} url={elements.url}/>
          }) : <Spinner/> }
          </>
        )
    }
}
 
export default News
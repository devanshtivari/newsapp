import React, { Component } from 'react';
import NewsCard from './newsCard.js';
import Spinner from './spinner.js'

export class NewsGlobal extends Component {
    constructor(){
        super();
        this.state={
         articles :  [],
         loading : false
        }
      }
      
      async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e493ea6f81404e80ad08346d2437febd";
        this.setState({loading : true})
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
 
export default NewsGlobal
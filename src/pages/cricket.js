import React, { Component } from 'react';
import NewsCard from '../components/newsCard.js';
import Spinner from '../components/spinner.js';
import PropTypes from 'prop-types';

export class Cricket extends Component {

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
         loading : false
        }
      }
      
     async componentDidMount(){
        let url = `https://newsapi.org/v2/everything?q=cricket&from=2021-11-29&to=2021-11-29&sortBy=popularity&apiKey=e493ea6f81404e80ad08346d2437febd`;
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
 
export default Cricket
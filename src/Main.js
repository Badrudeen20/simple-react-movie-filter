import React from 'react';
import Form from './Form';
import Movie from './Movie';
import './griding.css'
export default  class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      search: ''
    };   
    
  }
  
  updateSearch(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
   
  }
  

  
  render() {
  //  const { search } = this.state;
    return(
      <main>
        
        <Form search={this.state.search} updateSearch={this.updateSearch}/>
        
        <section id="movies">
        {
            this.props.movies
              .filter(movie => movie.title.toLowerCase().includes(this.state.search.toLowerCase()))
              .map(movie => <Movie movie={movie}/>)
          }
          
        </section>
      
      </main>
    )
  }
}
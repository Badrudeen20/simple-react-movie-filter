import React from 'react';
 
 export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.updateSearch = this.updateSearch.bind(this);
    }
    updateSearch(newSearch) {
      this.props.updateSearch(newSearch)
    
    }
  
    render() {
      return(
        <div> 
          <div id="search-input">
             
                <h5>Movie Filter</h5>
            <input type="search" 
            className="form-control"
              placeholder="Find Movies..."
              value={this.props.search} 
              onChange={this.updateSearch}
            />
           
          </div>
          
        </div>
      )
    }
  }
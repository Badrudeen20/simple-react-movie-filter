import React from 'react';
import Main from './Main';

const movies = [
  {
    title: 'Mad Max: Fury Road',
    genre : ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.3,
    poster: 'https://s-media-cache-ak0.pinimg.com/originals/ce/0c/93/ce0c93d50ae68922d1f4f6667c95e1a8.jpg'
  },
  {
    title: 'The Hunger Games: ',
    genre: ['Adventure', 'Sci-Fi', 'Thriller'],
    rating: 6.8,
    poster: 'https://1.bp.blogspot.com/-Ds0sudZmSq4/Vgxrr75E77I/AAAAAAAAREo/sZkZW5YMDTw/s1600/Mockingjay%2BPart%2B1.jpg'
  },
  {
    title: 'Jurassic World',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 7.2,
    poster: 'https://s-media-cache-ak0.pinimg.com/736x/0b/ab/9a/0bab9a9c671dbb7aa8626eec44a0195f.jpg'
  },
  {
    title: 'Aquaman',
    genre: ['Adventure', 'Drame', 'Thriller'],
    rating: 7.4,
    poster: 'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg'
  },
  {
    title: 'Insurgent',
    genre: ['Adventure', 'Sci-Fi', 'Thriller'],
    rating: 6.4,
    poster: 'http://cdn2-www.comingsoon.net/assets/uploads/2015/01/FIN16_Insurgent_Guns_1Sht_Trim-1422379653-mtv-14224534611.jpg'
  },
  {
    title: 'Sicario',
    genre: ['Action', 'Crime', 'Drama'],
    rating: 8,
    poster: 'https://s-media-cache-ak0.pinimg.com/564x/7f/a1/5c/7fa15c26aa2cb48562ea37bbc177be74.jpg'
  }
];
 
 export default class App extends React.Component {
    constructor(props) {
      super(props);
       this.state = {
         movies: movies
       }
    }
    render() {
    // const {movies} = this.state;
      return(
     
          <Main movies={this.state.movies}/>
      
      )
    }
  }
// Create a new component. This component should produce some HTML.
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD7qkV454AlBbaTULZEsVgoRiNuSud3lFI';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
     // the result 'data' we are getting are videos, so we can use video as the parameter. since setting state is videos: videos, we can just do videos alone
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }


    // sending the video array to the video list

  // calling the videoSearch function ever 300 miliseconds to make it less laggy
  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);


    return (
      <div>
         <SearchBar onSearchTermChange={videoSearch} />
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
      </div>
    );
  }
}

// Take this component's HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));


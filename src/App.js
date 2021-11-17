import {Component} from 'react';
import './App.css';
import imgsocial from './images/social.svg';
import treeswing from './images/tree_swing.svg';
import Card from './components/card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person1: [],
      person2: [],
    }
  }

  componentDidMount() {
    this.fetchFirstPerson();
    this.fetchSecondPerson();
  }

  fetchFirstPerson = () => {
    fetch("https://randomuser.me/api")
      .then((data) => data.json())
      .then((json) => {
        const result = [json.results[0].name.first + " " + json.results[0].name.last,
                        json.results[0].phone,
                        json.results[0].location.country,
                        json.results[0].picture.large]
        this.setState({person1: result});
        
      })
  };

  fetchSecondPerson = () => {
    fetch("https://randomuser.me/api")
      .then((data) => data.json())
      .then((json) => {
        const result = [json.results[0].name.first + " " + json.results[0].name.last,
                        json.results[0].phone,
                        json.results[0].location.country,
                        json.results[0].picture.large]
        this.setState({person2: result});
    })
  };

  handleClickFind = () => {
    this.fetchFirstPerson();
    this.fetchSecondPerson();
  }

  render() {
    const { person1, person2 } = this.state;
    return (
      <div className="App">
        <div className="header">
          <img className="tree-swing" src={treeswing} alt="tree-swing" />
          <div className="title-app">
            <h1 className="find-friend-text">FindFriend</h1>
            <h1 className="app-text">App</h1>
          </div>
        </div>
        <div className="container">
          <div className="col-1">
            <Card stateApp={person1} />
          </div>
          <div className="col-2">
            <Card stateApp={person2} />
          </div>
        </div>
        <button type="button" className="btn btn-primary button-find" onClick={this.handleClickFind}>Find</button>
        <div className="bottom">
          <img className="img-social" src={imgsocial} alt="social" />
        </div>
      </div>
    );
  }
}

export default App;

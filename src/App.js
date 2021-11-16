import {Component} from 'react';
import './App.css';
import imgsocial from './images/social.svg';
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
                        json.results[0].location.country]
        this.setState({person1: result});
        
      })
  };

  fetchSecondPerson = () => {
    fetch("https://randomuser.me/api")
      .then((data) => data.json())
      .then((json) => {
        const result = [json.results[0].name.first + " " + json.results[0].name.last,
                        json.results[0].phone,
                        json.results[0].location.country]
        this.setState({person2: result});
    })
  };

  render() {
    const { person1, person2 } = this.state;
    console.log(person1);
    return (
      <div className="App">
        <div className="header">
          <img className="img-social" src={imgsocial} alt="social" />
          <div className="title-app">
            <h1 className="find-friend-text">FindFriend</h1>
            <h1 className="app-text">App</h1>
          </div>
        </div>
        <div className="container">
            <Card stateApp={person1} />
            <Card stateApp={person2} />
        </div>
      </div>
    );
  }
}

export default App;

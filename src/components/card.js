import {Component} from 'react';
import React from 'react';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box-card">
                <img className="img-card" src={this.props.stateApp[3]} alt="" />
                <p style={{color: "#FD6584", fontWeight: "bold"}}>{this.props.stateApp[0]}</p>
                <p>{this.props.stateApp[1]}</p>
                <p>{this.props.stateApp[2]}</p>
            </div>
        );
    }
}

export default Card;
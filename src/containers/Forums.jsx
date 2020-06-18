import React, { Component } from 'react';
import Messages from '../components/Forum-Components/Messages'
import Topics from '../components/Forum-Components/Topics'

class Forums extends Component {
    constructor() {
        super();
        this.state = {
            selectedTopic: false
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div>
                    <Topics />
                </div>
                <div>
                    <Messages />
                </div>
            </div>
        );
    }
}

export default Forums;

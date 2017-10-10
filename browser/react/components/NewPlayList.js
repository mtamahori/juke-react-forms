import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class NewPlaylist extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state)
    }


    // componentDidMount() {
    //     axios.get('/api/artists')
    //         .then(res => res.data)
    //         .then(artists => this.setState({ artists }));
    // }

    render() {
        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text"
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success">Create Playlist
                                    </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

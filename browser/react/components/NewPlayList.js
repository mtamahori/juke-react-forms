import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




export default class NewPlaylist extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: '',
            disableSubmit: true,
            dirty: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let input = event.target.value
        this.setState({ inputValue: input });
        this.setState({ disableSubmit: (input.length > 16 || input.length < 1) })
        this.setState({ dirty: true })
    }

    // verifySubmit() {
    // }


    handleSubmit(event) {
        event.preventDefault()
        this.props.addPlaylist(this.state.inputValue)
        this.setState({ inputValue: "" })
        this.setState({ dirty: false })
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
                        {this.state.dirty && this.state.inputValue.length > 16 &&
                            (<div className="alert alert-warning"   >Please shorten the name</div>)
                        }
                        {this.state.dirty && this.state.inputValue.length === 0 &&
                            (<div className="alert alert-warning"   >Please enter a name</div>)
                        }
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text" value={this.state.inputValue}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button id="playlistsubmit" type="submit" className="btn btn-success" disabled={this.state.disableSubmit}>Create Playlist
                                    </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

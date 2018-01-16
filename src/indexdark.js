import React, { Component } from 'react';
import './App.css';
import { fetchGithubInfo, responseHandling } from './githubservice';

class DarkGithub extends Component {

	constructor(props) {
		super(props);
		this.state = {error:false, data: {}}
	}

	acquireFeeds = (json) => {
    		if(json === 'error') {this.setState({  error: true}); return};          
          	this.setState({ data: json });
  		};

    getFeeds = (criteria) => {
     	fetchGithubInfo(criteria).then(responseHandling).then( this.acquireFeeds);
    };

	componentDidMount() {
		this.getFeeds(this.props.user);
	}

	render(){

		

		return(
			<div className = {styles.container}>
			    <a href={this.state.data.html_url}>
			    <div className = {styles.flame}>
					<img alt="" className = {styles.avatar} src={this.state.data.avatar_url} />
					<div></div>
				</div>
				</a>
				<hr/>
				<a className = {styles.username} href={this.state.data.html_url}>
					<p>
						<i className="fa fa-github" aria-hidden="true"></i>
					{this.state.data.login}</p>
				</a>
				<p className = {styles.location}>{this.state.data.location}</p>
				<div className = {styles.info}>
					<div>
						<p>{this.state.data.public_gists}</p>
						<p>Gists</p>
					</div>
					<p>{this.state.data.name}</p>
					<div>
						<p>{this.state.data.public_repos}</p>
						<p>Repos</p>
					</div>
				</div>					
			</div>
		)

	}

} 

export default DarkGithub;
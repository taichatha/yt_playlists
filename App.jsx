App = React.createClass({

	validateUrl() {

		var url = React.findDOMNode(this.refs.playlist).value.trim();
		var expression = /(www\.)?youtube.com\/watch\?v=[-a-zA-Z0-9@:%._\+~#=]*&list=[-a-zA-Z0-9@:%._\+~#=]*/g;
		var regex = new RegExp(expression);
		var t = 'www.google.com';
		  if (url.match(regex) )
		 {
		   alert("Successful match");
		 } else {
		   alert("No match");
		 }
		
	},


	render(){
		return (

			<div className="container">
				<h1>Youtube Playlist View Chart</h1>
				<form className="url" onSubmit={this.validateUrl}>
					<input type="text" ref="playlist" />
					<button type="submit">Get Stats</button>
				</form>
			</div>
			);
	}

});
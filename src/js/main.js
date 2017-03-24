var React = require('react');
var ReactDOM = require('react-dom')

var MainInteraface = React.createClass({
	render: function() {
		return (
			<h1>React is now Reacting!</h1>
		);
	}
});

var app = document.getElementById('app');
ReactDOM.render(
	<MainInteraface />,
	app
)
var React = require('react');
var b = require('b_').with('y-select');

var Button = require('y-button');

var Style = require('./index.css!');

var YSelect = {
	open: function (e) {
		this.setState({ opened: !this.state.opened });
	},

	getInitialState: function () {
		return { opened: this.props.opened };
	},

	render: function () {
		var selectClasses = b({
			theme: this.props.theme || 'normal',
			size: this.props.size,
			opened: this.state.opened
		});

		return (
			<div className={selectClasses} onClick={this.open}>
				<Button size={this.props.size}>
					<span className={b('text')}>
						{this.props.value}
					</span>
				</Button>
			</div>
		);
	}
};

module.exports = React.createClass(YSelect);
module.exports.Class = YSelect;

var Option = {
	render: function () {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
};

module.exports.Option = React.createClass(Option);
module.exports.Option.Class = Option;

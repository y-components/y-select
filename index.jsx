var React = require('react');
var b = require('b_').with('y-select');

var Button = require('y-button');

var Style = require('./index.css!');

var YSelect = {
	toggle: function (e) {
		this.setState({ opened: !this.state.opened });
	},

	getInitialState: function () {
		return {
			selected: this.props.selected || 0,
			opened: this.props.opened
		};
	},

	setSelected: function (index, e) {
		this.setState({ selected: index });
		e.preventDefault();
	},

	getOptions: function () {
		var self = this;

		var selectOptions = this.props.children.map(function (option, index) {
			var classes = b('option', {
				theme: self.props.theme || 'normal',
				selected: self.state.selected === index
			});

			return (
				<div key={index} className={classes} onClick={self.setSelected.bind(self, index)}>
					{option.props.value}
				</div>
			);
		});

		return (
			<div className={b('popup')}>
				{selectOptions}
			</div>
		);
	},

	render: function () {
		var selectClasses = b({
			theme: this.props.theme || 'normal',
			size: this.props.size,
			opened: this.state.opened
		});

		return (
			<div className={selectClasses} onClick={this.toggle}>
				<Button size={this.props.size}>
					<span className={b('text')}>
						{this.props.children[this.state.selected].props.value}
					</span>
				</Button>
				{this.getOptions()}
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

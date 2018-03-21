import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import MultipleValueTextInputItem from './MultipleValueTextInputItem';

const propTypes = {
	values: PropTypes.arrayOf(PropTypes.string).isRequired,
	onItemAdded: PropTypes.func.isRequired,
	onItemDeleted: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	helpMessage: PropTypes.string
};

const defaultProps = {
	placeholder: '',
	helpMessage: ''
};

class MultipleValueTextInput extends Component {
	constructor() {
		super();
		this.state = {
			values: [],
			value: ''
		};
		this.handleKeypress = this.handleKeypress.bind(this);
		this.handleValueChange = this.handleValueChange.bind(this);
		this.handleItemAdd = this.handleItemAdd.bind(this);
		this.handleItemRemove = this.handleItemRemove.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		const { values } = nextProps;
		this.setState({
			values
		});
	}
	handleKeypress(e) {
		const { onItemAdded } = this.props;
		// 13: Enter, 44: Comma
		if (e.charCode === 13 || e.charCode === 44) {
			e.preventDefault();
			this.handleItemAdd(e.target.value, onItemAdded);
		}
	}
	handleValueChange(e) {
		this.setState({ value: e.target.value });
	}
	handleItemAdd(value, onItemAdded) {
		if (this.state.values.includes(value)) {
			this.setState({ value: '' });
			return;
		}
		this.setState({
			values: this.state.values.concat(value),
			value: ''
		});
		onItemAdded(value);
	}
	handleItemRemove(value) {
		this.props.onItemDeleted(value);
		const currentValues = this.state.values;
		const newValues = currentValues.filter(v => v !== value);
		this.setState({ values: newValues });
	}
	render() {
		const {
			placeholder, label, name, helpMessage
		} = this.props;
		const { values } = this.state;
		const valueDisplays = values.map(v => <MultipleValueTextInputItem value={v} key={v} />);
		return (
			<div>
				<Row>
					<Col>
						<FormGroup>
							<Label htmlFor={name}>{label}</Label>
							<div className="multiple-value-text-input-item-container">
								{valueDisplays}
							</div>
							<Input
								name={name}
								placeholder={placeholder}
								value={this.state.value}
								type="text"
								onKeyPress={this.handleKeypress}
								onChange={this.handleValueChange}
							/>
							<FormText>{helpMessage}</FormText>
						</FormGroup>
					</Col>
				</Row>
			</div>
		);
	}
}

MultipleValueTextInput.propTypes = propTypes;
MultipleValueTextInput.defaultProps = defaultProps;
export default MultipleValueTextInput;

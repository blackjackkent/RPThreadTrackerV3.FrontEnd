import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Label, Input, FormText } from 'reactstrap';

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
			const { value } = e.target;
			this.setState({
				values: this.state.values.concat(value),
				value: ''
			});
			onItemAdded(value);
		}
	}
	handleValueChange(e) {
		this.setState({ value: e.target.value });
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
		const valueDisplays = [];
		if (values) {
			for (let i = 0; i < values.length; i++) {
				const element = (
					<span className="multiple-value-text-input-item" key={`input-values-${i}`}>
						{values[i]}{' '}
						<span
							data-value={values[i]}
							tabIndex="-1"
							role="button"
							onKeyPress={() => this.handleItemRemove(values[i])}
							onClick={() => this.handleItemRemove(values[i])}
						>
							<i
								className="fas fa-times"
							/>
						</span>
					</span>
				);
				valueDisplays.push(element);
			}
		}
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

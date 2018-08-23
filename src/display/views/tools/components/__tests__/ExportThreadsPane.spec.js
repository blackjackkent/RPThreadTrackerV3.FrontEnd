// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../../config/tests/helpers.unit';
import ExportThreadsPane from '../ExportThreadsPane';
// #endregion imports

const createTestProps = propOverrides => ({
	onExportRequest: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<ExportThreadsPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('onExportRequest', () => {
		it('should be called when form is submitted', () => {
			const onExportRequest = jest.fn();
			const props = createTestProps({ onExportRequest });
			const element = shallow(<ExportThreadsPane {...props} />);
			const button = getSpecWrapper(element, 'export-threads-form-submit-button');
			button.simulate('click');
			expect(onExportRequest).toHaveBeenCalledTimes(1);
		});
	});
	describe('handleInputChange', () => {
		it('should handle checkbox checked update', () => {
			const event = { target: { type: 'checkbox', name: 'includeHiatused', checked: true } };
			const onExportRequest = jest.fn();
			const props = createTestProps({ onExportRequest });
			const element = shallow(<ExportThreadsPane {...props} />);
			element.instance().handleInputChange(event);
			element.update();
			const button = getSpecWrapper(element, 'export-threads-form-submit-button');
			button.simulate('click');
			expect(onExportRequest).toHaveBeenCalledTimes(1);
			expect(onExportRequest).toHaveBeenLastCalledWith(true, false);
		});
		it('should handle checkbox unchecked update', () => {
			const event = { target: { type: 'checkbox', name: 'includeHiatused', checked: false } };
			const onExportRequest = jest.fn();
			const props = createTestProps({ onExportRequest });
			const element = shallow(<ExportThreadsPane {...props} />);
			element.instance().handleInputChange(event);
			element.update();
			const button = getSpecWrapper(element, 'export-threads-form-submit-button');
			button.simulate('click');
			expect(onExportRequest).toHaveBeenCalledTimes(1);
			expect(onExportRequest).toHaveBeenLastCalledWith(false, false);
		});
	});
});

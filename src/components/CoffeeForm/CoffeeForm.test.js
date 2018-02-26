import React from 'react';
import ReactDOM from 'react-dom';
import { CoffeeForm, mapDispatchToProps } from './CoffeeForm';
import { shallow } from 'enzyme';
import * as firebaseFunctions from '../../Utilities/firebaseFunctions';

describe('CoffeeForm', () => {
  it('should exist', () => {
    const wrapper = shallow(<CoffeeForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should start with a state of empty strings', () => {
    const expectedState = {
      name:'',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: '',
      email: '',
      errorState:'',
      additionalComments: ''
    };

    const wrapper = shallow(<CoffeeForm />);

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update state if the name field is typed into', () => {
    const expectedState = {
      name:'Jordan',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: '',
      email: '',
      errorState: '',
      additionalComments: ''
    };
    const wrapper = shallow(<CoffeeForm />)
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Jordan'
    }}

    wrapper.find('input').first().simulate('change', mockEvent);
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should update state of every input if they are modified', () => {
    const expectedState = {
      name:'1',
      overallScore: '1',
      region: '1',
      acidity: '1',
      body: '1',
      sweetness: '1',
      tactile: '1',
      email: '1',
      overallImpression: '1', 
      roaster: '1',
      errorState: '',
      additionalComments: '1'
    };

    const wrapper = shallow(<CoffeeForm />);

    const inputs = wrapper.find('input');
    const mockEventCreator = (inputName) => {
      return { 
        target: {
          name: inputName,
          value: '1'
        } 
      }
    };

    inputs.forEach( input => {
      input.simulate('change', mockEventCreator(input.prop('name')))
    });

    expect(wrapper.state()).toEqual(expectedState)
  });

  it('handleSubmit should reset the values of the input fields', () => {
    const expectedState = {
      name:'',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: '',
      email: '',
      errorState: '',
      additionalComments: ''
    };
    const mockEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(<CoffeeForm addCoffee={jest.fn()}/>);
    wrapper.setState({
      name: 'Marcus Mumford'
    })

    wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should set an error state if there is a problem with handleSubmit', () => {
    const expectedState = {
      name:'',
      overallScore: '',
      region: '',
      acidity: '',
      body: '',
      sweetness: '',
      tactile: '',
      overallImpression: '', 
      roaster: '',
      email: '',
      errorState: 'Your email could not be sent at this time',
      additionalComments: ''
    };
    const wrapper = shallow(<CoffeeForm addCoffee={jest.fn()} />)
    wrapper.instance().handleSubmit()

    expect(wrapper.state()).toEqual(expectedState);
  })
})

describe('MDTP', () => {
  it('should call the dispatch function on MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addCoffee();
    expect(mockDispatch).toHaveBeenCalled;

  })
})
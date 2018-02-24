import React from 'react';
import ReactDOM from 'react-dom';
import { CardContainer } from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  it('should render correctly', () => {
    const mockRoasters = [
      { userId: "71yYVDRUpOO8BR5153LMNCOmrV52",
        name: "Corvus",
        location: "Denver",
        altitude: "5280",
        equipment: "drum",
        water: "calcium",
        contact: "dom",
        email: "dom@corvus.com" },
      { userId: "71yYVDRUpOO8BR5153LMNCOmrV52",
        name: "Boxcar",
        location: "Boulder",
        altitude: "5360",
        equipment: "drum",
        water: "calcium, flouride",
        contact: "charles",
        email: "charles@boxcar.com" }
    ]

    const wrapper = shallow(<CardContainer roasters={mockRoasters}/>)

    expect(wrapper).toMatchSnapshot();
  })

  // it('should receive props from MSTP and MDTP')
})

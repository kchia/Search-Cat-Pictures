import React from 'react';
import { shallow, mount } from 'enzyme';
// import SearchCatResults from './SearchCatResults';
import SearchCatResults from './SearchCatResults';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
//we test if there are images
// Hou comment: Nice job writing tests for your component!
describe('SearchCatResults', () => {
  it('should render an image when passed an array of images prop', () => {
    const images = [
      {
        id: 'randomId',
        url: 'fakeurl.com'
      }
    ];
    const wrapper = mount(<SearchCatResults images={images} />);
    expect(wrapper.find('.gallery').children()).to.have.lengthOf(images.length);
    expect(
      wrapper
        .find('.gallery')
        .children()
        .at(0)
        .props().id
    ).to.equal('randomId');
    wrapper.unmount();
  });
  //we test it should render "no found images" if images not found
  it('should render No Images Found! if given an empty array', () => {
    const images = [];
    const wrapper = shallow(<SearchCatResults images={images} />);
    expect(wrapper.html()).to.equal('<h2>No Images Found!</h2>');
  });
});

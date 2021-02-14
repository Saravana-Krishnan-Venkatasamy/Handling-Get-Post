import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../component/formValidationSubmission'
describe('<Form>', function() {

  it('Should capture id correctly onChange', function(){

      const component = mount(<Form />);
      const input = component.find('input').at(0);
      input.instance().value = '1';
      input.simulate('change');
      expect(component.state().id).toEqual('1');
  })
})
//Enzyme.configure({adapter: new Adapter() });
/*
describe('Test case for testing login',() =>{
let wrapper;
test('id check',()=>
{
//wrapper = mount(<FormValidationSubmission/>);
wrapper = Enzyme.mount(Enzyme.shallow(<FormValidationSubmission/>).get(0);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'id', value: '1'}});
expect(wrapper.state('id')).toEqual('1');
})
it('title check',()=>{
wrapper = shallow(<FormValidationSubmission/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'title', value: 'krishankant'}});
expect(wrapper.state('title')).toEqual('krishankant');
})
it('check with right data',()=>{
wrapper = shallow(<FormValidationSubmission/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'id', value: '1'}});
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'title', value: 'krishankant'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isSubmitted')).toBe(true);
})
it('check with wrong data',()=>{
wrapper = shallow(<FormValidationSubmission/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'id', value: 'abcd'}});
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'title', value: 'krishankant1234'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})
})*/

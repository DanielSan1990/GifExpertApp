import React from "react";
import '@testing-library/jest-dom';
;

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas AddCategory", () => {

  const setCategories = jest.fn();
  let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

  test("debe mostrar el componente corectamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");

    const value = "Hola mundo";

    input.simulate("change", {
      target: {
        value: value,
      },
    });
  });

  test('no debe de postear la informacion con submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect( setCategories ).not.toHaveBeenCalled()

  });

  test('debe de postear la informacion con submit', () => {

    const value = 'Hola Mundo'

    wrapper.find( 'input' ).simulate('change', {target: {value}})

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).toHaveBeenCalled();

    expect( wrapper.find('input').prop('value')).toBe('')

  });
  
});

import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Probar Componente GifGrid', () => {
    const category = 'One Punch'
    //const mockUseFetchGifs = useFetchGifs;

    beforeEach(()=>{
        useFetchGifs.returnValue( () => {
            return { data: [], loading: true }
          });
      })
    
    test('debe mostrar el componente corectamente', () => {

   
        const wrapper = shallow( <GifGrid category={category} /> );
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de mostrar cuando se cargan images useFetchGifs', () => {
        
        
//const wrapper = shallow( <GifGrid category={category} /> );

    });
    

    
})
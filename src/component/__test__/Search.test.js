import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/MocKApiData.json"
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
// in body we are using fetch which is browser super power and render is making Js Dom which 
// is a browser like structure 
// Therefore we are making a mock fetch function 
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

// Now we have async functions and state updation for that we have to wrap the render function in act fucntion

it("Should Search ResList for Burger text input ",async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const resCardsBeforeClick = screen.getAllByTestId("resData");
    expect(resCardsBeforeClick.length).toBe(8)
    
    const searchBtn = screen.getByRole('button',{name:'Search'})

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(searchBtn);
    const resCardsAfterClick = screen.getAllByTestId("resData");
    expect(resCardsAfterClick.length).toBe(2); 

})
it("Should Render Top Rated Restaurants ",async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const resCardsBeforeClick = screen.getAllByTestId("resData");
    expect(resCardsBeforeClick.length).toBe(8);
    
    const topButton = screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topButton);
    const resCardsAfterClick = screen.getAllByTestId("resData");
    expect(resCardsAfterClick.length).toBe(6);

})
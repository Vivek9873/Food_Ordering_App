import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/ResMenuMock.json"
import { Provider } from "react-redux"
import appStore from "../../utilities/appStore"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import Cart from "../Cart"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("Should render Restaurant Menu Component",async()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>

        </Provider>

        </BrowserRouter>
))
    const accordianHeader = screen.getByText("Recommended (14)");
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(14)

    const addBtns = screen.getAllByRole('button',{name:"Add+"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument()
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart- (2 items)")).toBeInTheDocument()

    expect(screen.getAllByTestId("foodItems").length).toBe(16);
    fireEvent.click(screen.getByRole('button',{name:"Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(14);
    expect(
        screen.getByText("Cart is Empty. Please Add Items in the Cart!")
    ).toBeInTheDocument();


})
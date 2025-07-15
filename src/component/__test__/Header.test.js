import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utilities/appStore";
import { BrowserRouter } from "react-router-dom";

// In header component we are using redux that's why we have to wrap it inside the Provider 
// Again we will have error as we are using <Link> tag which we get from react-router-dom
// Hence we have to wrap it with BrowserRouter
it("Should load Header component with a login button ",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
);
    // first way 
    // const button = screen.getByRole('button');
    //second way
    // const button = screen.getByText('Login');
    //Third way 
    const button = screen.getByRole('button',{name:"Login"});
    expect(button).toBeInTheDocument();

})


it("Should load Header component with a cart items 0 ",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
);
    // First way to match exact text 
    // const cartItems = screen.getByText('Cart- (0 items)');
    
    // Second way if we know only a word or some portion of the text we can use regex
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();

})

it("Should load Header component with a logout button on click login button ",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
);
    // first way 
    // const button = screen.getByRole('button');
    //second way
    // const button = screen.getByText('Login');
    //Third way 
    const loginButton = screen.getByRole('button',{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button',{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();

})
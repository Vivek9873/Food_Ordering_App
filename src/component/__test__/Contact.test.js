import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

// This is unit testing 
describe('Test functions for Contact component', () => {

    beforeAll(()=>{
        console.log("Before All")
    })
    beforeEach(()=>{
        console.log("Before Each")
    })
    afterAll(()=>{
        console.log("After All")
    })
    afterEach(()=>{
        console.log("After Each")
    })
    test("Should load contact us component ",()=>{
        render(<Contact/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
    // it can be used instead of test .
    it("Should load button inside contact us component ",()=>{
        render(<Contact/>);
        // const button = screen.getByRole('button');
        
        // Another way to find the button is to use getByText()
        const button = screen.getByText('Submit');

        expect(button).toBeInTheDocument();
    })

    test("Should load input inside contact us component ",()=>{
        render(<Contact/>);
        const inputBox = screen.getByPlaceholderText('Enter your name');
        
        // Another way to find the button is to use getByText()
        // const button = screen.getByText('Submit');

        expect(inputBox).toBeInTheDocument();
    })

    test("Should load more than one input inside contact us component",()=>{
        render(<Contact/>)
        // Querying
        const inputBox = screen.getAllByRole('textbox');
        // For multiple items use getAll

        console.log(inputBox); // this will give array of 2 objects 
        // and each element will be virtual DOM HTMLInputElement={} or JSX element
        // expect(inputBox.length).toBe(2);
        expect(inputBox.length).not.toBe(3);
    })
});


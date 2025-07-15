import { render, screen } from "@testing-library/react"
import Cards from "../Cards"
import { withPromoted } from "../Cards";
import MOCK_DATA from "../mocks/CardsMock.json"
import "@testing-library/jest-dom";


it("Should render Card Component with props data",()=>{

    render(<Cards resData={MOCK_DATA}/>)
    // console.log(MOCK_DATA)
    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
})

it("Should render Card Component with promoted label",()=>{
    const RestaurantPromoted = withPromoted(Cards);
    render(<RestaurantPromoted resData={MOCK_DATA}/>)
    // console.log(MOCK_DATA)
    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
})


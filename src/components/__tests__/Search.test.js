import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should Search Res List for pizza text input", async ()=>{
   await act( async ()=>
    render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  )    
)

const cardsBeforeSearch = screen.getAllByTestId("resCard");

expect(cardsBeforeSearch.length).toBe(20);

// const searchButton = screen.getByText("Search");
const searchButton = screen.getByRole("button", {name: "Search" });

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, {target: { value: "pizza" }});

fireEvent.click(searchButton);

// screen should load 5 res cards

const cardsAfterSearch = screen.getAllByTestId("resCard");

//  expect(searchButton).toBeInTheDocument();

expect(cardsAfterSearch.length).toBe(4);

});



it("Should Filter Top Rated Restaurant", async ()=>{
  await act( async ()=>
   render(
   <BrowserRouter>
     <Body />
   </BrowserRouter>
 )    
)

const cardsBeforeSearch = screen.getAllByTestId("resCard");

expect(cardsBeforeSearch.length).toBe(20);

//Get top rated button by button name
const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants" });

//Clicked on top rated button
fireEvent.click(topRatedBtn);

// Fetch filter cards
const cardsAfterFilter = screen.getAllByTestId("resCard");

expect(cardsAfterFilter.length).toBe(10);

});
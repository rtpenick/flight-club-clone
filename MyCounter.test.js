import MyCounter from "./src/MyCounter";

describe("MyCounter",() =>{
    // all individual test cases go within this function
    it("counter displays correct initial count", () =>{
        // render function renders a psuedo version of your component
        const {getByTestId} = render(<MyCounter initialCount={0}/>);
        // getByTestId is not the ideal way of referencing elements on the DOM
        const countValue = getByTestId("countP").textContent;
        expect(countValue).toEqual(0)
    });
});
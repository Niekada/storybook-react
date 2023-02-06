import SearchBar from "./SearchBar";
import { render, cleanup, screen } from "@testing-library/react"

afterEach(cleanup);

describe("SearchBar component", () => {
    it("renders the search bar correctly", () => {
        render(<SearchBar />);
        const searchBar = screen.getByRole('textbox');
        const searchIcon = screen.getByPlaceholderText('Search');

        expect(searchBar).toBeInTheDocument();
        expect(searchIcon).toBeInTheDocument();
    });

    it("has the correct styling", () => {
        render(<SearchBar />);
        const searchBar = screen.getByRole('textbox');

        expect(searchBar).toHaveStyle(`padding: 8px 40px`);
        expect(searchBar).toHaveStyle(`border-radius: 4px`);
        expect(searchBar).toHaveStyle(`background-color: red`);
    });
});
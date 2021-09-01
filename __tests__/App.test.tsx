import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

describe('<App />', function () {
    test('should render the App component', function () {
        const { asFragment } = render(<App />);

        expect(asFragment()).toMatchSnapshot();
    });
});

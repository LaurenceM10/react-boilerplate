import React from 'react';
import { render } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

function renderWithRouter(
    ui: React.ReactElement,
    {
        route = '/',
    }: any = {},
) {
    window.history.pushState({}, 'Test page', route)

    return {
        ...render(ui, {wrapper: BrowserRouter})
    };
}


export default renderWithRouter;

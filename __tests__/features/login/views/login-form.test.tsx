import React from "react";
import LoginForm from "../../../../src/features/login/views/login-form";
import {fireEvent, screen, act, render, waitFor, cleanup} from "@testing-library/react";


const onLogin = jest.fn();

afterEach(() => {
    jest.clearAllMocks();
});

describe('<LoginForm />', function () {
    it('should render the <LoginForm /> component', function () {
        const { asFragment } = render(<LoginForm onLogin={onLogin} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should submit the form with username and password values', async function () {
        render(<LoginForm onLogin={onLogin} />)

        const username = screen.getByPlaceholderText('username');
        const password = screen.getByPlaceholderText('password');
        const submit = screen.getByText('Sign in');

        fireEvent.change(username, { target: { value: 'Laurence' }});
        fireEvent.change(password, { target: { value: '12345678' }});
        fireEvent.click(submit);

        await waitFor(() => expect(onLogin).toHaveBeenCalled());
        await waitFor(() => expect(onLogin).toHaveBeenCalledWith({ username: 'Laurence', password: '12345678' }));
    });

    it('should display required errors when value is not valid', async function () {
        render(<LoginForm onLogin={onLogin} />)
        const submit = screen.getByText('Sign in');

        fireEvent.click(submit);

        await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(2));
        expect(onLogin).not.toBeCalled();
    });

    it("should display min length error when password is invalid", async () => {
        render(<LoginForm onLogin={onLogin} />)

        const username = screen.getByPlaceholderText('username');
        const password = screen.getByPlaceholderText('password');

        fireEvent.change(username, { target: { value: 'Laurence' }});
        fireEvent.change(password, { target: { value: 'pass' }});

        fireEvent.submit(screen.getByText('Sign in'));

        expect(await screen.findAllByRole("alert")).toHaveLength(1);
        expect(onLogin).not.toBeCalled();

        expect(screen.getByRole('form')).toHaveFormValues({
            username: 'Laurence',
            password: 'pass',
        });
    });
});

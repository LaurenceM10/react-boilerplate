import reducer, {removeUser, setUser} from "../../../../src/features/authentication/slice";
import {AnyAction} from "redux";

describe('authentication slice', function () {
    test('should return the initial state', function () {
        expect(reducer(undefined, {} as AnyAction)).toEqual({
            user: null,
            accessToken: null,
        });
    });

    test('should update the state with new user and access token', function () {
        const user = { userId: '1', username: 'Laurence' }
        const authState = reducer({ user: null, accessToken: null }, setUser({ user, accessToken: '123' }));

        expect(authState).toEqual({ user, accessToken: '123' });
        expect(authState).not.toBe({ user: null, accessToken: null });
    })

    test('should remove the user and access token from the state', function () {
        const user = { userId: '1', username: 'Laurence' }
        const authState = reducer({ user, accessToken: '123456' }, removeUser());

        expect(authState).toEqual({ user: null, accessToken: null })
    });
});

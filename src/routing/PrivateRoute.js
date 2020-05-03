import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, ...rest }) {
    return (
        <Route {...rest}>
            {({ location }) => (
                localStorage.getItem('token') ?
                    children :
                    <Redirect to={{
                        pathname: '/login',
                        state: {
                            cbLocation: location
                        }
                    }} />
            )}
        </Route>
    )
}

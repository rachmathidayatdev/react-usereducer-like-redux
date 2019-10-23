import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../layouts/Main';

const Public = ({ component: Component, value, ...rest }) => (
    <Route { ...rest } render={
        props => {
            const propss = { ...props, state: value.state, dispatch: value.dispatch }
            return <MainLayout><Component { ...propss }/></MainLayout>
        }
    }/>
)

export default Public;
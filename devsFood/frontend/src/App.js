import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './appStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PriveteRoute from './components/PriveteRoute';
import MenuItem from './components/menuItem';
import Cart from './components/Cart';



export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/store.png" link="/"/>
                    <MenuItem icon="/assets/order.png" link="/orders"/>
                    <MenuItem icon="/assets/profile.png" link="/profile"/>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PriveteRoute exact path="/orders" >
                            <div>
                                TelA de pedidos
                            </div>
                        </PriveteRoute>
                        <PriveteRoute exact path="/profile" >
                            <div>
                                TelA de perfil
                            </div>
                        </PriveteRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>

                <Cart/>

            </Container>
        </BrowserRouter>
    );
}
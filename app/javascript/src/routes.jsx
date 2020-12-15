import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import ItemsList from './pages/ItemsList';
import Item from './pages/Item';
import ShopsList from './pages/ShopsList';
import CreateShop from './pages/CreateShop';
import Shop from './pages/Shop/index';
import CreateItem from './pages/CreateItem';
import Cart from './pages/Cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/profile" component={Profile} />
    <Route path="/shopslist" component={ShopsList} />
    <Route path="/itemslist" component={ItemsList} />
    <Route path="/create_my_shop" component={CreateShop} />
    <Route exact path="/shop/:id" component={Shop} />
    <Route path="/shop/:shop_id/item/:item_id" component={Item} />
    <Route path="/shop/:shop_id/create_an_item" component={CreateItem} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;

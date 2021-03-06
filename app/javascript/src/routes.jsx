import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import ItemsList from './pages/Items/ItemsList';
import ItemShow from './pages/Items/ItemShow';
import CreateShop from './pages/Shop/CreateShop';
import UpdateShop from './pages/Shop/UpdateShop';
import Shop from './pages/Shop/index';
import ShopsList from './pages/ShopsList';
import CreateItem from './pages/Items/CreateItem';
import UpdateItem from './pages/Items/UpdateItem';
import ItemsShopList from './pages/Shop/DashboardShopkeeper/ItemsShopList';
import OrderTrackingBoard from './pages/Shop/DashboardShopkeeper/OrderTrackingBoard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/logout" component={Logout} />
    <PrivateRoute path="/profile" component={Profile} />
    <Route path="/shopslist" component={ShopsList} />
    <Route path="/itemslist" component={ItemsList} />
    <PrivateRoute path="/create_my_shop" component={CreateShop} />
    <Route exact path="/shop/:id" component={Shop} />

    <PrivateRoute path="/shop/:shop_id/orders_tracking" component={OrderTrackingBoard} />
    <PrivateRoute path="/shop/:shop_id/update_infos" component={UpdateShop} />

    <Route exact path="/shop/:shop_id/item/:item_id" component={ItemShow} />
    <PrivateRoute path="/shop/:shop_id/item/:item_id/update_an_item" component={UpdateItem} />
    <PrivateRoute path="/shop/:shop_id/create_an_item" component={CreateItem} />
    <PrivateRoute path="/shop/:shop_id/list_items" component={ItemsShopList} />
  </Switch>
);

export default Routes;

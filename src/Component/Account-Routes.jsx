import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ActiveUser from '../Pages/Account/ActiveUser'
import CreateAccount from '../Pages/Account/CreateAccount'
import MultiLoginAccount from '../Pages/Account/MultiLoginAccount';

const AccountRoutes = () => {
    return (
        <Routes>
        <Route path= "account-list" element = {<ActiveUser/>} />
        <Route path = "create-account" element = {< CreateAccount />} />
        <Route path="multi-login-account" element={<MultiLoginAccount />} />
        </Routes>
  );
};

export default AccountRoutes;

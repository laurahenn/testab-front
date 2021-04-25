import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

import ConfiguracoesEquipes from '../pages/ConfiguracoesEquipes';
import ConfiguracoesOrganizacoes from '../pages/ConfiguracoesOrganizacoes';
import Alimentacao from '../pages/Alimentacao';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot" component={ForgotPassword} />
    <Route path="/reset" component={ResetPassword} />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/configuracoes-equipes" component={ConfiguracoesEquipes} isPrivate />
    <Route path="/configuracoes-organizacoes" component={ConfiguracoesOrganizacoes} isPrivate />
    <Route path="/alimentacao" component={Alimentacao} isPrivate />

  </Switch>
);

export default Routes;

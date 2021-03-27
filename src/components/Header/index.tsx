import React from 'react';

import { Link } from 'react-router-dom';
import {
  Headers,
  HeaderContent,
  Profile,   
  Opcoes,
} from './styles';

import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {

  const { user, signOut } = useAuth();

  return (
      <Headers>
        <HeaderContent>
          <img src={logoImg} alt="AB" />

          <Profile>
            <img src="https://instagram.fpoa1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/90094136_3288444057850702_5896166597558534144_n.jpg?tp=1&_nc_ht=instagram.fpoa1-1.fna.fbcdn.net&_nc_ohc=bhvRxCxdE2oAX9aZL7L&ccb=7-4&oh=4a59d91620c5fd02358eaeaaf0706082&oe=607D5417" 
                alt="{user.nome}" />
            <div>
              <span>Olá,</span> 
              <Link to="/profile">
                <strong> {user.nome}</strong>
              </Link>
            </div>
          </Profile>
          
          <Opcoes>
            <div>
              <span>
              <Link to="/dashboard-certificados">
                <strong> Configurações </strong>
              </Link>
              </span>
            </div>
            <div>
              <span>
                <button type="button" onClick={signOut}>
                  <strong> Sair </strong>
                </button>
              </span>
            </div>
          </Opcoes>

        </HeaderContent>
      </Headers>
  );
};

export default Header;

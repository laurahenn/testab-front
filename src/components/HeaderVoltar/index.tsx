import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import {
  Headers,
  HeaderContent,
  Profile,   
  Opcoes,
} from './styles';

import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

import placeholder from '../../assets/perfil.jpg';

const Header: React.FC = () => {

  const { user, signOut } = useAuth();

  return (
      <Headers>
        <HeaderContent>

          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
            
          <img src={logoImg} alt="AB" />

          <Profile>
            {/* <img src={user.foto || placeholder} alt={user.nome} /> */}
            <img src={placeholder} alt={user.nome} />
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
              <Link to="/configuracoes-equipes">
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

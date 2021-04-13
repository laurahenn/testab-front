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

const HeaderPerfil: React.FC = () => {

  const { user, signOut } = useAuth();

  return (
      <Headers>
        <HeaderContent>

          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
            
          <img src={logoImg} alt="AB" />
          
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

export default HeaderPerfil;

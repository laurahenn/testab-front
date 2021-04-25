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
  const foto = "http://localhost:3333/files/"+user.foto;

  return (
      <Headers>
        <HeaderContent>
          <img src={logoImg} alt="AB" />

          <Profile>
            
            <img src={foto} alt={user.nome} />
            <div>
              <span>Olá,</span> 
              <Link to="/profile">
                <strong> {user.nome} </strong>
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

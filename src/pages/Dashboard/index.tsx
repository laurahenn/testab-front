import React, { useState, useCallback, useEffect, useMemo } from 'react';
import 'react-day-picker/lib/style.css';

import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Content,
  Section,
  Listings,
  Details,
  Records,
  RecordsDetails,
  Options,
  Menu,
  Info,
} from './styles';


const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  
  return (
    <Container>

      <Header  />
      <h1>Testes em execução</h1>

      <Content>
        {/* Listagem */}
        <Listings>

          <Section>
              <Records key="1">

                <Details>
                  <p>Nome do teste</p>
                  <span>20 Outubro 2020</span>
                </Details>

                <RecordsDetails>
                  <div>
                    <span>A</span>
                    <FiEye />
                    <span>555 acessos</span>
                    <Link to="/"> Detalhes </Link>
                  </div>
                </RecordsDetails>
                <RecordsDetails>
                  <div>
                    <span>B</span>
                    <FiEye />
                    <span>558 acessos</span>
                    <Link to="/"> Detalhes </Link>
                  </div>
                </RecordsDetails>

                <Options>
                  <Link to="/"> Relatório </Link>
                  <span> 30 Novembro 2020 </span> 
                </Options>
                
              </Records>
              <Records key="2">

                <Details>
                  <p>Nome do teste</p>
                  <span>20 Outubro 2020</span>
                </Details>

                <RecordsDetails>
                  <div>
                    <span>A</span>
                    <FiEye />
                    <span>555 acessos</span>
                    <Link to="/"> Detalhes </Link>
                  </div>
                </RecordsDetails>
                <RecordsDetails>
                  <div>
                    <span>B</span>
                    <FiEye />
                    <span>558 acessos</span>
                    <Link to="/"> Detalhes </Link>
                  </div>
                </RecordsDetails>

                <Options>
                  <Link to="/"> Relatório </Link>
                  <span> 30 Novembro 2020 </span> 
                </Options>
                
              </Records>
                
          </Section>

        </Listings>

        {/* Painel */}
        <Menu>

          <Info>
            <p>Total Testes AB</p>
            <span>02</span>
          </Info>
          <Info>
            <p>Total Acessos AB</p>
            <span>2765</span>
          </Info>
          <Link to="/"> Novo Teste AB </Link>

        </Menu>
      
      </Content>
    </Container>
  );
};

export default Dashboard;

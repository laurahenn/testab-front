import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { parseISO, format } from 'date-fns';

import 'react-day-picker/lib/style.css';

import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

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

interface TestesAB {
  id: number;
  titulo: string;
  data_inicio: string;
  data_fim: string;
  dataIniFormatted: string;
  dataFimFormatted: string;
  url: string;
  // testeA: {
  //   id: number;
  //   acessos: number;
  // },
  // testeB: {
  //   id: number;
  //   acessos: number;
  // },
}

interface TestesABDados {
  total_TestesAB: number;
  total_acessos: number;
}

const Dashboard: React.FC = () => {

  const { user, signOut } = useAuth();
  const { addToast } = useToast();

  const [selectedDate, setSelectedDate] = useState(new Date());

  // TestesAB
  const [testesAB, setTestesAB] = useState<TestesAB[]>([]);

  useEffect(() => {
    api.get<TestesAB[]>('/testesAB/me', {
      params: {
        usuario_id: user.id,
      },
    }).then(response => {

      const testesABFormatted = response.data.map(testesAB => {
        return {
          ...testesAB,
          dataIniFormatted: format((parseISO(testesAB.data_inicio)),"dd'/'MM'/'yyyy"),
          dataFimFormatted: format((parseISO(testesAB.data_fim)),"dd'/'MM'/'yyyy"),

        };
      });

      setTestesAB(testesABFormatted);

    });
  }, [selectedDate]);

  // Dados
  const [testesABDados, setDados] = useState<TestesABDados[]>([]);

  useEffect(() => {
    api.get<TestesABDados[]>('/testesAB/total', {
      params: {
        usuario_id: user.id,
      },
    }).then(response => {

      const testesABDadosFormatted = response.data.map(testesABDados => {
        return {
          ...testesABDados,
        };
      });

      setDados(testesABDadosFormatted);

    });
  }, [selectedDate]);

  return (
    <Container>

      <Header  />
      <h1>Testes em execução</h1>

      <Content>
        {/* Listagem */}
        <Listings>

          <Section>

            {testesAB.map(testesAB => (

              <Records key={testesAB.id}>

                <Details>
                  <p>{testesAB.titulo}</p>
                  <span>{testesAB.dataIniFormatted}</span>
                </Details>

                {/* <RecordsDetails key={testesAB.testeA.id}>
                  <div>
                    <span>A</span>
                    <FiEye />
                    <span>{testesAB.testeA.acessos} acessos</span>
                    <Link to="/"> Detalhes </Link>
                  </div>
                </RecordsDetails>
                <RecordsDetails key={testesAB.testeB.id}>
                  <div>
                    <span>B</span>
                    <FiEye />
                    <span>{testesAB.testeB.acessos} acessos</span>
                    <Link to="/"> Detalhes </Link>
                  </div>
                </RecordsDetails> */}

                <Options>
                  <Link to="/"> Relatório </Link>
                  <span> { testesAB.dataFimFormatted } </span>
                </Options>

              </Records>

            ))}

          </Section>

        </Listings>

        {/* Painel */}
        {testesABDados.map(testesABDados => (
          <Menu>
            <Info>
              <p>Total Testes AB</p>
              <span>{testesABDados.total_TestesAB || 0}</span>
            </Info>
            <Info>
              <p>Total Acessos AB</p>
              <span>{testesABDados.total_acessos || 0}</span>
            </Info>
            <Link to="/"> Novo Teste AB </Link>

          </Menu>
        ))}

      </Content>
    </Container>
  );
};

export default Dashboard;

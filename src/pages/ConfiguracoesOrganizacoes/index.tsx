import React, { useCallback, useRef } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';

// Componentes 
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import HeaderVoltar from '../../components/HeaderVoltar';

import {
  Container, 
  Content,
  Listings,
  Records,
  Menu,
} from './styles';


interface ProfileFormData {
  nome: string;
  email: string;
  login: string;
  password: string;
}

const ConfiguracoesOrganizacoes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user } = useAuth();

  const handleSubmit = useCallback(
    
    async (data: ProfileFormData) => {
      try {
      
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          login: Yup.string().required('Login obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log(data);


        const config = {
          
            "user_id": user.id,
            "nome": data.nome,
            "email": data.email,
            "old_password": data.password,
            "password": data.password
          
        }

        await api.put('users', config);

        addToast({
          type: 'success',
          title: 'Cadastro atualizado!',
          description: 'Você atualizou as informações do seu usuário!',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      
      <HeaderVoltar />

      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>Organizações</h1>

          <InputForm name="nome" placeholder="Nome" />
          <InputForm name="email" placeholder="E-mail" />
          <InputForm name="permissao" placeholder="Permissão" />
          
          <Button type="submit">Salvar</Button>

          {/* Listagem */}
          <Listings>

              <p>
                <span>Nome</span>
                <span>E-mail</span>
                <span>Permissão</span>
              </p>

              <Records>
                <div>
                  <FiEdit />
                    <span>Nome A</span>
                    <span>email@email.com</span>
                    <span>Admin</span>
                </div>
              </Records>
              <Records>
                <div>
                  <FiEdit />
                    <span>Nome A</span>
                    <span>email@email.com</span>
                    <span>Admin</span>
                </div>
              </Records>

          </Listings>

        </Form>

        <Menu>
          <Link to="/configuracoes-equipes"> Equipe </Link>
          <Link to="/configuracoes-organizacoes"> Organizações </Link>
        </Menu>
        
      </Content>
    </Container>
  );
};

export default ConfiguracoesOrganizacoes;

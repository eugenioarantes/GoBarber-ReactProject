import React from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>

      <Content>
        <img src={logoImg} alt="GoBarber"/>

        <form>
          <h1>Faça seu login</h1>

          <Input name="email" icon={FiMail} placeholder='E-mail'/>
          <Input name="password" icon={FiLock} type='password' placeholder='Senha'/>

          <Button type="submit">Entrar</Button>

          <a href='forgot'>Esqueci minha senha</a>
        </form>

        <a href='login'>
          <FiLogIn/>
          Criar conta
        </a>

      </Content>

      <Background/>
    </Container>
);

export default SignIn;
import { useRouter } from 'next/router';
import nookies from 'nookies';
import React, { useState, useContext, useEffect } from 'react';

import Logo from '../src/assets/images/logo.svg';
import GithubIcon from '../src/assets/svgs/github-icon.svg';
import { LoginMain, LoginButton } from '../src/styles/login';

export default function LoginPage() {
  const router = useRouter();

  // const [ user, setUser ] = useState('');

  async function handleLoginForm(event: React.FormEvent){
    event.preventDefault();
    const responseLogin = await fetch('https://alurakut.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ githubUser: 'vbuchara' })
    });
    const userLogged = await responseLogin.json();

    const responseAuth = await fetch('/api/auth', {
      headers: {
        Authorization: userLogged.token
      }
    });
    const userAuth = await responseAuth.json();
    
    if(!userAuth.isAuthenticated){
      return;
    }

    nookies.set(null, 'USER_TOKEN', userLogged.token, {
      path: '/',
      maxAge: 7200
    });
    
    router.push('/', { pathname: '/' });
  }

  return (
    <LoginMain>
      <div className="loginScreen">
        <section className="logoArea">
          <div className="logo">
            <img src={Logo} alt="Logo.svg"/>
          </div>

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <p>
            Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
          <LoginButton type="submit" onClick={handleLoginForm}>
             <GithubIcon/>Login com o GitHub
          </LoginButton>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </LoginMain>
  )
} 

export async function getServerSideProps<GetServerSideProps>(context) {
  const token = nookies.get(context).USER_TOKEN;

  if(token){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  return {
    props: { },
  }
}
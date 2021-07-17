import { useRouter } from 'next/router';
import nookies from 'nookies';
import React, { useState } from 'react';

import { LoginMain } from '../src/styles/login';

export default function LoginPage() {
  const router = useRouter();

  const [ user, setUser ] = useState('');

  async function handleLoginForm(event: React.FormEvent){
    event.preventDefault();
    const responseLogin = await fetch('https://alurakut.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ githubUser: user })
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
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={handleLoginForm}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
            <input 
              placeholder="Usuário" 
              onChange={event => setUser(event.target.value)} 
              value={user}
            />
            <button type="submit">
                Login
            </button>
          </form>
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
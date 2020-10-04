import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@iconify/react';

// import { login, userAdd, mail, lockClosed } from '@iconify/icons-heroicons-outline'

import loginIcon from '@iconify/icons-heroicons-outline/login';
import userAdd from '@iconify/icons-heroicons-outline/user-add';
import mailIcon from '@iconify/icons-heroicons-outline/mail';
import lockClosed from '@iconify/icons-heroicons-outline/lock-closed';

import './styles.css';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div id="home-page">
      <main>
        <div id="description-container">
          <img src={logo} alt="Pro_Man_"/>
          <h1>The <span>PRO</span> way</h1>
          <h2>
            Um front-end desenvolvido <br />
            para consumir a API REST <br />
            desenvolvida na serie de <br />
            vídeos da Rocketseat!
          </h2>
        </div>

        <div id="login-container">
          <h2>Fazer Login</h2>
          <form>
            <fieldset>
              <div className="field">
                <Icon
                  icon={mailIcon}
                  style={{color: '#959BAA', fontSize: '42px'}}
                />
                <input type="email" name="email" placeholder="E-mail"/>
              </div>

              <div className="field">
                <Icon
                  icon={lockClosed}
                  style={{color: '#959BAA', fontSize: '42px'}}
                />
                <input type="password" name="password" placeholder="Senha"/>
              </div>
            </fieldset>

            <Link to="/" id="forgot-password">
              <p>Esqueceu sua senha?</p>
            </Link>

            <button type="submit">
              <Icon
                icon={loginIcon}
                style={{color: '#fff', fontSize: '63px'}}
                rotate="180deg"
              />
            </button>

            <p>OU</p>

            <Link to="/coming-soon" id="create-account">
              <Icon
                icon={userAdd}
                style={{color: '#2AF59E', fontSize: '63px'}}
              />
            </Link>
          </form>
        </div>
      </main>
      
      <footer>
        <p>Made by <span>Sandro</span></p>
      </footer>
    </div>
  );
}

export default Home;
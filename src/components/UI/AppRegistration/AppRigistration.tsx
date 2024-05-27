// src/components/UI/AppRegistration/AppRegistration.tsx
import { SCAppRegistration } from './AppRigistration.style';
import { Link } from 'react-router-dom';

export const AppRegistration = () => {
  return (
    <SCAppRegistration>
      <span>
        У вас нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </span>
      <p>Войти с помощью</p>
      <div className="icons-wrapper">
        <a className="reg__link google-link" href="#">
          <img src="./img/icons/google.svg" alt="Sign in with Google" />
        </a>
        <a className="reg__link google-plus-link" href="#">
          <img src="./img/icons/google-plus.svg" alt="Sign in with Google Plus" />
        </a>
        <a className="reg__link yandex-link" href="#">
          <img src="./img/icons/yandex.svg" alt="Sign in with Yandex" />
        </a>
        <a className="reg__link mail-ru-link" href="#">
          <img src="./img/icons/mail-ru.svg" alt="Sign in with Mail.ru" />
        </a>
      </div>
    </SCAppRegistration>
  );
};


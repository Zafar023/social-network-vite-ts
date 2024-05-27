// src/pages/LoginPage/LoginPage.tsx

import {AppButton} from '../../components/UI/AppButton/AppButton';
import { AppInput } from '../../components/UI/AppInput/AppInput';
import {AppLink} from '../../components/UI/AppLink/AppLink';
import { AppRegistration } from '../../components/UI/AppRegistration/AppRigistration';
import './LoginPage.scss';

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <AppInput inputType="tel" inputPlaceholder="Номер телефона" />
        <AppInput inputType="password" inputPlaceholder="Пароль" />
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false} />
      </form>
      <AppLink linkText="Забыли пароль" href="#" />
      <AppRegistration />
    </div>
  );
};


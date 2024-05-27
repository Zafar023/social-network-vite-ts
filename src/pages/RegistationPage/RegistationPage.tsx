// src/pages/RegistrationPage/RegistrationPage.tsx

import {AppButton} from '../../components/UI/AppButton/AppButton';
import { AppInput } from '../../components/UI/AppInput/AppInput';
import {AppLink} from '../../components/UI/AppLink/AppLink';
import "../LoginPage/LoginPage.scss";


export const RegistrationPage = () => {
  return (
    <div className="RegistrationPage">
      <h1>Регистрация</h1>
      <form action="#">
        <AppInput inputType="tel" inputPlaceholder="Номер телефона" />
        <AppInput inputType="password" inputPlaceholder="Пароль" />
        <AppButton buttonText="Зарегистрироваться" buttonType="submit" isDisabled={false} />
      </form>
      <AppLink linkText="Уже есть аккаунт? Войти" href="/" />
    </div>
  );
};


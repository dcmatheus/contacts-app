import loginAmico from 'images/login-amico.svg';

function LoginImage() {
  return (
    <object
      data={loginAmico}
      type="image/svg+xml"
      className="w-5/12 h-3/5"
    >
      Usuário fazendo login
    </object>
  );
}

export default LoginImage;

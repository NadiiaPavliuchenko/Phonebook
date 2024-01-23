import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/authorization/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(loginUser({ email: email.value, password: password.value }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" autoComplete="useremail"></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
      ></input>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

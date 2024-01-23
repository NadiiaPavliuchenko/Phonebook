import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/authorization/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      registerUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Username</label>
      <input type="text" name="name" autoComplete="username"></input>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" autoComplete="useremail"></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
      ></input>
      <button type="submit">Registration</button>
    </form>
  );
};

export default RegisterForm;

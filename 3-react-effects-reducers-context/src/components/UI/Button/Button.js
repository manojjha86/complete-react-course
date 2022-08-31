import React, {useContext} from 'react';
import AuthContext from '../../Context/AuthContext';

import classes from './Button.module.css';

const Button = (props) => {
  let ctx = useContext(AuthContext)
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onLogout}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

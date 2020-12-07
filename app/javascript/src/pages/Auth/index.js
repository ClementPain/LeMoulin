import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAuth } from '../../redux-config';

const Auth = ({ children, type }) => {
  const { isAuthenticated, errors } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [alert, setAlert] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const inputs = Array.from(data.entries());
    const identifiers = Object.fromEntries(inputs);

    const inputsErrors = inputs.reduce((acc, input) => (input[1] === '' ? [...acc, input[0]] : []), []);

    if (inputsErrors.length) setAlert((`You must provide ${inputsErrors.join(' and ')}.`));
    else {
      setAlert(null);
      dispatch(handleAuth(type, identifiers));
    }
  };

  useEffect(
    () => {
      setAlert(errors);
    },
    [errors],
  );

  const handleOnInput = () => setAlert(null);

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <nav className="login-form mt-5 mb-4 justify-content-center">
      <div className="container">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary">
              <h5 className="text-white text-center">{type.toUpperCase()}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} onInput={handleOnInput}>
                <div className="container">
                  {
                    alert && (
                    <div className="alert alert-danger">
                      <p>{alert}</p>
                    </div>
                    )
                  }

                  {children}

                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary mx-5">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Auth;

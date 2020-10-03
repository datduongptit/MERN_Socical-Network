import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authUser = (
    <ul>
      <li className='btn-nav'>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li className='btn-nav'>
        <Link to='/posts'>Community</Link>
      </li>
      <li className='btn-nav'>
        <Link to='/dashboard'>
          <span className='hide-sm'>Dashboard</span>{' '}
        </Link>
      </li>
      <li className='btn-nav'>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm btn-logout'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const authGuest = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fa fa-codepen'></i>
          DEVSOCIAL
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authUser : authGuest}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

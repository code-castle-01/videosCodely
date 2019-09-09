import React from 'react';
import PropTypes from 'prop-types';
/* import { Link } from "react-router-dom";
import About from './About'; */

const Header = ({onClickAdd}) => (
  <div className="header-content">
    <div className="header-title-text">Mis videos Favoritos</div>
    <input type="button" onClick={onClickAdd} value="Añadir videos" className="header-button-add"/>
  </div>
);

Header.propTypes ={
  onClickAdd: PropTypes.func.isRequired
};

export default React.memo(Header);

/**
 * <Link className="grid-item-link" to={`/about`}>
      <div className="header-title-text">
        <About title="Acerca de Nosotros ..."/>
      </div> 
    </Link>
 */
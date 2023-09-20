import React from 'react';
import PropTypes from 'prop-types';
import './styles.js'; // Import your CSS styles if needed


const Index = (props) => {
  const { width, height, children } = props;

  const divStyle = {
    width: width + 'px',
    height: height + 'px',
    // Add any other CSS styles from your styles.css file here
  };

  return <div className="default" style={divStyle}>{children}</div>;
};

Index.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.element,
};

Index.defaultProps = {
  width: 0,
  height: 0,
  children: null,
};

export default Index;

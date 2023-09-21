import React from 'react';
import PropTypes from 'prop-types';
import './styles'

const Index = (props) => {
  const { color, thickness, direction } = props;

  let style = {
    backgroundColor: color ?? 'gray', // Replace 'border-color' with your desired default color
    height: thickness,
  };

  if (direction === 'vertical') {
    style = {
      backgroundColor: color ?? 'gray', // Replace 'border-color' with your desired default color
      width: thickness,
    };
  }

  return <div className={direction === 'vertical' ? 'vertical' : 'horizontal'} style={style}></div>;
};

Index.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
  direction: PropTypes.oneOf(['horizontal', 'vertical']), // Fix the PropTypes.oneOf syntax
};

Index.defaultProps = {
  color: null,
  thickness: 1,
  direction: 'horizontal',
};

export default Index;

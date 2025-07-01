import React from 'react';
import Icon from '@ant-design/icons';

const FacebookSvg = () => (
  <svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M279.14 288l14.22-92.66h-88.91V127.62c0-25.35 
      12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 
      0c-73.14 0-121 44.38-121 124.72V195.3H22.89V288h81.47v224h100.2V288z" />
  </svg>
);

const FacebookIcon = (props: any) => <Icon component={FacebookSvg} {...props} />;

export default FacebookIcon;

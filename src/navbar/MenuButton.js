import React from 'react';
import { MdMenu } from 'react-icons/md';

const MenuButton = ({ onClick }) => {
  return (
    <span className="text-3xl cursor-pointer mx-2 md:hidden" onClick={onClick}>
      <MdMenu />
    </span>
  )}
  export default MenuButton;

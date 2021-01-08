import React from 'react';
import request from '../modules/request';

const btnAction = () => {
  const btn = document.querySelector('.search_btn');
btn.addEventListener('click', () => {
  const input = document.querySelector('.input');
  if (input.value.length === 0) {
    alert('Please, enter film name!!!');
  } else {
    request();
  }

});
 
}
export default btnAction;
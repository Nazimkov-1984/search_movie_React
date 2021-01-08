import React from 'react';
import axios from 'axios';
import cardHeaderSizeCalculate from '../modules/cardHeaderSizeCalculate';

const request = () => {
  const input = document.querySelector('.input');
  const filmName = input.value;

  axios.get(`http://www.omdbapi.com/?r=json&s=${filmName}&apikey=2a7d7e9f&`)
  .then(res => {
    const films = res.data;
    const list = document.querySelector('.list');
    for (let i = 0; i < 5; i++){
      const li = document.createElement('li');
      li.classList.add('list__item');
      const text = document.createElement('span');
      text.classList.add('list__item__text');
      text.textContent = films.Search[i].Title;
      const poster = document.createElement('img');
      poster.classList.add('list__item__poster');
      poster.src = `${films.Search[i].Poster}`;
      li.append(text);
      li.append(poster);
      list.append(li);
    }
    cardHeaderSizeCalculate();
  })
}

export default request;
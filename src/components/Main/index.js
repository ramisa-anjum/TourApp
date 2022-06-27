import React from 'react';
import Card from '../Card';

import { data } from '../../helpers/data';

import './style.scss';

function Main () {
  return (
    <main className="container">
      {data.map((item, index) => {
        return (
          <Card key={index} title={item.title} image={item.image} desc={item.desc}/>
        )
      })}
    </main>
  )
}

export default Main;
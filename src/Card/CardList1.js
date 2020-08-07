import React from 'react';
import Card from './Card';

const CardList1 = ({ data1 }) => {
  return (
    <div>
      {
        data1.map((user, i) => {
          return (
            <Card
              key={i}
              url={data1[i].url}
              name={data1[i].name}
              loc={data1[i].location}
              days={data1[i].days}
              pay={data1[i].pay}
              rs={data1[i].rs}
              dif={data1[i].dif}
              time={data1[i].time}
              url2={data1[i].url2}
              />
          );
        })
      }
    </div>
  );
}

export default CardList1;
import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <div>
      {
        data.map((user, i) => {
          return (
            <Card
              key={i}
              url={data[i].url}
              loc={data[i].location}
              name={data[i].name}
              days={data[i].days}
              pay={data[i].pay}
              rs={data[i].rs}
              dif={data[i].dif}
              time={data[i].time}
              url2={data[i].url2}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
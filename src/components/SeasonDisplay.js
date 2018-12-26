import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    colour: 'orange'
  },
  winter: {
    text: 'Burr, it is chilly',
    colour: 'blue'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  const { text, colour } = seasonConfig[season];
  return (
    <div style={{ maxWidth: '300px', margin: '3em auto' }}>
      <h1
        style={{
          backgroundColor: colour,
          color: 'white',
          textAlign: 'center',
          height: '50px'
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default SeasonDisplay;

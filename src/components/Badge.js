import React from 'react';

const Badge = ({ score }) => {
  let badge = '';
  if (score >= 40) {
    badge = 'Expert Anime';
  } else if (score >= 20) {
    badge = 'Otaku';
  } else if (score > 5) {
    badge = 'Débutant';
  } else if (score >= 0) {
    badge = 'Noob';
  }

  return <h3>Badge : {badge}</h3>;
};

export default Badge;

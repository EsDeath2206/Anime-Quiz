import React, { useState, useEffect } from 'react';
import Question from './Question';
import Timer from './Timer';

const Quiz = ({ updateScore, setQuizFinished, gameMode }) => {
  const [questions] = useState([
    {
      question: 'Dans "Naruto", quel est le véritable nom du leader de l\'Akatsuki ?',
      options: ['Nagato', 'Obito', 'Madara', 'Itachi'],
      correctAnswer: 'Nagato',
    },
    {
      question: 'Dans "Attack on Titan", pourquoi Eren Jaeger possède-t-il un pouvoir si unique ?',
      options: ['Parce qu\'il a mangé le Titan Fondateur', 'Il est né avec un don spécial', 'Il a été exposé à une vieille magie', 'Il a mangé la chair de son père'],
      correctAnswer: 'Parce qu\'il a mangé le Titan Fondateur',
    },
    {
      question: 'Dans "One Piece", qui est le seul personnage à avoir mangé un fruit du démon et à être capable de nager ?',
      options: ['Gol D. Roger', 'Blackbeard', 'Luffy', 'Shanks'],
      correctAnswer: 'Blackbeard',
    },
    {
      question: 'Dans "Fullmetal Alchemist: Brotherhood", quel est le but de la Pierre Philosophale ?',
      options: ['Rendre immortel', 'Créer de l\'argent', 'Amplifier les pouvoirs alchimiques', 'Réparer le corps d\'Edward et Alphonse'],
      correctAnswer: 'Amplifier les pouvoirs alchimiques',
    },
    {
      question: 'Dans "Demon Slayer", quel est le nom de la technique principale de Tanjiro pour combattre les démons ?',
      options: ['Flamme de la Lune', 'Respiration de l\'eau', 'Respiration du vent', 'Respiration de la pierre'],
      correctAnswer: 'Respiration de l\'eau',
    },
    {
      question: 'Dans "Dragon Ball Z", qui a créé la fameuse Dragon Ball ?',
      options: ['Kami-sama', 'Dende', 'Shenron', 'Végéta'],
      correctAnswer: 'Kami-sama',
    },
    {
      question: 'Dans "Hunter x Hunter", quel est le Nen utilisé par Kurapika pour se venger des Phantoms Troupe ?',
      options: ['Chain Jail', 'Chain Bind', 'Chain Stitch', 'Chain Cuffs'],
      correctAnswer: 'Chain Jail',
    },
    {
      question: 'Dans "Death Note", quel est le nom du détective qui poursuit Light Yagami ?',
      options: ['L', 'Near', 'Mello', 'Aizawa'],
      correctAnswer: 'L',
    },
    {
      question: 'Dans "My Hero Academia", qui est le personnage qui a la capacité "Explosion" ?',
      options: ['Katsuki Bakugo', 'Izuku Midoriya', 'Shoto Todoroki', 'All Might'],
      correctAnswer: 'Katsuki Bakugo',
    },
    {
      question: 'Dans "Bleach", qui est le capitaine de la 13e division des Gotei 13 ?',
      options: ['Shunsui Kyōraku', 'Jushiro Ukitake', 'Sōsuke Aizen', 'Toshiro Hitsugaya'],
      correctAnswer: 'Shunsui Kyōraku',
    },
    {
      question: 'Dans "Tokyo Ghoul", quel est le nom de la "ghoul" la plus puissante après Rize Kamishiro ?',
      options: ['Kishou Arima', 'Ken Kaneki', 'Touka Kirishima', 'Rize Kamishiro'],
      correctAnswer: 'Kishou Arima',
    },
    {
      question: 'Dans "Sword Art Online", comment se nomme le premier jeu dans lequel Kirito se retrouve piégé ?',
      options: ['SAO', 'ALO', 'GGO', 'Underworld'],
      correctAnswer: 'SAO',
    },
    {
      question: 'Dans "JoJo\'s Bizarre Adventure", quel est le nom de la technique utilisée par Joseph Joestar ?',
      options: ['Hamon', 'Stand', 'Zawardo', 'Barrage'],
      correctAnswer: 'Hamon',
    },
    {
      question: 'Dans "Fairy Tail", qui est le maître actuel de la guilde Fairy Tail ?',
      options: ['Makarov Dreyar', 'Erza Scarlet', 'Natsu Dragneel', 'Lucy Heartfilia'],
      correctAnswer: 'Makarov Dreyar',
    },
    {
      question: 'Dans "Neon Genesis Evangelion", quel est le nom de l\'élément extraterrestre qui menace la Terre ?',
      options: ['Angels', 'Evas', 'Magis', 'Eva-01'],
      correctAnswer: 'Angels',
    },
    {
      question: 'Dans "One Punch Man", quel est le vrai nom de Saitama ?',
      options: ['Saitama Genos', 'Saitama Kageyama', 'Saitama Fubuki', 'Saitama'],
      correctAnswer: 'Saitama',
    },
    {
      question: 'Dans "Attack on Titan", qui est la première personne à découvrir le secret des Titans ?',
      options: ['Eren', 'Armin', 'Mikasa', 'Levi'],
      correctAnswer: 'Eren',
    },
    {
      question: 'Dans "Code Geass", quel est le nom du pouvoir de Lelouch vi Britannia ?',
      options: ['Geass', 'Ragnarok', 'Hypnos', 'Apocalypse'],
      correctAnswer: 'Geass',
    },
    {
      question: 'Dans "One Piece", quel est le but ultime de Luffy ?',
      options: ['Devenir le roi des pirates', 'Trouver le One Piece', 'Battre Gol D. Roger', 'Libérer la mer des pirates'],
      correctAnswer: 'Devenir le roi des pirates',
    },
    {
      question: 'Dans "Cowboy Bebop", quel est le nom de la navette spatiale utilisée par Spike et les autres ?',
      options: ['Swordfish II', 'Bebop', 'Black Lagoon', 'Shooting Star'],
      correctAnswer: 'Swordfish II',
    },
    {
      question: 'Dans "Fate/Zero", qui est le servant de Kiritsugu Emiya ?',
      options: ['Saber', 'Archer', 'Rider', 'Lancer'],
      correctAnswer: 'Saber',
    },
    {
      question: 'Dans "Black Clover", quel est le nom de la magie utilisée par Asta ?',
      options: ['Anti-magic', 'Fire Magic', 'Wind Magic', 'Water Magic'],
      correctAnswer: 'Anti-magic',
    },
    {
      question: 'Dans "Demon Slayer", quel est le nom de la première lame de Tanjiro ?',
      options: ['Nichirin Blade', 'Bokken Blade', 'Katana', 'Sun Blade'],
      correctAnswer: 'Nichirin Blade',
    },
    {
      question: 'Dans "The Promised Neverland", quel est le surnom de la ferme où les orphelins sont élevés ?',
      options: ['Grace Field House', 'Sankey Plantation', 'Rooftop Orphanage', 'Hell Valley'],
      correctAnswer: 'Grace Field House',
    },
    {
      question: 'Dans "Mob Psycho 100", quel est le nom du maître de Mob ?',
      options: ['Reigen Arataka', 'Dimple', 'Ritsu Kageyama', 'Tsubomi'],
      correctAnswer: 'Reigen Arataka',
    },
    {
      question: 'Dans "Steins;Gate", qui est le "mad scientist" qui invente la machine à voyager dans le temps ?',
      options: ['Rintarou Okabe', 'Maho Hiyajo', 'Kurisu Makise', 'Mayuri Shiina'],
      correctAnswer: 'Rintarou Okabe',
    },
    {
      question: 'Dans "Bleach", qui est le capitaine de la 6e division ?',
      options: ['Byakuya Kuchiki', 'Renji Abarai', 'Yoruichi Shihoin', 'Soi Fon'],
      correctAnswer: 'Byakuya Kuchiki',
    },
    {
      question: 'Dans "Naruto", qui a été le premier Hokage ?',
      options: ['Hashirama Senju', 'Tobirama Senju', 'Hiruzen Sarutobi', 'Minato Namikaze'],
      correctAnswer: 'Hashirama Senju',
    },
    {
      question: 'Dans "Trigun", quel est le surnom de Vash the Stampede ?',
      options: ['The Humanoid Typhoon', 'The Lone Wolf', 'The Red Barron', 'The Sharp Shooter'],
      correctAnswer: 'The Humanoid Typhoon',
    },
    {
      question: 'Dans "Naruto Shippuden", quel est le nom du genjutsu utilisé par Itachi Uchiha ?',
      options: ['Tsukuyomi', 'Amaterasu', 'Sasuno', 'Kagutsuchi'],
      correctAnswer: 'Tsukuyomi',
    },
    {
      question: 'Dans "Black Lagoon", qui est le principal ennemi de l\'équipe de mercenaires ?',
      options: ['Balalaika', 'Choco', 'The Joker', 'Hansel'],
      correctAnswer: 'Balalaika',
    },
    {
      question: 'Dans "Neon Genesis Evangelion", qui est le principal pilier de l\'organisation NERV ?',
      options: ['Gendo Ikari', 'Misato Katsuragi', 'Shinji Ikari', 'Ritsuko Akagi'],
      correctAnswer: 'Gendo Ikari',
    },
    {
      question: 'Dans "One Punch Man", qui est le principal antagoniste de la première saison ?',
      options: ['Boros', 'Garou', 'Doctor Kuseno', 'Vlad'],
      correctAnswer: 'Boros',
    },
    {
      question: 'Dans "Sailor Moon", quel est le nom du prince du royaume de la Lune ?',
      options: ['Endymion', 'Tuxedo Mask', 'Luna', 'Sailor Mars'],
      correctAnswer: 'Endymion',
    },
    {
      question: 'Dans "Mob Psycho", qui est le principal antagoniste de la saison 2 ?',
      options: ['Toichiro', 'Mojou', 'Koyama', 'Kageyama'],
      correctAnswer: 'Toichiro',
    },
    {
      question: 'Dans "Re:Zero", quel est le pouvoir de Subaru Natsuki ?',
      options: ['Retour dans le temps', 'Invincibilité', 'Pouvoir d\'invoquer des démons', 'Contrôle des éléments'],
      correctAnswer: 'Retour dans le temps',
    },
  ]);
    // Ajoute d'autres questions ici

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    // Terminer le quiz si toutes les questions ont été répondues ou en mode survie après 40 erreurs
    if (currentQuestionIndex >= questions.length || (gameMode === 'survie' && mistakes >= 40)) {
      setQuizFinished(true);
      updateScore(score);
    }
  }, [currentQuestionIndex, mistakes, score, setQuizFinished, updateScore, gameMode, questions.length]);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    if (answer === questions[currentQuestionIndex]?.correctAnswer) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
    }
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
    }, 1000);
  };

  if (currentQuestionIndex >= questions.length) {
    return null; // Evite de rendre quoi que ce soit si l'index est hors limites
  }

  return (
    <div>
      {gameMode === 'chrono' && <Timer />}
      <div className="mistakes">Erreurs : {mistakes} / 3</div>
      {questions[currentQuestionIndex] && (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          handleAnswer={handleAnswer}
          userAnswer={userAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;

import { useState } from 'react';

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import { images as arr } from '../../data';

import { Container } from './style';

export function Carousel() {
  const [showArr, setShowArr] = useState([arr[arr.length - 1], arr[0], arr[1]]);
  const [animate, setAnimate] = useState(false);
  const [animateside, setAnimateSide] = useState('');
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < arr.length - 1) {
      setIndex((state) => state + 1);
    } else {
      setIndex(0);
    }
    setAnimate(true);
    setAnimateSide('animateRight');
  };

  const previous = () => {
    if (index > 0) {
      setIndex((state) => state - 1);
    } else {
      setIndex(arr.length - 1);
    }
    setAnimate(true);
    setAnimateSide('animateLeft');
  };

  const update = () => {
    setShowArr([
      arr[index === 0 ? arr.length - 1 : index - 1],
      arr[index],
      arr[index === arr.length - 1 ? 0 : index + 1],
    ]);
  };

  return (
    <Container>
      <div className={`carousel `}>
        {showArr.map((element) => (
          <div
            onAnimationEnd={() => {
              setAnimate(false);
              update();
            }}
            key={Math.random()}
            className={`card ${animate && animateside}`}
          >
            <img src={element} alt="teste" />
          </div>
        ))}
      </div>
      <button onClick={previous}>
        <MdOutlineArrowBackIosNew />
      </button>
      <button onClick={next}>
        <MdOutlineArrowForwardIos />
      </button>
    </Container>
  );
}

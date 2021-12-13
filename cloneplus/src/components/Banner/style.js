import styled from 'styled-components';

export const Carousel = styled.div`
  height: 300px;
  position: relative;
  overflow: hidden;

  button {
    width: 50px;
    height: 100%;
    position: absolute;
    z-index: 2;
    border: none;
    background: transparent;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }

  button:last-of-type {
    right: 0;
  }
`;

export const Holder = styled.div`
  width: ${(props) => props.children.length * 1200 + 'px'};
  flex-grow: 1;
  gap: 50px;

  .item {
    width: 1200px;
    position: relative;
    background: tomato;
    flex-grow: 1;

    .logo {
      position: absolute;
      left: 20px;
      top: 20px;
      z-index: 1;
    }

    .banner {
      width: 100%;
      transform: translateY(-40%);
    }
  }

  .current {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    box-shadow: inset 10px 10px #fff;
    cursor: pointer;
  }

  .next {
    position: absolute;
    margin: auto;
    right: -85%;
    filter: grayscale(70%);
  }

  .previous {
    position: absolute;
    margin: auto;
    left: -85%;
    filter: grayscale(70%);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 450px;
    padding: 20px 0;
    overflow-x: hidden;
    position: relative;

    .carousel {
      display: flex;
      width: 92%;
      height: 100%;
      position: relative;
      margin: auto;

      .card {
        flex: 0 0 auto;
        margin-right: 30px;
        position: relative;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        width: 100%;
        height: 100%;
        left: -102.5%;
        transition: 1s;
        overflow: hidden;
        color: teal;
        display: grid;
        place-items: center;
      }

      .card img {
        width: 100%;
        object-fit: cover;
      }

      .animateRight {
        animation: animateToRight 1s;
      }

      .animateLeft {
        animation: animateToLeft 1s;
      }
    }

    button {
      position: absolute;
      height: 100%;
      width: 50px;
      top: 0;
      border: none;
      background-color: #00000090;
      cursor: pointer;
      color: white;
      font-size: 2rem;
    }

    button:nth-of-type(2) {
      right: 0;
    }
  }

  @keyframes animateToRight {
    to {
      left: -204.5%;
    }
  }

  @keyframes animateToLeft {
    to {
      left: 0%;
    }
`;

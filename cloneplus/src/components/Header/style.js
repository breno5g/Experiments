import styled from 'styled-components';
import searchIcon from '../../assets/search-solid.svg';

export const StyledHeader = styled.header`
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #0e0f15;
  align-items: center;
  margin-bottom: 20px;

  div.container {
    display: flex;
    align-items: center;
  }

  img {
    height: 40px;
  }

  ol {
    display: flex;
    color: white;
    gap: 20px;
    margin-left: 50px;
    list-style: none;
    align-items: center;
  }

  ol li {
    position: relative;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 15px 0;
  }

  ol li::before {
    margin-right: 10px;
  }

  ol li:nth-child(1)::before {
    content: '';
  }

  ol li:nth-child(2)::before {
    content: '';
    background-image: url(${searchIcon});
    display: inline-block;
    padding: 7px;
  }

  ol li:nth-child(3)::before {
    content: '';
  }

  ol li:nth-child(4)::before {
    content: '';
  }

  ol li:nth-child(5)::before {
    content: '';
  }

  ol li:nth-child(6)::before {
    content: '';
  }

  ol li::after {
    content: '';
    position: absolute;
    background-color: white;
    height: 2px;
    width: 0;
    left: 25px;
    bottom: 10px;
    transition: width 0.2s;
  }

  ol li:hover::after {
    width: calc(100% - 25px);
  }

  img:last-child {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

import styled from "styled-components";

export const MenuBarsContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 10;
  display: inline;
  cursor: pointer;

  .bar {
    width: 3.5rem;
    height: 2px;
    background-color: #fff;
    margin: 8px 0;
    transition: 0.4s;
  }

  &.change .bar1 {
    transform: rotate(-45deg) translate(-7px, 8px);
  }

  &.change .bar2 {
    opacity: 0;
  }

  &.change .bar3 {
    transform: rotate(45deg) translate(-6px, -8px);
  }
`;
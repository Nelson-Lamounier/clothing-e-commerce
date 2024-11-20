import styled from "styled-components";

// Search Container
export const SearchContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  height: 50px;

  .input {
    background-color: #fff;
    border: 0;
    font-size: 18px;
    padding: 15px;
    height: 50px;
    marging-top: 50px;
    width: ${({ isActive }) => (isActive ? "200px" : "50px")};
    transition: width 0.3s ease;

    &:focus {
      outline: none;
    }
  }

  .btn {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    transition: transform 0.3s ease;
    transform: ${({ isActive }) =>
      isActive ? "translateX(198px)" : "translateX(0)"};

    &:focus {
      outline: none;
    }
  }
`;
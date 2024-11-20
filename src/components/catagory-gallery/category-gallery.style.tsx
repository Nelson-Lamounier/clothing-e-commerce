import styled from "styled-components";

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const GalleryLink = styled.div`
  position: relative;
  width: 250px;
  text-align: center;
`;

export const ClothImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ClothName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ClothDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;
import { FC, useState, useEffect } from "react";
import axios from "axios";

import {
  Gallery,
  GalleryLink,
  ClothImg,
  ClothName,
  ClothDescription,
} from "./category-gallery.style";

interface ImageData {
    _id: string;
    url: string;
    title: string;
    description: string;
    category: string;
}

const CategoryGallery: FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    axios.get<ImageData[]>("/api/images").then((response) => {
      setImages(response.data);
    });
  }, []);
  return (
    <Gallery>
      {images.map((image) => (
        <GalleryLink key={image._id}>
          <ClothImg src={image.url} alt={image.title} />
          <div>
            <ClothName>{image.title}</ClothName>
            <ClothDescription>{image.description}</ClothDescription>
          </div>
        </GalleryLink>
      ))}
    </Gallery>
  );
};

export default CategoryGallery;

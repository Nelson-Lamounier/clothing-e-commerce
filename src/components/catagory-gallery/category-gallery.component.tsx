import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoCarousel from "../video-carousel/video-carousel.component";

import {
  GalleryTitle,
  Gallery,
  GalleryLink,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  Header,

} from "./category-gallery.style";

interface Image {
  _id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

const CategoryGallery: FC = () => {
  const { category } = useParams<{ category: string }>(); // Get category from URL
  const [images, setImages] = useState<Image[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Image | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleHover = (product: Image) => {
    setSelectedProduct(product);
  };
  const handleAddToCart = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/images?category=${category}`
        );
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch images");
      }
    };

    if (category) fetchImages();
  }, [category]);

  return (
    <>
      <Header>
        <VideoCarousel />
      </Header>
      <GalleryTitle>{category}</GalleryTitle>
      <Gallery>
        {images.map((image) => (
          <GalleryLink key={image._id}>
            <ProductImage src={image.url} alt={image.title} />
            <div>
              <ProductTitle>{image.title}</ProductTitle>
              <ProductDescription>{image.description}</ProductDescription>
              <ProductPrice>€{`${image.price.toFixed(2)}`}</ProductPrice>
            </div>
          </GalleryLink>
        ))}
      </Gallery>
    </>
  );
};

export default CategoryGallery;

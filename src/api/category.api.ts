import axios from "axios";
import { Category } from "../../src/store/categories/category.slice";

// type CategoryItem = {
//   id: number;
//   imageUrl: string;
//   name: string;
//   price: number;
// };

// type CategoryData = {
//   imageUrl: string;
//   items: CategoryItem[];
//   title: string;
// };

// export type AdditionalInformation = {
//   displayName?: string;
// };

// export type UserData = {
//   createdAt: Date;
//   displayName: string;
//   email: string;
// };

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products`
    );
    return response.data; // Return the categories fetched from the backend
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
};

// import axios from "axios";

// export const fetchImages = async (category: string) => {
//   try {
//     const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/images`, {
//       params: { category }, // Use query parameters for better readability
//     });
//     return response.data; // Return the fetched images
//   } catch (error) {
//     console.error("Failed to fetch images:", error);
//     throw new Error("Failed to fetch images");
//   }
// };

// useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/images?category=${category}`
//         );
//         setImages(response.data);
//       } catch (err) {
//         setError("Failed to fetch images");
//       }
//     };

//     if (category) fetchImages();
//   }, [category]);

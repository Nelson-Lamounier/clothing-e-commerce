import axios from "axios"

export const fetchCategoriesAPI = async (category: string): Promise<any> => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/images`, {
            params: { category},
        })
        return response.data;
    } catch (error) {
        console.log("Failed to fetch images:", error)
    } throw new Error ("Failed to fetch images")
}

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
// import axios from 'axios';

// export const isImage = async (url) => {
//   try {
//     const response = await axios.head(url); // Use Axios's HEAD request to fetch only the headers

//     // Check if the request was successful (status code 200) and content-type starts with 'image/'
//     if (response.status === 200) {
//       const contentType = response.headers['content-type'];
//       return contentType && contentType.startsWith('image/');
//     }
//     return false; // If the response status is not 200 (e.g., 404)
//   } catch (error) {
//     console.error('Error:', error);
//     return false;
//   }
//   return false;
// };

export const isImage = (url) => {
  // Define a regex pattern to match common image file extensions
  const imageExtensionsPattern = /\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)$/i;

  // Test if the URL matches the pattern
  return imageExtensionsPattern.test(url);
};
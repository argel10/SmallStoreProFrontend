import axios from "axios";
import { useState } from "react";

export const useUploadImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async (event: any) => {
    setIsLoading(true);
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "r9rqkvzr");

      try {
        const response = axios
          .post(
            "https://api.cloudinary.com/v1_1/matosr96/image/upload",
            formData
          )
          .then((response) => {
            console.log(
              "Archivo subido exitosamente a Cloudinary:",
              response.data
            );
            setImageUrl(response.data.url);
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      }
    }
  };

  return {
    isLoading,
    uploadImage,
    imageUrl,
  };
};

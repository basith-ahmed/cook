import React from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import ImageDisplay from "./ImageDisplay";
import Footer from "./Footer";

const Layout = () => {
  const [dish, setDish] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const fetchImage = async () => {
    try {
      if (!dish) {
        setError("Please enter a word!");
        setImageUrl("");
        return;
      }
      const response = await fetch(`https://cook-api.basithahmed.me/cook/${dish}`);
      const data = await response.json();
      if (response.ok) {
        setImageUrl(data.imageUrl);
        setError("");
      } else {
        setError(data.error || "Failed to fetch image");
        setImageUrl("");
      }
    } catch (error) {
      setError("An error occurred while fetching the image");
      setImageUrl("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-3">
      <div className="w-full max-w-md">
        <div className="p-6 bg-white shadow-[0px_0.5px_2.5px_rgba(0,0,0,0.4),0px_0px_10px_5px_rgba(0,0,0,0.05)] rounded-[15px]">
          <h1 className="text-2xl font-bold mb-4 text-center">
              Let's Cook!
          </h1>
          <SearchForm
            dish={dish}
            setDish={setDish}
            fetchImage={fetchImage}
          />
          {error && (
            <p className="text-red-500 my-4 w-full text-center">{error}</p>
          )}
          {imageUrl && <ImageDisplay imageUrl={imageUrl} dish={dish} />}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;

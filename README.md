## COOK-API Documentation

### Overview

The COOK-API is a simple API service designed to fetch random images related to food or dishes. It is a RESTful API built with Express.js and which uses Pixabay API to fetch images. This doc provides a detailed instruction on how to access the API, use its endpoints, and integrate it into your frontend application.

### Base URL

The base URL for the API is:

```
https://cook-api.basithahmed.me
```

### Endpoints

#### 1. **GET `/`**
- **Description**: Returns the welcome message with a link to the COOK API documentation.
- **Example Request**:
  ```sh
  curl -X GET https://cook-api.basithahmed.me/
  ```

#### 2. **GET `/cook`**
- **Description**: Returns COOK-API documentation.
- **Example Request**:
  ```sh
  curl -X GET https://cook-api.basithahmed.me/cook
  ```

#### 3. **GET `/cook/:dish`**
- **Description**: Fetches a random image URL related to the specified dish.
- **Parameters**:
  - `:dish` (string) - The name of the dish you want to search for (e.g., "pizza", "cat").
- **Example Request**:
  ```sh
  curl -X GET https://cook-api.basithahmed.me/cook/pizza
  ```
- **Example Response**:
  ```json
  {
    "imageUrl": "https://example.com/pizza.jpg"
  }
  ```
- **Error Responses**:
  - **404 Not Found**: If no images are found for the specified keyword.
    ```json
    {
      "error": "No images found for this keyword"
    }
    ```
  - **500 Internal Server Error**: If there is an issue with the request or API.
    ```json
    {
      "error": "An error occurred while processing the request"
    }
    ```

### Integration into Frontend

To integrate the COOK-API into your frontend application, follow these steps:

#### 1. **Fetch the Image URL**

Use the `fetch` API or `axios` to make a request to the COOK-API and retrieve the image URL.

Example with `fetch`:
```javascript
const fetchDishImage = async (dish) => {
  try {
    const response = await fetch(`https://cook-api.basithahmed.me/cook/${dish}`);
    if (!response.ok) {
      throw new Error("Error fetching image");
    }
    const data = await response.json();
    return data.imageUrl;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
```

Example with `axios`:
```javascript
const fetchDishImage = async (dish) => {
  try {
    const response = await axios.get(`https://cook-api.basithahmed.me/cook/${dish}`);
    return response.data.imageUrl;
  } catch (error) {
    console.error("Error:", error.message);
  }
};
```

#### 2. **Display the Image**

Once you have fetched the image URL, you can display it in your frontend application.

Example in React:
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishImage = ({ dish }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const url = await fetchDishImage(dish);
      setImageUrl(url);
    };
    fetchImage();
  }, [dish]);

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt={dish} /> : <p>Loading...</p>}
    </div>
  );
};

export default DishImage;
```

### Error Handling

Ensure to handle errors in your frontend by providing user-friendly messages if the API request fails.

Example:
```javascript
const fetchDishImage = async (dish) => {
  try {
    const response = await axios.get(`https://cook-api.basithahmed.me/cook/${dish}`);
    return response.data.imageUrl;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("No images found for this keyword");
    } else {
      console.error("An error occurred while processing the request");
    }
  }
};
```

NOW MAKE ME A CUP OF COFFEE CHEF!!!
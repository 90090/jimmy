export const fetchGoogleReviews = async (googleMapsLink) => {
  try {
    const response = await fetch(`http://localhost:3001/get-reviews?url=${encodeURIComponent(googleMapsLink)}`);
    const data = await response.json();
    return data.reviews;
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }
};


function Star({ rating }) {
  const filledStars = Math.floor(rating / 2);
  const hasHalfStar = (rating / 2) % 1 >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="me-2 d-flex">
      {[...Array(filledStars)].map((_, index) => (
        <i
          key={`filled-${index}`}
          className="bi bi-star-fill"
          style={{ fontSize: "12px", color: "gold" }}
        ></i>
      ))}

      {hasHalfStar && (
        <i
          className="bi bi-star-half"
          style={{ fontSize: "12px", color: "gold" }}
        ></i>
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <i
          key={`empty-${index}`}
          className="bi bi-star"
          style={{ fontSize: "12px", color: "gray" }}
        ></i>
      ))}
    </div>
  );
}

export default Star;

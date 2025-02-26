function Review({ review }) {
  return (
    <div>
      <h1>Reviews</h1>
      <hr />
      {review.length > 0 ? (
        review.map((rev, index) => (
          <div key={index}>
            <h5 className="text-primary">{rev.author}</h5>
            <p>{rev.content}</p>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}

export default Review;

import Card from "./Card";

function CardGallery() {
  return (
    <div className="container my-4">
      <Card endpoint="POPULAR_MOVIES" />
    </div>
  );
}

export default CardGallery;

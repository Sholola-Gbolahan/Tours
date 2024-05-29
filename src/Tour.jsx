const Tour = ({ id, image, info, name, price, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button
      className=" btn btn-block btn-delete"
      onClick={() => removeTour(id)}
      >
        not instrested</button>
    </article>
  );
};

export default Tour;

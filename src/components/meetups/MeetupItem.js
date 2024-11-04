import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export default function MeetupItem({
  item,
  addFavorite,
  removeFavorite,
  isFavorite,
}) {
  const toggleFavoriteStatus = () => {
    if (isFavorite) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatus}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

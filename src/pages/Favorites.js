import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage({ favorites, removeFavorite }) {
  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favorites.map((item) => (
          <MeetupItem
            key={item.id}
            item={item}
            removeFavorite={removeFavorite}
            isFavorite
          />
        ))}
      </ul>
    </section>
  );
}

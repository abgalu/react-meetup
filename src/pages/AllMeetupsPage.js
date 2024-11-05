import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage({
  data,
  addFavorite,
  removeFavorite,
  checkIsFavorite,
}) {
  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data.map((item) => (
          <MeetupItem
            key={item.id}
            item={item}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={checkIsFavorite(item.id)}
          />
        ))}
      </ul>
    </section>
  );
}

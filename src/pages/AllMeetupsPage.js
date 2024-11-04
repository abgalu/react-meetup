import MeetupItem from "../components/meetups/MeetupItem";
import { useFetch } from "../util-hooks/useFetch";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage({
  addFavorite,
  removeFavorite,
  checkIsFavorite,
}) {
  const { data } = useFetch({
    url: "/data.json",
  });

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

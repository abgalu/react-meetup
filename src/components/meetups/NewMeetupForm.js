import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm({ addMeetup }) {
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formattedFormData = Object.fromEntries(formData.entries());

    addMeetup(formattedFormData);
    navigate(PATHS.ALL_MEETUPS);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" name="title" type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input id="image" name="image" type="url" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

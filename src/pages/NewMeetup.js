import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage({ addMeetup }) {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetup} />
    </section>
  );
}

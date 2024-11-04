import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";

const item = {
  id: "1",
  title: "Sample Meetup",
  address: "123 Meetup St.",
  description: "A sample meetup for testing.",
  image: "sample.jpg",
};
const addFavorite = jest.fn();
const removeFavorite = jest.fn();

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(
    <MeetupItem
      item={item}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      isFavorite={false}
    />
  );
  expect(wrapper.exists()).toBe(true);
});

test("should add to favorites", () => {
  render(
    <MeetupItem
      item={item}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      isFavorite={false}
    />
  );

  const button = screen.getByRole("button", { name: /add to favorites/i });
  fireEvent.click(button);

  expect(addFavorite).toHaveBeenCalledWith(item);
});

test("should remove from favorites", () => {
  render(
    <MeetupItem
      item={item}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      isFavorite
    />
  );

  const button = screen.getByRole("button", {
    name: /remove from favorites/i,
  });
  fireEvent.click(button);

  expect(removeFavorite).toHaveBeenCalledWith(item.id);
});

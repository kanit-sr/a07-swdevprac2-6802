"use client";

import { useReducer } from "react";
import Card from "@/components/Card";

const venueNames = ["The Grand Table", "Spark Space", "The Bloom Pavilion"];

type RatingsMap = Map<string, number>;

type RatingsAction = {
  type: "set-rating";
  venueName: string;
  rating: number;
} | {
  type: "remove-venue";
  venueName: string;
};

const initialRatings: RatingsMap = new Map(
  venueNames.map((venueName) => [venueName, 0])
);

function ratingsReducer(state: RatingsMap, action: RatingsAction): RatingsMap {
  switch (action.type) {
    case "set-rating": {
      const nextState = new Map(state);
      nextState.set(action.venueName, action.rating);
      return nextState;
    }
    case "remove-venue": {
      const nextState = new Map(state);
      nextState.delete(action.venueName);
      return nextState;
    }
    default:
      return state;
  }
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  return (
    <div className="my-16 mx-6 flex flex-col items-center gap-16">
      <div className="mx-auto flex flex-row flex-wrap justify-center gap-6 pb-8 px-4 max-w-5xl">
        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          onRatingChange={(newRating) =>
            dispatch({
              type: "set-rating",
              venueName: "The Grand Table",
              rating: newRating,
            })
          }
        />
        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          onRatingChange={(newRating) =>
            dispatch({
              type: "set-rating",
              venueName: "Spark Space",
              rating: newRating,
            })
          }
        />
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          onRatingChange={(newRating) =>
            dispatch({
              type: "set-rating",
              venueName: "The Bloom Pavilion",
              rating: newRating,
            })
          }
        />
      </div>

      <div className="mx-auto mt-20 w-full max-w-2xl px-4">
        <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-4 text-center shadow-md">
          <h3 className="mb-1 text-lg font-semibold text-gray-800">Venue Ratings</h3>
          <p className="mb-3 text-sm text-gray-500">Click an item to remove it from this list.</p>

          <div className="space-y-2">
            {Array.from(ratings.entries()).map(([venueName, rating]) => (
              <div
                key={venueName}
                data-testid={venueName}
                className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-gray-200 bg-white px-4 py-2 text-center text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow"
                onClick={() => dispatch({ type: "remove-venue", venueName })}
              >
                <span className="font-medium">{venueName}</span>
                <span className="rounded-full bg-orange-100 px-3 py-0.5 text-sm font-semibold text-orange-900">
                  {`Rating: ${rating}`}
                </span>
              </div>
            ))}
            {ratings.size === 0 && (
              <div className="rounded-xl border border-dashed border-gray-300 bg-white px-4 py-3 text-center text-sm text-gray-500">
                No rated venues in the list.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
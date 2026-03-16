"use client";

import Image from "next/image";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import InteractiveCard from "@/components/InteractiveCard";

interface CardProps {
  venueName?: string;
  imgSrc?: string;
  onRatingChange?: (newRating: number) => void;
}

export default function Card({
  venueName = "The Bloom Pavilion",
  imgSrc = "/img/bloom.jpg",
  onRatingChange,
}: CardProps) {
  const [rating, setRating] = useState<number | null>(0);

  return (
    <InteractiveCard>
      <div className="relative w-full h-[200px]">
        <Image
          src={imgSrc}
          alt={venueName}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{venueName}</h2>
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_, newValue) => {
            const nextRating = newValue ?? 0;
            setRating(nextRating);
            onRatingChange?.(nextRating);
          }}
        />
      </div>
    </InteractiveCard>
  );
}

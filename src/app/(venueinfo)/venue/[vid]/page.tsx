import Image from "next/image";
import { notFound } from "next/navigation";

type Venue = {
  vid: string;
  name: string;
  imgSrc: string;
};

const venueMap = new Map<string, Venue>([
  ["001", { vid: "001", name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" }],
  ["002", { vid: "002", name: "Spark Space", imgSrc: "/img/sparkspace.jpg" }],
  ["003", { vid: "003", name: "The Grand Table", imgSrc: "/img/grandtable.jpg" }],
]);

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = venueMap.get(vid);

  if (!venue) {
    notFound();
  }

  return (
    <main className="mx-auto my-12 w-full max-w-4xl px-6">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
        <div className="relative h-[320px] w-full">
          <Image
            src={venue.imgSrc}
            alt={venue.name}
            fill
            className="object-cover"
            draggable={false}
            priority
          />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">{venue.name}</h1>
          <p className="mt-2 text-sm text-gray-500">Venue ID: {venue.vid}</p>
        </div>
      </div>
    </main>
  );
}

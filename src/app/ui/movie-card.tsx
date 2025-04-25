import {MovieDTO} from "@/app/lib/definitions";
import {useState} from "react";

export default function MovieCard({movie}: { movie: MovieDTO }) {
  const [expanded, setExpanded] = useState(false);

  return (
      <div className="max-w-3xl mx-auto">
        <div
            tabIndex={0}
            onFocus={() => setExpanded(true)}
            onBlur={() => setExpanded(false)}
            className="flex bg-white shadow-lg rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl w-[600px] outline-none"
        >
          <img src={movie.imageUrl} alt={movie.title} className="w-32 h-48 object-cover" />
          <div className="relative p-4 flex flex-col justify-center w-full">
            <h2
                className={`text-gray-800 font-bold text-left text-3xl transition-all duration-500 ease-in-out`}
                style={{
                  transformOrigin: "left center",
                  transform: expanded ? "scale(1)" : "scale(1)",
                  // add margin bottom to create space for description when expanded
                  marginBottom: expanded ? "0.5rem" : "0",
                  transitionProperty: "transform, margin-bottom",
                }}
            >
              {movie.title}
            </h2>
            <p
                className="text-gray-600 overflow-hidden max-w-full transition-[max-height,opacity,transform] duration-500 ease"
                style={{
                  maxHeight: expanded ? "10rem" : "0",
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? "translateY(0)" : "translateY(10px)",
                }}
            >
              {movie.description}
            </p>
          </div>
        </div>
      </div>
  );
}

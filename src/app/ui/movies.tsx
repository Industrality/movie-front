import {MovieDTO} from "@/app/lib/definitions";
import MovieCard from "@/app/ui/movie-card";
import {useEffect, useState} from "react";

export default function Movies() {
  const url = 'http://localhost:8080/movie'

  const [movies, setMovies] = useState<MovieDTO[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(url)
      const data: MovieDTO[] = await res.json()
      setMovies(data)
    }
    fetchPosts()
  }, [])

  return (
      <div className={"grid grid-cols-1 gap-4"}>
        {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
        ))}
      </div>
  );
}

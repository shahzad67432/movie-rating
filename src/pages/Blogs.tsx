import { useQuery } from "@tanstack/react-query";
import { fetchBlogsData } from "../api/blogs";
import { useState } from "react";
import EpisodeCard from "../components/EpisodeCard";
import Modal from "../components/Modal";
import { Episode, Season } from "../types";

const Blogs: React.FC = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [page, setPage] = useState<number>(1);

  const limit = 1;

  const { data, status, isLoading, error } = useQuery<Season[]>({
    queryKey: ['movies', page],
    queryFn: () => fetchBlogsData(page * limit, limit),
    staleTime: 1000 * 60 * 10,
  });

  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;
  if (status === 'error' && error instanceof Error) return <h1>Error: {error.message}</h1>;

  const handleNextPage = () => {
    setPage(old => old + 1);
  };

  const handlePreviousPage = () => {
    setPage(old => Math.max(old - 1, 0));
  };

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  };

  const handleCloseModal = () => {
    setSelectedEpisode(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <div className="text-white text-center text-2xl mb-4">Movies Data</div>
      {Array.isArray(data) && data.length > 0 ? (
        data.map(season => (
          <div key={season.seasonId} className="flex flex-wrap justify-center">
            {/* @ts-ignore */}
            {season.episodes.map(episode => (
              <EpisodeCard key={episode.episodeId} episode={episode} onClick={() => handleEpisodeClick(episode)} />
            ))}
          </div>
        ))
      ) : (
        <div className="text-white">No data available</div>
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 0}
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Previous Page
        </button>
        <span className="text-white py-2 px-4">{page}</span>
        <button
          onClick={handleNextPage}
          //@ts-ignore
          disabled={data && data.length < limit}
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Next Page
        </button>
      </div>
      {selectedEpisode && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold text-blue-300 mb-2">{selectedEpisode.title}</h2>
            <p className="text-sm text-blue-500 mb-2">Season {selectedEpisode.summary.season}, Episode {selectedEpisode.summary.episode}</p>
            <img
              src={selectedEpisode.interestingMoment._342x192.webp.value.url}
              alt={selectedEpisode.title}
              className="w-full mb-2"
            />
            <p className="text-sm text-gray-400 mb-2">{selectedEpisode.contextualSynopsis.text}</p>
            <p className="text-sm text-gray-400 mb-2">Runtime: {Math.floor(selectedEpisode.runtime / 60)} minutes</p>
            <p className="text-sm text-gray-400 mb-2">Availability Date: {selectedEpisode.availability.availabilityDate}</p>
            <a
              href={selectedEpisode.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Play Now
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Blogs;

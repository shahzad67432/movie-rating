import React from 'react';
import { Episode } from '../types';

interface EpisodeCardProps {
  episode: Episode;
  onClick: () => void;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer max-w-md mx-auto bg-gray-900 text-white rounded-lg shadow-md overflow-hidden m-2">
      <div className="bg-gray-800 p-4">
        <h2 className="text-xl font-bold text-blue-300">{episode.title}</h2>
        <p className="text-sm text-blue-500">Season {episode.summary.season}, Episode {episode.summary.episode}</p>
      </div>
      <div>
        <img
          src={episode.interestingMoment._342x192.webp.value.url}
          alt={episode.title}
          className="w-full"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400">{episode.contextualSynopsis.text}</p>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-blue-400">Runtime: {Math.floor(episode.runtime / 60)} minutes</span>
          {episode.availability.isPlayable && (
            <span className="text-green-400">Available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;

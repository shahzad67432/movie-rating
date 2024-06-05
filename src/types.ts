export interface Episode {
    episodeId: string;
    title: string;
    runtime: number;
    availability: {
      isPlayable: boolean;
      availabilityDate: string;
    };
    summary: {
      season: number;
      episode: number;
    };
    contextualSynopsis: {
      text: string;
    };
    interestingMoment: {
      _342x192: {
        webp: {
          value: {
            width: number;
            height: number;
            url: string;
          };
        };
      };
    };
    imdbUrl?: string;
  }
  
  export interface Season {
    seasonId: string;
    episodes: Episode[];
  }
  
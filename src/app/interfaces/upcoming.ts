export interface UpcomingAnimeResponse {
  data: UpcomingAnime[];
}

export interface UpcomingAnime {
  mal_id: number;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  trailer: {
    url: string;
    images: {
      maximum_image_url: string;
    };
  };
  title: string;
  synopsis: string;
  year: string;
  season: string;
}

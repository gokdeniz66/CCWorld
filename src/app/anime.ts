export interface AnimeResponse {
  data: Anime[];
}

export interface Anime {
  mal_id: number;
  url: string;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

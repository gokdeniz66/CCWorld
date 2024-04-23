export interface animeRecommendedResponse {
  dataRecommended: animeRecommended[];
}

export interface animeRecommended {
  mal_id: number;
  entry: [
    {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          large_image_url: string;
        };
      };
      title: string;
    }
  ];
}

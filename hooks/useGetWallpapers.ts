import { useQuery } from "@tanstack/react-query";
import { SearchPayload } from "../types/pexels";

const PEXELS_API_KEY = process.env.EXPO_PUBLIC_PEXELS_API_KEY;

const pexelsApi =
  "https://api.pexels.com/v1/search?query=mobile wallpapers&orientation=portrait";

export const useGetWallpapers = () => {
  const query = useQuery<SearchPayload>({
    staleTime: 0,
    queryKey: ["wallpapers"],
    queryFn: async () => {
      const response = await fetch(pexelsApi, {
        headers: {
          Authorization: PEXELS_API_KEY!,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    },
  });

  return query;
};

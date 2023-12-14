import { z } from "zod";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";

const pictogramKeywordSchema = z.object({
  type: z.number(),
  keyword: z.string(),

  // These exist according to the documentation, but they've never been seen in the wild
  idKeyword: z.number().optional(),
  plural: z.string().optional(),
  idLocution: z.string().optional(),
  meaning: z.string().optional(),
  lse: z.number().optional(),
});
export type PictogramKeyword = z.infer<typeof pictogramKeywordSchema>;

const pictogramSchema = z.object({
  _id: z.number(),
  keywords: z.array(pictogramKeywordSchema),
  schematic: z.boolean(),
  sex: z.boolean(),
  violence: z.boolean(),
  created: z.string(),
  lastUpdated: z.string(),
  downloads: z.number(),
  categories: z.array(z.string()),
  synsets: z.array(z.string()),
  tags: z.array(z.string()),
  desc: z.string().optional(),
});
export type Pictogram = z.infer<typeof pictogramSchema>;

export const usePictogramSearch = (searchTerms: string) => {
  const [debouncedSearchTerms] = useDebounce(searchTerms, 500);
  return useQuery({
    queryKey: ["pictogramSearch", "de", debouncedSearchTerms],
    queryFn: async (): Promise<Pictogram[]> => {
      const response = await fetch(
        `https://api.arasaac.org/v1/pictograms/de/bestsearch/${debouncedSearchTerms}`
      );
      const json = await response.json();
      return z.array(pictogramSchema).parse(json);
    },
    enabled: debouncedSearchTerms.length > 0,
  });
};

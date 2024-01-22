import { useEffect, useState } from "react";
import { usePictogramSearch } from "./usePictogramSearch";
import styles from "./PictogramSearch.module.scss";
import { TextField } from "@mui/material";

export const PictogramSearch = () => {
  const [searchTerms, setSearchTerms] = useState("Frau");
  const { data, error } = usePictogramSearch(searchTerms);
  const [focusedPictogramId, setFocusedPictogramId] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  const clearFocus = () => setFocusedPictogramId(undefined);

  if (focusedPictogramId) {
    return (
      <div className={styles.focusedPictogramWrapper} onClick={clearFocus}>
        <img
          className={styles.focusedPictogramImage}
          src={`https://static.arasaac.org/pictograms/${focusedPictogramId}/${focusedPictogramId}_2500.png`}
        />
      </div>
    );
  }

  return (
    <>
      <h1>PictogramSearch</h1>
      <TextField
        label="Suchbegriffe"
        variant="outlined"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      {data && (
        <ul className={styles.pictograms}>
          {data.map((pictogram) => (
            <li
              key={pictogram._id}
              className={styles.pictogramWrapper}
              onClick={() => setFocusedPictogramId(pictogram._id)}
            >
              <img
                className={styles.pictogramImage}
                src={`https://static.arasaac.org/pictograms/${pictogram._id}/${pictogram._id}_2500.png`}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

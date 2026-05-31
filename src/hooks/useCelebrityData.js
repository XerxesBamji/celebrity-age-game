import { useState, useEffect } from 'react';

/**
 * Calculate age from a date-of-birth string (YYYY-MM-DD).
 */
function calcAge(dobStr) {
  if (!dobStr) return null;
  const dob = new Date(dobStr);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

/**
 * Batch fetch photos from Wikipedia Action API for multiple wiki titles.
 */
async function fetchPhotosBatch(wikiTitles) {
  if (!wikiTitles.length) return {};
  try {
    const titlesParam = wikiTitles.join('|');
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
      titlesParam
    )}&prop=pageimages&format=json&pithumbsize=400&origin=*`;

    const res = await fetch(url);
    if (!res.ok) return {};
    const data = await res.json();
    const pages = data.query?.pages || {};

    const photoMap = {};
    Object.values(pages).forEach((page) => {
      // Normalize titles to underscores for matching
      const normTitle = page.title.replace(/ /g, '_');
      photoMap[normTitle] = page.thumbnail?.source ?? null;
    });
    return photoMap;
  } catch {
    return {};
  }
}

/**
 * Hook: given an array of celebrity objects { id, name, wikiTitle, dob },
 * returns enriched array with { ...celeb, photo, age, loading, error }
 * Age is calculated locally instantly. Photos are loaded via a single batch request.
 */
export function useCelebrityData(celebrities) {
  const [enriched, setEnriched] = useState(() =>
    celebrities.map((c) => ({
      ...c,
      photo: null,
      age: calcAge(c.dob), // Instantly calculate age!
      loading: true,
      error: false,
    }))
  );

  useEffect(() => {
    if (!celebrities.length) return;

    let cancelled = false;

    async function loadPhotos() {
      const titles = celebrities.map((c) => c.wikiTitle);
      const photoMap = await fetchPhotosBatch(titles);

      if (cancelled) return;

      setEnriched((prev) =>
        prev.map((item) => {
          const photo = photoMap[item.wikiTitle] ?? null;
          return {
            ...item,
            photo,
            loading: false,
          };
        })
      );
    }

    loadPhotos();

    return () => {
      cancelled = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return enriched;
}

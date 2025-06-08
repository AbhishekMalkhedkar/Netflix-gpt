export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njc4OGM2YzIyMzljNDE1OTZlNjgyZDU4NWU5NjZkZiIsIm5iZiI6MTc0ODg1NzI1NS4xNjksInN1YiI6IjY4M2Q3MWE3NWM3ODE5M2VjYWQyMThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RYh5I-fhPWf5eYKx9dcdr0gsYWcgwgsHDzkAcxSfdBE'
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
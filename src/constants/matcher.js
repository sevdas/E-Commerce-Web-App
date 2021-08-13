const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
export const url = `https://api.unsplash.com/photos?client_id=${
  ACCESS_KEY + "&query=arts-culture" + "&per_page=100"
}`;

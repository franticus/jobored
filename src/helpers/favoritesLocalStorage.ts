export const favoritesLocalStorage = () => {
  const favoritesLocalStorage: any = localStorage.getItem('favoriteVacancies');
  const favoritesParseArr = JSON.parse(favoritesLocalStorage);
  return favoritesParseArr;
};

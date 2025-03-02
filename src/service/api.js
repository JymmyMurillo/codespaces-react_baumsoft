export const fetchAlbums = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?_limit=10&_page=${page}`
  );
  if (!response.ok) {
    throw new Error('Error al cargar los álbumes');
  }
  return response.json();
};
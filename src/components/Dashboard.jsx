import React, { useState, useEffect } from 'react';
import { fetchAlbums } from '../service/api';
import AlbumRow from './AlbumRow';
import { useAuth } from '../context/AuthContext';
import Spinner from './Spinner';
import Error from './Error';

const Dashboard = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { logout } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const getAlbums = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchAlbums(page);
        // Evitar duplicados: solo agregar nuevos datos si no están ya en la lista
        setAlbums((prevAlbums) => {
          const newAlbums = data.filter(
            (album) => !prevAlbums.some((prevAlbum) => prevAlbum.id === album.id)
          );
          return [...prevAlbums, ...newAlbums];
        });
      } catch (error) {
        console.error(error);
        setError('Error al cargar los álbumes. Inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    getAlbums();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Cerrar sesión
      </button>
      </div>
      {error && <Error message={error} />}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Título</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <AlbumRow key={album.id} album={album} />
          ))}
        </tbody>
      </table>
      {loading && <Spinner />}
      <button
        onClick={handleLoadMore}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ver más
      </button>
    </div>
  );
};

export default Dashboard;
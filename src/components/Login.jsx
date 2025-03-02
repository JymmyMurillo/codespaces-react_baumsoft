import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulación de autenticación
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        login(); // Establecer autenticación
        navigate('/dashboard'); // Redirigir al dashboard
      } else {
        setError('Credenciales incorrectas');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
};

export default Login;
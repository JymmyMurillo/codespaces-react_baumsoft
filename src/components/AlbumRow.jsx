import React from 'react';

const AlbumRow = ({ album }) => {
  return (
    <tr>
      <td className="border border-gray-300 p-2">{album.id}</td>
      <td className="border border-gray-300 p-2">{album.title}</td>
    </tr>
  );
};

export default AlbumRow;
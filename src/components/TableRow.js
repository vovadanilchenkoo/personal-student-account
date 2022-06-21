import { useState } from 'react';

const TableRow = ({ topic }) => {
  const [note, setNote] = useState('');

  const handleChange = e => setNote(e.target.value);;

  return (
    <tr>
      <td>{topic.name}</td>
      <td>{topic.description}</td>
      <td>{topic.date}</td>
      <td>{topic.type}</td>
      <td>
        <input onChange={(e) => handleChange(e)} value={note} type='text' placeholder='Add note' />
      </td>
    </tr>
  );
};

export default TableRow;
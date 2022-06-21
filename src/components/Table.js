import { useState, useEffect } from 'react';
import TableRow from './TableRow';

const Table = ({ topics }) => {
  const [topicsList, setTopicsList] = useState([]);
  const [sortBy, setSortBy] = useState({
    order: 'asc',
    field: 'name'
  });

  useEffect(() => setTopicsList(topics), [topics]);

  const toggleSortBy = (field) => {
    setSortBy((curSortBy) => curSortBy.order === 'asc' ? {order: 'desc', field} : {order: 'asc', field})
  };

  useEffect(() => {
    let newSortedList;

    if(sortBy.field === 'name') {
      if(sortBy.order === 'asc') newSortedList = topics.sort((a, b) => (a.name > b.name ? 1 : -1));
      if(sortBy.order === 'desc') newSortedList = topics.sort((a, b) => (a.name > b.name ? -1 : 1));
    } else {
      if(sortBy.order === 'asc') newSortedList = topics.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      if(sortBy.order === 'desc') newSortedList = topics.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }

    setTopicsList([...newSortedList]);
  }, [sortBy]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={() => toggleSortBy('name')}>name</th>
            <th>description</th>
            <th onClick={() => toggleSortBy('date')}>date</th>
            <th>type</th>
            <th>note</th>
          </tr>
        </thead>
        <tbody>
          {
            topicsList.map((topic, i) => (
              <TableRow key={i} topic={topic} />
            ))
          }
        </tbody>
      </table>
    </>
)};

export default Table;
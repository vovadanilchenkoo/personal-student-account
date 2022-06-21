import data from '../data.json';
import { useState, useEffect } from 'react';
import Table from '../components/Table';

const CourseDetails = () => {
  const [topicsList, setTopicsList] = useState([]);
  const topics = JSON.parse(JSON.stringify(data)).topics;

  useEffect(() => setTopicsList(topics), []);

  const handleChange = searchString => {
    const filteredTopics = topics.filter(topic => topic.name.toLowerCase().includes(searchString.toLowerCase()));
    setTopicsList(filteredTopics);
  };

  return (
    <>
      <h2>Course Details</h2>
      <input type='text' placeholder='Find by name' onChange={(e) => handleChange(e.target.value)} />
      <Table topics={topicsList} />
    </>
  );
};

export default CourseDetails;
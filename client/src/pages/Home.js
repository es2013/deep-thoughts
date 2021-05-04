import React from 'react';
//we are importing useQuery hook from Appollos library and new query we just created

import ThoughtList from '../components/ThoughtList';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';


const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // optional chaining.Optional chaining negates the need to check if an object even exists before accessing its properties
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
     <div className="flex-row justify-space-between">
     <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
      )}
    </div>
  </div>
</main>
  );
};

export default Home;

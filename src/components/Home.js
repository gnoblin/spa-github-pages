import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';

export default function Home() {
  const repoReadmeLink = text => (
   <div>text</div>
  );

  return (
    <div>
     
      <div>
        <Interactive
          as={Link}
          
          to="/spa-github-pages/example"
        >Example page</Interactive>
      </div>
      
    </div>
  );
}

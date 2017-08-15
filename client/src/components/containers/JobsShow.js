import React from 'react';

var myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };

var myRequest = new Request('http://localhost:3001/api/jobs/all', myInit);

const JobsShow = ( fetch(myRequest, myInit).then(function(response) {
  return response.json().then(function(json) {
    json.map((job, index) => (
      <div key={index}>
        <h3>{job.title}</h3>
      </div>
            )
          )
        }
      )
    }
  )
)

debugger
export default JobsShow

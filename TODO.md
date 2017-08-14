techMap():

A React app to help jobseekers find tech jobs by querying Google with the Google search API with search terms supplied by user. The app displays the results and registered users can save a job to their profile.

Todo:

1. Build out file structure
 -- components:
  --
 -- containers:
  --
 -- reducers:
  --
2. Build out Rails backend
 -- Two models: User & Job
 -- User has_many Jobs and a Job has_many Users
  -- Join table user_jobs to connect them
 -- Controller renders users data as JSON
3. Build out React frontend
 -- "fetch" search results from Google
 -- render using JobsShow component
 -- If user saves to profile, send to Rails server to add to DB

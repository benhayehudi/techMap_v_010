techMap():

A React app to help jobseekers find tech jobs by querying Google with the Google search API with search terms supplied by user. The app displays latest results for a app specified search query on the main page and visitors can also execute their own searches with the search form.

Todo:

1. Build out file structure
 -- components:
  --
 -- containers:
  --
 -- reducers:
  --
2. Build out Rails backend
 -- One model: Job
 -- Controller renders jobs data from the Google API as JSON
3. Build out React frontend
 -- "fetch" search results from Google via the Rails backend
 -- render using JobsShow component
 -- Visitor submits a search query which fetches from the Google API with JobSeach component and renders to the view.

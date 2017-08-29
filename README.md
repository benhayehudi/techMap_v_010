# techMap() v.0.1.0
## Ben Greenberg

# About
techMap() is a tool to help job seekers in the tech industry find their next job. The application is created with a Rails API backend and a ReactJS frontend with React middleware. Users can perform custom Google searches and view the top level results uncluttered and not distracted with anything else.

# Installation
To install techMap() locally:
1. Clone the repository on to your own computer
2. Run 'bundle install' to install the gem dependencies
3. You need to sign up for your own Google API custom search keys and you can do so at https://developers.google.com/custom-search/json-api/v1/introduction.
4. Add your Google keys to your own '.env' file.
5. Run 'rake start' to load both the Rails API backend and the React frontend.
6. techMap() will automatically load in your browser once you've initiated 'rake start'

# License
techMap() is licensed under the MIT license.

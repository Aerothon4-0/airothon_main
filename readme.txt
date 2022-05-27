The frontend of the app is written in React and the backend is in Flask.

Docker needs to be installed, as it is used to deploy the user's project.
Ports 5000-5010 and 3000-3010 are used. So, they should be available.

The frontend URL is http://localhost:3000/

The backend URL is http://0.0.0.0:5001/user/get_data

When the user inputs the details and presses submit, the project will be deployed in a seperate port using docker.
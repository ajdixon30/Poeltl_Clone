# Poeltl Clone
I created this project to test my knowledge and see if I can re-create the popular NBA player guessing game, [POELTL](https://poeltl.dunk.town/)

## Project Startup
- To run this project, you will need to open **two terminals**.

- In the first terminal, you will start the React application: 

  - ### `npm start`

- In the second terminal, you will start the backend for the application: 

  - ### `json-server --watch current-players.json --port 3004`

## Technologies Used
- **React**: Used to create all of the components that are presented on the web page
- **JSON**: Format used for storing the information about each of the NBA players
- **Redux**: Used for storing status throughout the application (# of guesses, mystery player, incorrect guesses, correct guesses, etc.)
- **Bootstrap**: Used for styling and formatting throughout the application (modals, tables)

## Future Improvements
- Revising the application to use MongoDB for database storage
  - The application is currently using [json-server](https://github.com/typicode/json-server) for its backend API

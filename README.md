# React Leaflet US State Score Tracker

This project is a React application that uses Leaflet for mapping US states and allows users to view and update state scores interactively. Hovering over a state shows its name and current score, while a top-right panel displays the scores for all states.

## Features
- **Interactive Map:** Hover over any state to see its name and score.
- **State Voting:** Click on a state to update its score with vote-up or vote-down buttons.
- **Responsive Design:** A toggle button on smaller screens displays or hides the state score panel.

## Prerequisites
Ensure you have the following installed on your system:
1. Node.js (>= 14.x)
2. npm (Node Package Manager)
3. Git

## Steps to Run the Project

### Clone the Repository
```bash
git clone <GitHub_Link>
```
Replace `<GitHub_Link>` with the actual link to the GitHub repository.

### Navigate to the Project Directory
```bash
cd <project-directory>
```

### Install Dependencies
Install all necessary packages:
```bash
npm install react react-dom react-leaflet leaflet
```

### Start the Development Server
Run the application locally:
```bash
npm start
```
This will start the application, and it will be accessible at `http://localhost:3000/` in your browser.



## Project Structure
```
.
├── public
│   ├── index.html      # Main HTML file
│   └── ...
├── src
│   ├── components      # Reusable React components
│   ├── data            # GeoJSON data for US states
│   ├── index.css       # Global styles
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point
│   └── ...
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Dependencies
The project uses the following key dependencies:
- **React**: A JavaScript library for building user interfaces.
- **Leaflet**: A JavaScript library for interactive maps.
- **React-Leaflet**: React components for Leaflet maps.



## Customization
1. **State Data:**
   - Update `src/data.js` with new GeoJSON data if necessary.

2. **Styling:**
   - Modify `src/index.css` to change the appearance of the application.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Support
If you encounter any issues, feel free to open an issue on the GitHub repository or contact the maintainer directly.

## Acknowledgments
- **Leaflet** for the mapping library.
- **React-Leaflet** for integrating Leaflet with React.
- **OpenStreetMap** for map tiles.

---

Enjoy using the application and feel free to contribute!


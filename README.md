# Movies List

A responsive movie-discovery app built with React and Vite. Browse popular films, search The Movie Database (TMDB), and save favorites that remain available between browser sessions.

## Features

- Browse popular movies from TMDB
- Search movies by title
- Add and remove favorite movies
- Persist favorites with `localStorage`
- Navigate between Home and Favorites without page reloads
- View movie posters and release years
- Loading and error states for API requests
- Responsive movie-card layout

## Built With

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [TMDB API](https://developer.themoviedb.org/docs)
- CSS
- Browser `localStorage`
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm, and create a TMDB API key from the [TMDB developer portal](https://developer.themoviedb.org/docs/getting-started).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MohamedMahmoud2020-dotcom/Movies-List.git
   cd Movies-List
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## API Configuration

This is a frontend-only application, so any credential used by the browser can be inspected by users. For local development, store the TMDB key in a root-level `.env` file:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Then read it in `src/services/api.js`:

```js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

The repository already excludes `.env` and `.env.*` files. Do not commit API keys, and apply domain or usage restrictions through the API provider when available.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with Oxlint |

## Project Structure

```text
src/
├── components/       # Navbar and reusable movie cards
├── context/          # Favorites state and localStorage persistence
├── css/              # Component and page styles
├── pages/            # Home and Favorites pages
├── services/         # TMDB API requests
├── App.jsx           # Routes and application layout
└── main.jsx          # React entry point
```

## How It Works

The Home page loads popular movies from TMDB and supports title-based searches. Each movie card can be added to or removed from Favorites. React Context shares the favorites state across the app, while `localStorage` preserves the list after the browser is closed or refreshed.

## Build for Production

```bash
npm run build
```

The optimized production files are generated in the `dist` directory.

## Data Attribution

Movie data and images are provided by [TMDB](https://www.themoviedb.org/). This project is not endorsed or certified by TMDB.

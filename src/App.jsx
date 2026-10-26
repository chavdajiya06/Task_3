import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTiles = async () => {
      try {
        const q = query(collection(db, "tiles"), orderBy("order"));
        const result = await getDocs(q);

        const data = result.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setTiles(data);
      } 
      catch (error) {
        console.log("Error loading tiles:", error);
      }

      setLoading(false);
    };

    getTiles();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Explore and Learn</h1>
        <p>Discover projects, activities and learning resources.</p>
      </header>

      {loading ? (
        <p className="message">Loading...</p>
      ) : (
        <div className="tile-grid">
          {tiles.map((tile) => (
            <div className="tile-card" key={tile.id}>
              <img src={tile.imageUrl} alt={tile.title} />

              <div className="tile-info">
                <h2>{tile.title}</h2>
                <p>{tile.description}</p>

                {tile.type === "youtube" && tile.youtubeUrl && (
                  <a
                  href={tile.youtubeUrl}
                  target="_blank"
                  rel="noreferrer">
                    Watch on YouTube
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && tiles.length === 0 && (
        <p className="message">No tiles available right now.</p>
      )}
    </div>
  );
}

export default App;


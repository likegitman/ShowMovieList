import { dummy } from "../movieDummy";
import Movie from "../components/Movie";

function Home() {
  return (
    <div>
      <div className="app-container">
        {
          dummy.results.map((dummy)=>{
            return(
              <Movie
                id={dummy.id}
                key={dummy.id}
                title={dummy.title}
                star={dummy.vote_average}
                img={dummy.poster_path}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;

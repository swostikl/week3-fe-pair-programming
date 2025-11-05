import Tour from './Tour';
import {tours} from '../data'
const getTourImage = (name) => {
    return `/src/assets/images/${name}.jpeg`
}

function Tours() {
  return (
      <section className="section" id="tours">
          <div className="section-title">
              <h2>
                  featured <span>tours</span>
              </h2>
          </div>
          <div className="section-center featured-center">
              {tours.map(tour => <Tour {...tour} image = {tour.image} key={tour.id}/>)}
          </div>
      </section>

  );
}

export default Tours;

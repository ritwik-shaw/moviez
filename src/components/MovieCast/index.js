import propTypes from 'prop-types';

const MovieCast = ({ cast }) =>
    <div>
        <h3>Cast</h3>
        <div className="figureContainer">
            {
                cast.map((item, index) =>
                    <figure key={index}>
                        <img
                            src={item.image}
                            onError={
                                (e) => e.target.src = item.placeholderImage
                            }
                            alt="poster"
                            className="imgResponsive" />
                        <figcaption>{item.name}</figcaption>
                    </figure>)
            }
        </div>
    </div>;

MovieCast.propTypes = {
    cast: propTypes.array
};

export default MovieCast;
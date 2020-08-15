import config from '../../config';
export class Movie {

    id = null;
    title = null;
    releaseDate = null;
    voteAverage = null;
    posterImage = null;
    genre = null;
    overview = null;

    cast = [];

    placeholderImage = config.image.placeholderUrl;

    constructor(obj) {

        if (obj) {
            this.id = obj.id;
            this.title = obj.title;
            this.releaseDate = obj.release_date;
            this.voteAverage = obj.vote_average;
            this.voteCount = obj.vote_count;
            this.overview = obj.overview;
            this.posterImage = obj.poster_path ? `${config.image.moviePosterUrl}${obj.poster_path}` : this.placeholderImage;

            if (Array.isArray(obj.genres)) {
                this.genre = obj.genres.map(genre => genre.name).join(', ');
            }

            if (obj.credits && Array.isArray(obj.credits.cast)) {
                obj.credits.cast
                    .slice(0, 6)
                    .map(cast =>
                        this.cast.push(new MovieCast(cast))
                    );
            }
        }
    }
}


export class MovieCast {

    name = null;
    image = null;
    placeholderImage = config.image.placeholderUrl;

    constructor(obj) {
        if (obj) {
            this.name = obj.name;
            this.image = obj.profile_path ? `${config.image.movieCastUrl}${obj.profile_path}` : this.placeholderImage;
        }
    }
}
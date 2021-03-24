const list = (knex, isShowing) =>
  isShowing !== "true"
    ? knex("movies").select("*")
    : knex("movies as m")
        .distinct("m.*")
        .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
        .where({ "mt.is_showing": true });

const listReviewsByMovie = (knex, movieId) =>
  knex("reviews as r").where({ "r.movie_id": movieId });

const read = (knex, movieId) =>
  knex("movies as m").where({ "m.movie_id": movieId }).first();

const findTheater = (knex, movieId) =>
  knex("theaters as t")
    .select()
    .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
    .where({ "mt.is_showing": true })
    .andWhere({ "mt.movie_id": movieId });

const Critics = (knex, criticId) =>
  knex("critics as c").where({ "c.critic_id": criticId }).first();

module.exports = {
  list,
  listReviewsByMovie,
  read,
  findTheater,
  Critics,
};

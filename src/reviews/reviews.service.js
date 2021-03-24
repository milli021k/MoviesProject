const getById = (knex, reviewId) =>
  knex("reviews as r")
    .where({ "r.review_id": Number(reviewId) })
    .select("r.*")
    .first();

const update = (knex, review) =>
  knex("reviews")
    .update(review)
    .where({ "reviews.review_id": review.review_id });

const deleteById = (knex, reviewId) =>
  knex("reviews as r").delete().where({ "r.review_id": reviewId });

module.exports = {
  getById,
  update,
  deleteById,
};

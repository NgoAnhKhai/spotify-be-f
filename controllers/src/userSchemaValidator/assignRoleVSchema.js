const Joi = require("joi");

// Validation schema for assigning a role
const assignRoleVSchema = Joi.object({
  userId: Joi.string()
    .required()
    .regex(/^[0-9a-fA-F]{24}$/),
  newRole: Joi.string().required().valid("user", "artist", "admin"),
  artistDetails: Joi.object({
    name: Joi.string().when("newRole", {
      is: "artist",
      then: Joi.required(),
      otherwise: Joi.optional(),
    }),
    startYear: Joi.number().integer().when("newRole", {
      is: "artist",
      then: Joi.required(),
      otherwise: Joi.optional(),
    }),
    genres: Joi.array().items(Joi.string()).optional(),
    followersCount: Joi.number().integer().min(0).optional(),
    imageURL: Joi.string().uri().optional(),
    difficulties: Joi.string().optional(),
    songs: Joi.array()
      .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
      .optional(),
    albums: Joi.array()
      .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
      .optional(),
  }).optional(),
});

module.exports = assignRoleVSchema;

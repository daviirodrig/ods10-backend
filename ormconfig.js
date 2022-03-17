module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entity.js'],
  ssl: true,
  extra: {
    ssl: { rejectUnauthorized: false },
  },
};

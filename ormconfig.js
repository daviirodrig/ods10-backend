module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entity.js'],
  ssl: process.env.NODE_ENV === 'production' ? true : false,
  extra:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: { rejectUnauthorized: false },
        }
      : null,
};

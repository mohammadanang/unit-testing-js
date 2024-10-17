import express from 'express';
import routes from './route.js';

const app = express();

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.send('Homes');
});
app.use('/api', routes);

/**
 * Express Error Handling
 */
app.use((_err, req, res, _next) => {
  const errMsg = `HTTP server get errors when call: ${req.originalUrl}`;
  console.error(errMsg);

  res.status(400).send({
    code: 400,
    error: true,
    message: errMsg,
  });
});

export default app;

import express from 'express';

import indexRoute from '@routes/index.route';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});
app.use('/', indexRoute);

app.listen(3000, () => console.log('Server runnuning on port 3000'));

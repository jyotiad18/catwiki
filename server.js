const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const bodyParser = require('body-parser');

const app = express();

dotenv.config({ path: './server/config/config.env' });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(hpp());

app.use('/api/breeds', require('./server/routes/api/breed'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});

}
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

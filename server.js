import express from 'express';
import cors from 'cors'; // Import the cors middleware
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = 3001; // Choose a port that is not already in use

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'ilanchezhian26@gmail.com', // Your Gmail address
    pass: 'xmnw ldjl jgiq uzpu', // Your Gmail password
  },
});

// Express route for handling form submissions
app.post('/send-email', (req, res) => {
  const { name, email, mobile, message } = req.body;

  const mailOptions = {
    from: 'ilanchezhian26@gmail.com',
    to: 'Support@tasinnovation.com', // Change this to the recipient's email address
    subject: 'Message from TAS Innovation website',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Mobile: ${mobile}</p>
      <p>Message: ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }

    res.status(200).send('Email sent: ' + info.response);
  });
});

// Handle GET request to the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

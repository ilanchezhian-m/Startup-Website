  

// import express from 'express';
// import { createTransport } from 'nodemailer';
// import { json, urlencoded } from 'body-parser';

// const app = express();
// const port = 3001; // Choose a port that is not already in use

// app.use(json());
// app.use(urlencoded({ extended: true }));

// // Nodemailer configuration
// const transporter = createTransport({
//   service: 'gmail',
//   auth: {
//     user: '', // Your Gmail address
//     pass: '', // Your Gmail password
//   },
// });

// // Express route for handling form submissions
// app.post('/src/Server.mjs', (req, res) => {
//   const { name, email, mobile, message } = req.body;

//   const mailOptions = {
//     from: 'add another mail here',
//     to: 'Support@tasinnovation.com', // Change this to the recipient's email address
//     subject: 'Message from TAS Innovation website',
//     html: `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Mobile: ${mobile}</p>
//       <p>Message: ${message}</p>
//     `,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }

//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

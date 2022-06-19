const { Router } = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const router = Router();

const acountTransport = require('../../account_transport2.json');

const OAuth2 = new google.auth.OAuth2(
  acountTransport.auth.clientId,
  acountTransport.auth.clientSecret,
  acountTransport.auth.redirectUris[0]
);

OAuth2.setCredentials({ refresh_token: acountTransport.auth.refreshToken });

router.post('/', (req, res) => {
  const { email } = req.body;
  const { type } = req.query;
  const { subject , text} = req.body
  const response = {
    recovery: `
    <h2>Confirm you email account</h2>
    <p>
      <p>Confirm to recover your account in [Servi - Express] 😄</p>
      <label>Confirm: </label>  
      <a href="http://localhost:3000/recoverypass">
        Click here to confirm your email 👈
      </a>
    </p>
  `,
    confirm: `
    <h2>Confirm you email account</h2>
    <p>
      <p>Confirm to create your account in [Servi - Express] 😋</p>
      <label>Confirm: </label>  
      <a href="http://localhost:3000/confirm">
        Click here to confirm your email 👈
      </a>
    </p>
  `
  };
  async function sendMail() {
    try {
      //const accessToken = await OAuth2.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: acountTransport.auth.user,
          clientId: acountTransport.auth.clientId,
          clientSecret: acountTransport.auth.clientSecret,
          refreshToken: acountTransport.auth.refreshToken,
          //accessToken
        } 
      });
      const mailOptions = {
        from: 'Servi Express - Services',
        to: email,
        html: response[type],
        subject,
        text
      };

      const info = await transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      console.log(error);
    }
  }

  sendMail()
    .then((info) => {
      console.log({ info });
      res.send({ state: 'success' });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;

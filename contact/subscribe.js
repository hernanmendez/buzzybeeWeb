require('dotenv').config();
const express = require('express');
const router = express.Router();
const request = require('superagent');
const mailchimpInstance = 'us16';
const listUniqueId = '7a9783e310';
const { mailchimpApiKey } = process.env;

router.post('/subscribe', (req, res) => {
  request
    .post(`https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members/`)
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', `Basic ${new Buffer(`any:${mailchimpApiKey}`).toString('base64')}`)
    .send({
      email_address: req.body.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: '',
        LNAME: '',
      },
    })
    .end((err, response) => {
      if (err) {
        res.json({ error: 'There was an unexpected error!' });
        console.error(err);
      } else if (response.status < 300) {
        res.json({ message: 'Thanks for subscribing' });
      } else if (response.body.title === 'Member Exists') {
        res.json({ message: 'You were already subscribed' });
      } else {
        res.json({ error: 'There was an error!' });
      }
    });
});

module.exports = router;

const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(
  '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',
);

exports.sendEmailWithSendGrid = functions.https.onCall(
  async (data, context) => {
    const { guestEmail, templateLink, subject, senderEmail } = data;

    const msg = {
      to: 'dilankatharindi28@gmail.com',
      from: 'lasithherath00@gmail.com',
      subject: 'HELOOOOO',
      html: `<strong>Invitation:</strong>  ">Click here to view your invitation</a>`,
    };

    try {
      await sgMail.send(msg);
      return { success: true };
    } catch (error) {
      console.error('SendGrid error:', error);
      if (error.response) {
        console.error(error.response.body);
      }
      throw new functions.https.HttpsError('internal', 'SendGrid error', error);
    }
  },
);

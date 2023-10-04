//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// routing for account recovery - create new pasword question


router.post('/current/account-recovery/password-reset', function (req, res) {
    const editChoice = req.session.data['reset-password']
    if (editChoice === 'yes') {
      res.redirect('/current/account-recovery/password-reset')
    } else if (editChoice === 'no') {
      res.redirect('/current/account-recovery/new-sign-in-details-created')
    }
  });


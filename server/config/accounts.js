import { Accounts } from 'meteor/accounts-base'



// ***************** Template

Accounts.emailTemplates.siteName = 'Spiny';
Accounts.emailTemplates.from = 'Spiny Admin <no-reply@mind2soft.com>';

Accounts.emailTemplates.enrollAccount.subject = (user) => {
  return `Welcome to Spiny, ${user.profile.name}`;
};

Accounts.emailTemplates.enrollAccount.text = (user, url) => {
  return 'A Spiny account has been created for you!'
    + ' To activate your account, simply click the link below:\n\n'
    + url;
};

Accounts.emailTemplates.resetPassword.from = () => {
  // Overrides the value set in `Accounts.emailTemplates.from` when resetting
  // passwords.
  return 'Spiny Password Reset <no-reply@mind2soft.com>';
};
Accounts.emailTemplates.verifyEmail = {
   subject() {
      return "Activate your Spiny account now!";
   },
   text(user, url) {
      return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
   }
};



// **************** Validation

// Validate username, sending a specific error message on failure.
Accounts.validateNewUser((user) => {
  if (user.username && user.username.length >= 3) {
    return true;
  } else {
    throw new Meteor.Error(403, 'Username must have at least 3 characters');
  }
});

// Validate username, without a specific error message.
Accounts.validateNewUser((user) => {
  return user.username !== 'root';
});



// Support for playing D&D: Roll 3d6 for dexterity.
//Accounts.onCreateUser((options, user) => {
//  return user;
//});

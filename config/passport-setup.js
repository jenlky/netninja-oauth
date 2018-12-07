const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
  new GoogleStrategy({
    // options for the google strategy
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL
  }, (accessToken, refreshToken, profile, cb) => {
    // passport callback function
    /*User.findOrCreate({ googleId: profile.id }, (err, user) => {
      return cb(err, user);
    });*/
    
  })
);
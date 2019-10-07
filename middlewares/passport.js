const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/users');

passport.use(new GitHubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
},
  function (accessToken, refreshToken, profile, done) {
    let user = {
      first_name: profile.displayName.split(' ')[0] || '',
      last_name: profile.displayName.split(' ')[1] || '',
      username: profile.username,
      avatar_url: profile.photos[0].value || '',
      bio: profile._json.bio || '',
      github: profile.profileUrl,
      website: profile._json.blog,
      email: profile._json.email
    };
    
    User.findOne({ email: user.email }, (err, foundUser) => {
      if (err) return done(err, false);

      if (!foundUser) {
        User.create(user, (err, createdUser) => {
          if (err) return done(err, false);

          return done(null, createdUser);
        });
      } else {
        return done(null, foundUser);
      }
    });
  }
));
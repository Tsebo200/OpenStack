const express = require('express');;
const questionSchema = require('./models/Questions');
const userSchema = require('./models/Users');
const router = express();

//Adding a question post route
router.post('/api/addQuestion', (req, res) => {
    const newQuestion = new questionSchema({
        title: req.body.title,
        body: req.body.body,
        code: req.body.code,
        screenshot: String,
        tags: req.body.tags,
        date: Date.now,
        user: req.body.user,
        answers: +req.body.answers,
        views: +req.body.views,
        upVotes: +req.body.upVotes,
        downVotes: +req.body.downVotes,
        reports: +req.body.reports
    });

    newUser.save()
    .then(i => {
        res.json(i)
    })
    .catch(err => {
        res.status(400).json({msg: "User could not be added!", err});
    });

});

// Adding a user post route
router.post('/api/newUser', (req, res) =>{

    let data = req.body;

    console.log(data);

    const newUser = new userSchema({
        first: data.first,
        last: data.last,
        email: data.email,
        username: data.username
    });
    
    // The email
    const mailerOutput = `
        <h1>Welcome ${data.username} to the website</h1>
        <p>Before you can login, please verify your account using the link below</p>
        <a href="#">Click to verify</a>
    `;

    // const transporter = nodemailer.createTransport({
    //     host: "mail.patterntry.com",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: "mailer@patterntry.com",
    //         pass: "4d%T0Q{9v$mR"
    //     }
    // });

    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: "200307@virtualwindow.co.za",
            password: "owistudent"
        }
    });

    const mailOptions = {
        from: '"200307@virtualwindow.co.za"',
        to: data.email,
        subject: 'New User Registration',
        html: mailerOutput
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) return console.log(err);

        console.log("Message Sent:", info.messageId);
    });


    newUser.save()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
       res.status(400).json({msg:"There is an error", err}); 
    });
});

module.exports = router;
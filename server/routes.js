const express = require('express');;
const questionSchema = require('./models/Questions');
const userSchema = require('./models/Users');
const router = express();
const nodemailer = require('nodemailer');

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
        username: data.username,
        email: data.email,
        password: data.password
    });
    
    // The email
    const mailerOutput = `

    <div style=" width: 60vw; ">
        <div style="border-radius: 5px; padding-bottom: 5vh; background-color: #fbfbfb; box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);">
            <div style="border-radius: 5px; background-color: #84d5de; box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);">
            <div style=" height: 40vh; width: 35vw; margin-left: 20%; background-size: contain; background-repeat: no-repeat; background-image: url(https://lh3.googleusercontent.com/8MnmKDqQfagpkWhsJhBZKW1HuuavJtAKvOwLw34H-cIn0-6937vPEv9zAtgK8mDzDR31G7ZXrjuNIse87LHn1fEFHadvEVSJbxNLyze-qKCxgsha1AxY_wMzZMyN-sROYeis11-0ptWQKxrrYI8Efmk2Q3laldvh3ikBlzkFgfD4uiac-KCXAEy7_nMHjP7P8DxrdsW66jGs2OeGI7fTp1RVD55bQNGcpnoLUhyUeLKB679NqceihpESZm6YqBHakSvMdmK4Hhb26piQGI9iH_JvcN_AcEMMhWT4IQj1w33wKgevlVB_yUGkgSz9ERaek6PeS0GVRqkTWg2jL5Q8BAz9EOuOYZgRXvlODzTvw3yf6eASdA47K-pag04VhNIAWUjTyGKYEV85_ZQ5Fr4AGu2SSVqGydixr03bMXxIGTm6LJtefc-5VhWJuudVUrXNWkft6V051g2kF3ACTlX2OGoo9wjQSx5IOQm-IXXmzc52tfUd_fv45YhFXC2lZlwRIuV0C_oqhJIrUHLC7follyMVZIPovYSOry7r0ruhcKEtnRT3rlxkODhtCnAOuHIG5qA_ubLPWdsFsfFn0M0A9op0H-bcxxTlh9QlXjPN3rVSHtu_QilEm50tv15Nt7dtWALPfJMgFJULzFcquHWoZkva5qfdk7oSQKGC_RbbIbrTnTbcQCshCJhKO8QoZeL8vpqrmPgunVL4xTFPtWVaq0gIwgREsHoK6i4VEeAkkIKx59ZRBb0uVVyUhQeeEAW2rSrU3Orb7pMaPDZ6rGwfHStcbxn4KGqM2m9inoxjpRCIxMcjf5x5qzW8K50FROKx8_kKLPpzXX2GI4SqtQ7iUjVjxr48_QdNsNN-i1HcRaKBDwqm5eAkU1JJBV4G0a4wekYoADmuJ0rZsXL-qI4TauBrk7g-hY34H0gC8HpeL2kWT92an4RiopTsjJP96Fyh9E2lrSSfKSswA-A=w1200-h554-no?authuser=0); "></div>
            </div>
            <div>
                <h2 style="text-align: center;">Email Confirmation</h2>
                <br>
                <p style="text-align: center; ">You're almost finished singing, ${data.username}! <br>
                    Just press the huge sign up button to finish the process <br>
                    and confirm your email address.</p>
                <br>
                <a href="#"><div style="width: 15vw; margin-left: 17.5vw; padding-top: 1vh; padding-bottom: 1vh; border-radius: 5px; text-align: center; background-color: #fca62b; box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);">Verify email address</div></a>
            </div>
        </div> 
        <br>
        <div style="height: 200px;">
            <h3 style="text-align: center;">Stay in touch</h3>
            <div style="margin-left: 40vw;">                
                <a href="https://www.facebook.com/theopenwindow/"><div style="height: 40px; width: 40px; float: left; background-image: url(https://cdn-icons-png.flaticon.com/512/5968/5968764.png); background-size: contain; border-radius: 100%; margin: .25vw;"></div></a>
                <a href="https://mobile.twitter.com/open_window_"><div style="height: 40px; width: 40px; float: left; background-image: url(https://cdn-icons-png.flaticon.com/512/145/145812.png); background-size: contain; border-radius: 100%; margin: .25vw;"></div></a>
                <a href="https://www.instagram.com/openwindowinstitute/"><div style="height: 40px; width: 40px; float: left; background-image: url(https://cdn-icons-png.flaticon.com/512/4138/4138124.png); background-size: contain; border-radius: 100%; margin: .25vw;"></div></a>
            </div>
        </div>
    </div>
    `;

    const transporter = nodemailer.createTransport({
        host: "mail.patterntry.com",
        port: 465,
        secure: true,
        auth: {
            user: "mailer@patterntry.com",
            pass: "4d%T0Q{9v$mR"
        }
    });

    const mailOptions = {
        from: '"Website Mailer Client <mailer@patterntry.com>"',
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
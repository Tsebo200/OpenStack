const express = require('express');;
const questionSchema = require('./models/Questions');
const userSchema = require('./models/Users');
const router = express();
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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


    newUser.save()
    .then(async item => {
        res.json(item);

        const mailerOutput = `
        <div style="width: 100vw;">
        <div
          style="
            border-radius: 5px;
            padding-bottom: 5vh;
            background-color: #fbfbfb;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);
          "
        >
          <img
            style="padding: 30px; text-align: center; margin: 0;"
            src="https://drive.google.com/uc?id=1ZV1qtT5fJiYlqZEWCk2DL7nlCoqpY4KW"
            width="200px"
            alt="Hello"
          />
          <div style="padding: 30px; max-height: 70vh; background-color: #84d5de;">
            <h1 style="text-align: center;">
              Hello World...I mean hello ${data.username}!
            </h1>
            <div
              style="
                height: 100vh;
                width: 50vw;
                margin: 0 auto;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url(https://drive.google.com/uc?id=11GgFUghBQ4d5A-mSMzipDAir84sCKdwV);
              "
            ></div>
          </div>
          <div>
            <h2 style="text-align: center;">Hey you're almost done!</h2>
            <br />
            <p style="text-align: center;">
              You're almost finished signing up, ${data.username}! <br />
              Just press the huge sign up button to finish the process <br />
              and confirm your email address.
            </p>
            <br />
            <a href="#" style="text-decoration: none; color: white;"
              ><div
                style="
                  width: 80vw;
                  padding: 1vh;
                  border-radius: 5px;
                  text-align: center;
                  margin: 0 auto;
                  background-color: #fca62b;
                  box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);
                "
              >
                Verify email address
              </div></a
            >
          </div>
        </div>
        <br />
        <div style="height: 200px;">
          <h3 style="text-align: center;">Stay in touch</h3>
          <div style="margin-left: 40vw;">
            <a href="https://www.facebook.com/theopenwindow/"
              ><div
                style="
                  height: 40px;
                  width: 40px;
                  float: left;
                  background-image: url(https://drive.google.com/uc?id=1afDSpPjl8V68R3L9kLEgRWpozjyjEplc);
                  background-size: contain;
                  border-radius: 100%;
                  margin: 0.25vw;
                "
              ></div
            ></a>
            <a href="https://mobile.facebook.com/openwindow"
              ><div
                style="
                  height: 40px;
                  width: 40px;
                  float: left;
                  background-image: url(https://drive.google.com/uc?id=1yVEkhDw1DdcaaNyKiU2CblFsM3kSEzpM);
                  background-size: contain;
                  border-radius: 100%;
                  margin: 0.25vw;
                "
              ></div
            ></a>
            <a href="https://www.instagram.com/openwindowinstitute/"
              ><div
                style="
                  height: 40px;
                  width: 40px;
                  float: left;
                  background-image: url(https://drive.google.com/uc?id=1kcR42EhCoDtu4UsBFRpKMTQbs9pW61I2);
                  background-size: contain;
                  border-radius: 100%;
                  margin: 0.25vw;
                "
              ></div
            ></a>
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

    })
    .catch(err => {
       res.status(400).json({msg:"There was an error", err}); 
    });
});

router.post('/api/loginuser', async (req, res) => {
    const findUser = await addUser.findOne({
        username: req.body.username
    });

    if(findUser){
        if(await bcrypt.compare(req.body.password, findUser.password)){
            if(findUser.accountStatus){
                res.send("User & Password correct & User is authenticated");
            }else {
                res.send("You have not authenticated your account");
            }
        }else{
            res.send("The username or password is incorrect");
        }
    }else{
        res.send("User is not found");
    }
})

router.patch('/api/validate/:id', async (req, res) => {
    let userId = req.params.id;

    const findUser = await addUser.findOne({
        _id: userId
    });

    if(findUser){
        try{
            const tokenDecrypt = jwt.verify(findUser.token, process.env.ACCESS_TOKEN_SECRET);

            const authUser = await addUser.findOne({
                _id: userId,
                username: tokenDecrypt.username,
                email: tokenDecrypt.email
            });

            if(authUser){
                const userAuth = await addUser.updateOne(
                    {_id: req.params.id},
                    {$set: {accountStatus: true}}
                );
                
                res.json({user: authUser.username, success: true, msg: "Profile Verified"});
            }else{
                res.json({success: false, msg: "Profile has not been verified"})
            }
        } catch (err) {
            res.json({success: false, msg: "Invalid Token"});
        }

    }else {
        res.json({success: false, msg: "Verification Error: Contact System Admin"})
    }
})

module.exports = router;
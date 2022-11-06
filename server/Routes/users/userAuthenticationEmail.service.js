const nodemailer = require("nodemailer");

async function emailService(data) {
  const emailHtml = `<html>
  <body style="width: calc(100% - 200px); padding: 100px; margin: 0">
    <img
      style="text-align: center; margin: 0"
      src="https://drive.google.com/uc?id=1ZV1qtT5fJiYlqZEWCk2DL7nlCoqpY4KW"
      width="200px"
      height="auto"
      alt="Hello"
    />
    <h1 style="font-weight: 300">Hello ${data.username}</h1>
    <h2 style="font-weight: 300">
      Welcome to open stack, we just need to verify your account by clicking the
      button bellow
    </h2>
    <a href=${data.emailLink}
      style="
        padding: 10px;
        background-color: #fca62b;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024,
          0 1px 5px #0000001f;
        color: white;
        font-size: 18px;
        text-decoration: none;
      "
      
      >Verify my account</a
    >
    <br>
    <br>
    <p style="margin: 0; font-size: 18px;">questions need help please email us at support@open-stack.co.za</p>
    <p style="margin: 0; font-size: 18px;">Happy coding</p>
    <p style="margin: 0; font-size: 18px;">Openstack</p>   
  </body>
  
</html>
`;
  const transporter = nodemailer.createTransport({
    host: "luther.aserv.co.za",
    port: 465,
    secure: true,
    auth: {
      user: "noreply@open-stack.co.za",
      pass: "eUmmR3cnk3kNe32",
    },
  });

  const mailOptions = {
    from: '"Open Stack Team noreply@open-stack.co.za"',
    to: data.email,
    subject: "New User Registration",
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err);

    console.log("Message Sent:", info.messageId);
  });
}

module.exports = emailService;

// const fs = require("fs").promises;

// const getEmailHtml = async (data) => {
//   const emailHtml = await fs.readFile("./Routes/users/email.html","utf8");
//   return Buffer.from(emailHtml)
// }

// const emailService = async (data) => {
//   const emailHtml = await fs.readFile("./Routes/users/email.html","utf8");
//   return Buffer.from(emailHtml)
// }

// emailService = (data) =>  {
//   const html =
//     (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(data);
//       return data;

//     }
//   )
//   return html
// const test = `<h1>awsdawdwad</h1>`

// console.log(typeof test);
// console.log(typeof mailerOutput);

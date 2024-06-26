/*require("dotenv").config()

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const OAuth2_client = new OAuth2(clientId, clientSecret);
OAuth2_client.setCredentials({ refresh_token: refreshToken });

function send_mail_registration(Email,name) {
    const accessToken = OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: Email,
        subject: "Registration",
        html: get_html_message(name),
    }
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}

function get_html_message(name) {
    return `
    <h3>${name}! You have successfully accessed your account!</h3>`
};

function send_team_code(Email,teamCode,domainName) {
    const accessToken = OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: Email,
        subject: "Team Invitation",
        html: get_html_message_teamCode(teamCode,domainName),
    }
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}

function get_html_message_teamCode(teamCode,domainName) {
    return `
    <h3>You have been invited to join the team.\n\nTeam Code:${teamCode}\nDomain:${domainName}</h3>`
};*/
require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

// Create an OAuth2 client with the given credentials
const OAuth2_client = new OAuth2(
  clientId,
  clientSecret,
  "https://developers.google.com/oauthplayground" // or your redirect URL
);

// Set the refresh token
OAuth2_client.setCredentials({
  refresh_token: refreshToken
});

async function send_mail_registration(Email, name) {
  try {
    const accessToken = await OAuth2_client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "groupprojectbrl@gmail.com",
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken.token
      },
    });

    const mail_options = {
      from: `Team Management App<groupprojectbrl@gmail.com>`,
      to: Email,
      subject: "Registration",
      html: get_html_message(name),
    };

    transport.sendMail(mail_options, function (error, result) {
      if (error) {
        console.log("error:", error);
      } else {
        console.log("Success:", result);
      }

      transport.close();
    });
  } catch (error) {
    console.log("Error generating access token", error);
  }
}

function get_html_message(name) {
  return `
    <h3>${name}! You have successfully accessed your account!</h3>`;
}

async function send_team_code(Email, teamCode, domainName) {
  try {
    const accessToken = await OAuth2_client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "groupprojectbrl@gmail.com",
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken.token
      },
    });

    const mail_options = {
      from: `Team Management App<groupprojectbrl@gmail.com>`,
      to: Email,
      subject: "Team Invitation",
      html: get_html_message_teamCode(teamCode, domainName),
    };

    transport.sendMail(mail_options, function (error, result) {
      if (error) {
        console.log("error:", error);
      } else {
        console.log("Success:", result);
      }

      transport.close();
    });
  } catch (error) {
    console.log("Error generating access token", error);
  }
}

function get_html_message_teamCode(teamCode, domainName) {
  return `
    <h3>You have been invited to join the team.\n\nTeam Code:${teamCode}\nDomain:${domainName}</h3>`;
}

async function send_mail_OTP(Email,OTP) {
    try{
    const accessToken = await OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: Email,
        subject: "Reset Password",
        html: get_html_message_OTP(OTP),
    };
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}catch(error){
    console.log("Error sending mail",error);
}
}

function get_html_message_OTP(OTP) {
    return `
    <h3>Your OTP is:${OTP}</h3>`
};

async function send_mail_message(Email,sender_email,message) {
    try{
    const accessToken = await OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: Email,
        subject: "Message",
        html: get_html_message_team(sender_email,message),
    }
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}catch(error){
    console.log("Error sending mail",error);
}
}

function get_html_message_team(sender_email,message) {
    return `
    <h2>Your teammate ${sender_email} wants to send you a message!:</h2><br>${message}`
};

async function send_mail_leave(Leader,email,startDate,endDate,reason,URL,leaveId) {
    try{
    const accessToken = await OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: Leader,
        subject: "Leave Approval",
        html: get_html_message_leave(email,startDate,endDate,reason,URL,leaveId),
    }
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}catch(error){
    console.log("Error sending mail",error);
}
}

function get_html_message_leave(email,startDate,endDate,reason,URL,leaveId) {
    return `
    <h3>Your team member ${email} wants to apply for a leave:</h3><br>
    Start Date:${startDate}<br>
    End Date:${endDate}<br>
    reason:${reason}<br>
    <h5><p style="color:red; font-size:300%;"><a href="${URL}/leave/leaveResult/${leaveId}?answer=accept">Accept</a></p></h5>
    <h5><p style="color:red; font-size:300%;"><a href="${URL}/leave/leaveResult/${leaveId}?answer=reject">Reject</a></p></h5>
    `
};

async function send_mail_accept(email,startDate,endDate,reason) {
    try{
    const accessToken =await OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: email,
        subject: "Leave Approval",
        html: get_html_message_accept(startDate,endDate,reason),
    }
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}catch(error){
    console.log("Error sending mail",error);
}
}

function get_html_message_accept(startDate,endDate,reason) {
    return `
    <h4>Congrats!Your leave has been accepted by your team leader!</h4>
    <br>Start Date:${startDate}
    <br>End Date:${endDate}
    <br>Reason:${reason}`
};

async function send_mail_reject(email,startDate,endDate,reason) {
    try{
    const accessToken = await OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: email,
        subject: "Leave Rejection",
        html: get_html_message_reject(startDate,endDate,reason),
    }
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}catch(error){
    console.log("Error sending mail",error);
}
}

function get_html_message_reject(startDate,endDate,reason) {
    return `
    <h4>Your leave request has been rejected by your team leader</h4>
    <br>Start Date:${startDate}
    <br>End Date:${endDate}
    <br>Reason:${reason}`
};

async function send_mail_verification(Email,URL) {
    try{
    const accessToken =await OAuth2_client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:"OAuth2",
            user:"groupprojectbrl@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });
    const mail_options = {
        from: `Team Management App<${"groupprojectbrl@gmail.com"}`,
        to: Email,
        subject: "Email verification",
        html: get_html_message_verification(Email,URL),
    }
    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log("Success:", result);
        }

        transport.close();
    });
}catch(error){
    console.log("Error sending mail",error);
}
}

function get_html_message_verification(Email,URL) {
    return `
    <h3>Click on this link to verify your email address:<br>
    <p style="color:red; font-size:200%;"><a href="${URL}/user/verifyEmail/${Email}">Verify mail</a></p></h3>`
};

module.exports={send_mail_registration,send_team_code,send_mail_OTP,send_mail_message,send_mail_leave,send_mail_accept,send_mail_reject,send_mail_verification};




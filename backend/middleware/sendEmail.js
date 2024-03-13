const nodemailer = require("nodemailer")
// const Mailgen = require("mailgen")

module.exports = async (email,subj,text)=>{

    // const {userEmail} =  req.body;
    // console.log(userEmail);

    try {
        let config = {
            service: "gmail",
            auth:{
                user: 'butcherjain@gmail.com',
                pass: 'zmqjpimheloexeve'
            }
        }
        let transporter = nodemailer.createTransport(config)
    
        await transporter.sendMail({
            from:'butcherjain@gmail.com',
            to:email,
            subject:subj,
            text:text
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email not sent");
    }

    
}
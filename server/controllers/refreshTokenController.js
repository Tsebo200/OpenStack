const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {

    // console.log(req.body.data.refreshToken);
    // res.json(req.data)

    const cookies = req.body.data.refreshToken;
    console.log(cookies);
    if (!cookies) return res.sendStatus(401);
    const refreshToken = cookies;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            console.log(decoded);
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles,
                        "email": decoded.email
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            );
            res.json({ roles, accessToken })
        }
    );
}

module.exports = { handleRefreshToken }
import { User } from '../models/User.js';

let auth = async (req, res, next) => {
    try {
        const token = req.cookies.x_access_token;
        const userInfo = await User.findByToken(token);
        console.log(userInfo)
        if (!userInfo) return res.status(404).json({ isAuth: false })
        req.user = userInfo;
        next();
    } catch (err) {
        console.log("errrrrrr", err)
        res.status(400).json({ isAuth: false, message: err.message })
    }
}

export { auth };

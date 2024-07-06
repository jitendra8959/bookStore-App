const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OK } = require('../utils/constants/constant');

const register = async ({ name, email, password }) => {
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        email,
        password: hashedPassword,
    });

    await user.save();

    return user;
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });

    // return { token, user };
    return {
        code: OK,
        message: 'You are login successfully!',
        body:{
            access_token,
            ...user._doc
        }
    }
};

module.exports = {
    register,
    login,
};

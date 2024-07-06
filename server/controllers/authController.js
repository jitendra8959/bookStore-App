const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        console.log("hhhhhhhhhhhhh", user)
        res.status(201).json(user);
    } catch (err) {
        console.log("eeeeeeeeee", err.message)
        res.status(400).json({ message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await authService.login(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    register,
    login,
};

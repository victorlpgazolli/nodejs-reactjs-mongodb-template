const { User } = require('../../models');
const { hash, isSamePassword } = require('../../utils/password');

module.exports = {
    async create(req, res) {
        try {
            const {
                name = false,
                email = false,
                password = false,
                deviceId = false,
            } = req.body;

            if (!name || !password || !email || !deviceId) {
                return res.status(400).json({ error: "Request error: name, password, email, deviceId is needed" })
            }

            const userExists = await User.findOne({ name: name, email: email });
            if (userExists) {
                const { _id, name, email, deviceId } = userExists;

                return res.json({ id: _id, name, email, deviceId })
            }

            const response = await User.create({
                name,
                email,
                password: hash(password),
                deviceId
            })
            const { _id: id } = response
            return res.status(200).json(
                { id, name, email, deviceId }
            )
        } catch (error) {
            return res.status(500).json({ error: "Error: " + error })
        }

    },
    async get(req, res) {
        try {
            const {
                id = false,
            } = req.params;

            if (!id) {
                return res.status(400).json({ error: "Request error: userId is needed" })
            }

            const searchedUser = await User.findById(req.params.id)
            if (!searchedUser) {
                return res.status(404).json({ error: "Error, User not found" })
            }

            const { _id, name, email, deviceId } = searchedUser;

            const response = { id: _id, name, email, deviceId };
            return res.status(200).json(response);

        } catch (error) {
            return res.status(500).json({ error: "Error: " + error })
        }

    },
    async login(req, res) {
        try {
            const {
                email = false,
                password: givenPassword = false
            } = req.body;

            if (!email || !givenPassword) {
                return res.status(400).json({ error: "Request error: email, password is needed" })
            }
            console.log(email);

            const userExists = await User.findOne({ email: email });
            console.log(userExists);

            if (!userExists) {
                return res.status(404).json({ error: "Error, user not found" })
            }

            const { password, _id: id, name, deviceId } = userExists;
            if (!isSamePassword({ hashedPass: password, givenPassword })) {
                return res.status(403).json({ error: { password: "Wrong password" } })
            }
            const response = { id, name, email, deviceId };
            return res.status(200).json(response);

        } catch (error) {
            console.log(error);

            return res.status(500).json({ error: "Error: " + error })
        }
    },
    async test(req, res) {

        return res.json({ teste: hash(req.params.id) })
    }
}
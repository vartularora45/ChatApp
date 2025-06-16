import Profile from "../db/profile.model";



export const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
        if (!profile) throw new Error('Profile not found');
        res.json(profile);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};



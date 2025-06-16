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


export const editProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        if (!profile) throw new Error('Profile not found');
        if (profile.user.toString() !== req.user.id) throw new Error('Not authorized');
        const newProfile = {
            user: req.user.id,
            name: req.body.name || profile.name,
            avatar: req.body.avatar || profile.avatar,
            bio: req.body.bio || profile.bio,
            location: req.body.location || profile.location,
            website: req.body.website || profile.website,
            social: {
                twitter: req.body.social.twitter || profile.social.twitter,
                instagram: req.body.social.instagram || profile.social.instagram,
                facebook: req.body.social.facebook || profile.social.facebook,
                linkedin: req.body.social.linkedin || profile.social.linkedin,
            }
        };
        const updatedProfile = await Profile.findOneAndUpdate
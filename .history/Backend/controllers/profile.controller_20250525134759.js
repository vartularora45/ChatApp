import Profile from "../db/profile.model.js"; // Use .js if you're in ES Modules

// @desc    Get logged in user's profile
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
    if (!profile) return res.status(404).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// @desc    Edit/update user profile
export const editProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) return res.status(404).json({ msg: 'Profile not found' });

    if (profile.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    // Update fields
    profile.name = req.body.name || profile.name;
    profile.avatar = req.body.avatar || profile.avatar;
    profile.bio = req.body.bio || profile.bio;
    profile.location = req.body.location || profile.location;
    profile.website = req.body.website || profile.website;

    // Update social fields
    const social = req.body.social || {};
    profile.social = {
      twitter: social.twitter || profile.social?.twitter || "",
      instagram: social.instagram || profile.social?.instagram || "",
      facebook: social.facebook || profile.social?.facebook || "",
      linkedin: social.linkedin || profile.social?.linkedin || "",
    };

    const updatedProfile = await profile.save();
    res.json(updatedProfile);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

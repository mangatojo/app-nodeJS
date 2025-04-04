const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return {
            url: result.secure_url,
            publicId: result.public_id,
        };
    } catch (error) {
        console.error('Error while uploadind to cloudinary', error);
        throw new Error('Error while uploadind to cloudinary');
    }
}

module.exports = { uploadToCloudinary };
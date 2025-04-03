

const isAdminUser = (req, res, next) => {
    const { username, userId, role } = req.userInfo;
    console.log('role:' + role);
    if (role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: 'Access denied! Admin rights required!'
        })
    }
    next();
}

module.exports = isAdminUser;
function createSuccess(status, message, data = null) {
    return {
        status,
        message,
        success: true,
        error: false,
        data
    };
}

module.exports = createSuccess;

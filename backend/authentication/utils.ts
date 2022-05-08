const bcrypt = require("bcryptjs");

export const passwordHash = async (password: string, saltRounds: number) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        console.log(err);
    }
    return null;
}

export const passwordVerify = async (password: string, hash: string | null) => {
    try {
        const matchFound = await bcrypt.compare(password, hash);
        return matchFound;
    } catch (err) {
        console.log(err);
    }
    return false;
};
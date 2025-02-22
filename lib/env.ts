const env = {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
} as const;

if (!env.CONTACT_EMAIL) {
    throw new Error("Missing CONTACT_EMAIL environment variable");
}

export default env;
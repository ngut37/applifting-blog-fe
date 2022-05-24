export const config = Object.freeze({
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  TENANT_NAME: process.env.NEXT_PUBLIC_TENANT_NAME || 'Karel Kamo',
  API_KEY:
    process.env.NEXT_PUBLIC_API_KEY || 'e6bd09f2-77cc-43de-9eb6-35a959f2dc50',
});

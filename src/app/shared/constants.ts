export const appConstants = {
  // prodApiBaseUrl: 'https://',
  prodApiBaseUrl: 'http://localhost:5000',

  version: '1.0.0',
  regexes: {
    pan: /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/,
    email: /([a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256})(\@)([a-zA-Z0-9][a-zA-Z0-9\\-]{0,64})(\.)([a-zA-Z0-9][a-zA-Z0-9\\-]{1,25})/,
    pincode: /^[1-9]{1}[0-9]{5}$/,
    mobile: /^\d{10}$/,
    aadhaar: /^[0-9]{12}$/,
    ifsc: /^[a-zA-z]{4}[0-9a-zA-z]{7}$/,
    bankAccNumber: /^[0-9]{8,16}$/,
  }
};
export const apiConstants = {
  socialLogin: { url: '/v1/auth/login/' },
  socialLogout: { url: '/v1/iam/admin/logout/' },
};
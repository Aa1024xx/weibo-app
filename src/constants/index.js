export const ACCESS_TOKEN_KEY = 'weibo_app_access_token';
export const UID_KEY = 'weibo_app_uid';
export const getUid = () => localStorage.getItem(UID_KEY);

export const APP_KEY = '';
export const APP_SECRET = '';
export const REDIRECT_URI = encodeURIComponent('http://baidu.com:3000/login');

export const LOGIN_URL = `http://mock.don.red/weibo/oauth2/authorize?client_id=${APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email`;

export const getAccessCode = (code) => 
`/proxy/oauth2/access_token?client_id=${APP_KEY}&client_secret=${APP_SECRET}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}&code=${code}`;


export const COMMENT_PAGESIZE = 5;
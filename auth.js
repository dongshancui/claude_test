// 简单的用户认证模块
// 使用内存存储用户数据

// 模拟用户数据库
const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'user123' }
];

// 当前会话状态
let currentUser = null;

/**
 * 用户登录
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @returns {boolean} - 登录是否成功
 */
function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    currentUser = { username: user.username };
    console.log(`登录成功：欢迎 ${username}!`);
    return true;
  }
  console.log('登录失败：用户名或密码错误');
  return false;
}

/**
 * 用户登出
 */
function logout() {
  if (currentUser) {
    console.log(`用户 ${currentUser.username} 已登出`);
    currentUser = null;
  } else {
    console.log('没有用户登录');
  }
}

/**
 * 检查是否已认证
 * @returns {boolean} - 是否已登录
 */
function isAuthenticated() {
  return currentUser !== null;
}

/**
 * 获取当前用户信息
 * @returns {object|null} - 当前用户信息
 */
function getCurrentUser() {
  return currentUser;
}

module.exports = {
  login,
  logout,
  isAuthenticated,
  getCurrentUser
};

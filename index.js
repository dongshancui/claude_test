// 主入口文件
const auth = require('./auth');
const logger = require('./logger');

// 使用日志模块
logger.info('应用启动中...');

// 演示认证功能
logger.info('测试用户认证功能');
auth.login('admin', 'admin123');
logger.info(`当前登录状态: ${auth.isAuthenticated()}`);
auth.logout();

logger.info('应用运行完成');

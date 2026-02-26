// 简单的日志模块
// 支持不同级别的日志输出

const COLORS = {
  INFO: '\x1b[32m',    // 绿色
  WARN: '\x1b[33m',    // 黄色
  ERROR: '\x1b[31m',   // 红色
  RESET: '\x1b[0m'     // 重置
};

/**
 * 获取当前时间戳
 * @returns {string} - 格式化的时间字符串
 */
function getTimestamp() {
  return new Date().toISOString();
}

/**
 * 输出日志
 * @param {string} level - 日志级别 (info, warn, error)
 * @param {string} message - 日志消息
 */
function log(level, message) {
  const timestamp = getTimestamp();
  const upperLevel = level.toUpperCase();
  const color = COLORS[upperLevel] || COLORS.RESET;

  console.log(`${color}[${timestamp}] [${upperLevel}] ${message}${COLORS.RESET}`);
}

/**
 * 信息级别日志
 * @param {string} message - 日志消息
 */
function info(message) {
  log('info', message);
}

/**
 * 警告级别日志
 * @param {string} message - 日志消息
 */
function warn(message) {
  log('warn', message);
}

/**
 * 错误级别日志
 * @param {string} message - 日志消息
 */
function error(message) {
  log('error', message);
}

module.exports = {
  log,
  info,
  warn,
  error
};

const inquirer = require('inquirer');

const questions = [{
  type: "input",
  name: "content",
  message: ">",
}];
const help = '欢迎使用估值一个亿的AI语言分析系统\n请输入您的问题,如:你爱我吗?\n输入exit结束程序.';
const print = (content) => {
  console.log('>' + content);
};
(async () => {
  print(help);
  while (true) {
    const { content } = await inquirer.prompt(questions);
    if (content === 'exit') { print('再见');break; }
    else if (content === 'help') { print(help); }
    else {
      let rel = [];
      let isQuestion = false;
      let hasQuestion = false;
      content.trim().split('').forEach(t => {
        if (t === '?' || t === '？') {
          isQuestion = true;
          rel.push('!');
        } else if (t === '吗') {
          hasQuestion = true;
          rel.push('');
        } else if (t === '我') {
          rel.push('你');
        } else if (t === '你') {
          rel.push('我');
        } else {
          rel.push(t);
        }
      });
      rel = rel.join('');
      if (isQuestion && !hasQuestion) {
        rel = '我不知道' + rel;
      } else if (!isQuestion && hasQuestion) {
        rel += '哦';
      }
      print(rel);
    }
  }
})();

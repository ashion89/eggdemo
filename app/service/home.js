'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async find() {
    const user = { aa: '主页' };
    return user;
  }

  async findById(id) {
    this.logger.info(id);

    const sql = 'select * from user where id=?';
    const m = await this.app.mysql.query(sql, id); // 单实例可以直接通过 app.mysql 访问
    return m;
  }

  async findall() {
    console.log("findall=======");
    const sql = 'select * from user where  id>6';
    const m = await this.app.mysql.query(sql); // 单实例可以直接通过 app.mysql 访问
    return m;
  }

  async insert(name) {
    this.logger.info(name);

    const upt = {
      name,
    };
    const re = await this.app.mysql.insert('user', upt); // 单实例可以直接通过 app.mysql 访问
    return re.insertId;
  }
  async up(id) {
    this.logger.info(id);
    const name = id + 'query';
    const sql = 'update user set name=? where id=?';


    const re = await this.app.mysql.query(sql, [ name, id ]); // 单实例可以直接通过 app.mysql 访问
    console.log(re);
    if (re.affectedRows === 1) {
      return '成功';
    }

    return '失败';
  }
}

module.exports = HomeService;

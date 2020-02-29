'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.home.find();
    ctx.body = user;
  }
  async find() {
    const { ctx } = this;
    try {
      const id = ctx.params.id;
      const count = await ctx.service.home.findById(id);
      ctx.body = count;
    } catch (e) {
      throw new Error(e);
    }

  }

  async findall() {
    const { ctx } = this;
    try {
      const all = await ctx.service.home.findall();
      ctx.body = all;
    } catch (e) {
      throw new Error(e);
    }

  }


  async add() {
    const { ctx } = this;
    try {
      const name = ctx.query.name;
      const all = await ctx.service.home.insert(name);
      ctx.body = all;
    } catch (e) {
      throw new Error(e);
    }

  }

  async up() {
    const { ctx } = this;
    try {
      const id = ctx.params.id;
      const f = await ctx.service.home.up(id);
      ctx.body = f;

    } catch (e) {
      throw new Error(e);
    }

  }
}

module.exports = HomeController;

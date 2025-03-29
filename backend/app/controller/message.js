const { Controller } = require('egg');

class MessageController extends Controller {
  async getMessages() {
    const { page = 1, limit = 10 } = this.ctx.query;
    const data = this.ctx.service.message.getMessages(Number(page), Number(limit));
    this.ctx.body = { success: true, data };
  }

  async addMessage() {
    try {
      const msg = this.ctx.service.message.addMessage(this.ctx.request.body);
      this.ctx.body = { success: true, data: msg };
    } catch (err) {
      this.ctx.body = { success: false, message: err.message };
    }
  }
}

module.exports = MessageController;

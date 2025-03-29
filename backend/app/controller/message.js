const { Controller } = require('egg');

class MessageController extends Controller {
  // Handle GET /messages - return all messages with pagination (sorted by created_at desc)
  async getMessages() {
    const { page = 1, limit = 10 } = this.ctx.query;
    const data = this.ctx.service.message.getMessages(Number(page), Number(limit));
    this.ctx.body = { success: true, data };
  }

  // Handle POST /messages - submit a new message with validation
  async addMessage() {
    try {
      const msg = this.ctx.service.message.addMessage(this.ctx.request.body);
      this.ctx.body = { success: true, data: msg };
    } catch (err) {
      // Return validation or other error
      this.ctx.body = { success: false, message: err.message };
    }
  }
}

module.exports = MessageController;

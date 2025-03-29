const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Message = require('../model/message');

class MessageService {
  constructor() {
    this.filePath = path.join(__dirname, '../../mock/messages.json');
    this.messages = fs.existsSync(this.filePath)
      ? JSON.parse(fs.readFileSync(this.filePath))
      : [];
  }

  _save() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.messages, null, 2));
  }

  getMessages(page = 1, limit = 10) {
    const sorted = this.messages.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const start = (page - 1) * limit;
    return sorted.slice(start, start + limit);
  }

  addMessage(data) {
    if (!data.message || data.message.trim() === '') {
      throw new Error('Message cannot be empty');
    }
    if (data.username && data.username.length > 20) {
      throw new Error('Username too long (max 20 chars)');
    }
    const message = new Message({
      id: uuidv4(),
      username: data.username || 'Anonymous',
      message: data.message,
      created_at: new Date().toISOString(),
    });
    this.messages.push(message);
    this._save();
    return message;
  }
}

module.exports = MessageService;

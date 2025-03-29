const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Message = require('../model/message');

class MessageService {
  constructor() {
    // Load messages from local JSON file, or initialize with empty list
    this.filePath = path.join(__dirname, '../../mock/messages.json');
    this.messages = fs.existsSync(this.filePath)
      ? JSON.parse(fs.readFileSync(this.filePath))
      : [];
  }

  // Save current message list to the JSON file
  _save() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.messages, null, 2));
  }

  // Return paginated messages sorted by created time (newest first)
  getMessages(page = 1, limit = 10) {
    const sorted = this.messages.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const start = (page - 1) * limit;
    return sorted.slice(start, start + limit);
  }

  // Add a new message after validation
  addMessage(data) {
    // Validate: message must not be empty
    if (!data.message || data.message.trim() === '') {
      throw new Error('Message cannot be empty');
    }

    // Validate: username should not exceed 20 characters
    if (data.username && data.username.length > 20) {
      throw new Error('Username too long (max 20 chars)');
    }

    // Create new message object
    const message = new Message({
      id: uuidv4(),
      username: data.username || 'Anonymous',
      message: data.message,
      created_at: new Date().toISOString(),
    });

    // Save and return
    this.messages.push(message);
    this._save();
    return message;
  }
}

module.exports = MessageService;

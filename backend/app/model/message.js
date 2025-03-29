class Message {
  constructor({ id, username, message, created_at }) {
    this.id = id;
    this.username = username;
    this.message = message;
    this.created_at = created_at;
  }
}

module.exports = Message;

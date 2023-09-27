const AbstractManager = require("./AbstractManager");

class CloudManager extends AbstractManager {
  constructor() {
    super({ table: "Cloud" });
  }

  async create(cloud) {
    try {
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (name, description) VALUES (?, ?)`,
        [cloud.name, cloud.description]
      );

      return result.insertId;
    } catch (error) {
      throw new Error(`Error creating cloud: ${error.message}`);
    }
  }

  async read(id) {
    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE id = ?`,
        [id]
      );

      if (rows.length === 0) {
        throw new Error(`No record found with ID ${id}`);
      }

      return rows[0];
    } catch (error) {
      console.error(`Error reading cloud: ${error.message}`);
      throw error; // Rethrow the error to handle it in the controller or route
    }
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(cloud) {
    try {
      await this.database.query(
        `UPDATE ${this.table} SET name = ?, description = ? WHERE id = ?`,
        [cloud.name, cloud.description, cloud.id]
      );

      return "Cloud updated successfully";
    } catch (error) {
      throw new Error(`Error updating cloud: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
      return "Cloud deleted successfully";
    } catch (error) {
      throw new Error(`Error deleting cloud: ${error.message}`);
    }
  }
}

module.exports = CloudManager;

const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "Category" });
  }

  async create(category) {
    try {
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (name, description) VALUES (?, ?)`,
        [category.name, category.description]
      );

      return result.insertId;
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  async read(id) {
    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE id = ?`,
        [id]
      );

      return rows[0];
    } catch (error) {
      throw new Error(`Error reading category: ${error.message}`);
    }
  }

  async readAll() {
    try {
      const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
      return rows;
    } catch (error) {
      throw new Error(`Error reading all categories: ${error.message}`);
    }
  }

  async update(category) {
    try {
      await this.database.query(
        `UPDATE ${this.table} SET name = ?, description = ? WHERE id = ?`,
        [category.name, category.description, category.id]
      );

      return "Category updated successfully";
    } catch (error) {
      throw new Error(`Error updating category: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
      return "Category deleted successfully";
    } catch (error) {
      throw new Error(`Error deleting category: ${error.message}`);
    }
  }

  async search(query) {
    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE name LIKE ? OR description LIKE ?`,
        [`%${query}%`, `%${query}%`]
      );
      return rows;
    } catch (error) {
      throw new Error(`Error searching categories: ${error.message}`);
    }
  }
}

module.exports = CategoryManager;

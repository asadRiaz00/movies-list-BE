const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
      `SELECT id, name, duration, rating FROM movies LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
  
    return {
      data,
      meta,
    };
  }
  async function create(movie){
    const result = await db.query(
      `INSERT INTO movies 
      (name, duration, rating) 
      VALUES 
      ('${movie.name}', ${movie.duration}, ${movie.rating})`
    );
  
    let message = 'Error in creating movie ';
  
    if (result.affectedRows) {
      message = 'movie created successfully';
    }
  
    return {message};
  } 
  async function update(id, movie){
    const result = await db.query(
      `UPDATE movies 
      SET name="${movie.name}", duration=${movie.duration}, rating=${movie.rating} 
      WHERE id=${id}` 
    );
  
    let message = 'Error in updating movie';
  
    if (result.affectedRows) {
      message = 'Movie updated successfully';
    }
  
    return {message};
  }
  async function remove(id){
    const result = await db.query(
      `DELETE FROM movies WHERE id=${id}`
    );
  
    let message = 'Error in deleting movie';
  
    if (result.affectedRows) {
      message = 'Movie deleted successfully';
    }
  
    return {message};
  }
  
  module.exports = {
    getMultiple,
    create,
    update,
    remove
  }
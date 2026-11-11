const pool = require("../config/db");

// GET all published news articles
const getAllNews = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        title,
        slug,
        category,
        summary AS description,
        content,
        image_url AS image,
        published_at AS date
      FROM news
      WHERE status = 'published'
      ORDER BY published_at DESC NULLS LAST, created_at DESC
    `);

    res.status(200).json({
      success: true,
      count: result.rows.length,
      news: result.rows
    });

  } catch (error) {
    console.error("Get news error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve news articles."
    });
  }
};

// GET one published article using its ID or slug
const getNewsByIdentifier = async (req, res) => {
  try {
    const { identifier } = req.params;

    const result = await pool.query(
      `
      SELECT
        id,
        title,
        slug,
        category,
        summary AS description,
        content,
        image_url AS image,
        published_at AS date
      FROM news
      WHERE (slug = $1 OR id::text = $1)
      AND status = 'published'
      LIMIT 1
      `,
      [identifier]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "News article not found."
      });
    }

    res.status(200).json({
      success: true,
      news: result.rows[0]
    });

  } catch (error) {
    console.error("Get individual news error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve this news article."
    });
  }
};

module.exports = {
  getAllNews,
  getNewsByIdentifier
};
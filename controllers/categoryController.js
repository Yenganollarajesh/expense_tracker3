 const Category = require('../models/category');

// // Create a new category
// exports.createCategory = async (req, res) => {
//   const { name, description } = req.body;
//   const userId = req.user.id;

//   try {
//     const newCategory = await Category.create({
//       name,
//       description,
//       userId,
//     });
//     res.status(201).json(newCategory);
//   } catch (error) {
//     res.status(400).json({ error: 'Error creating category' });
//   }
// };

// // Get all categories for the logged-in user
// exports.getCategories = async (req, res) => {
//   const userId = req.user.id;

//   try {
//     const categories = await Category.findAll({ where: { userId } });
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: 'Error retrieving categories' });
//   }
// };

// // Get a category by ID
// exports.getCategoryById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const category = await Category.findByPk(id);
//     if (!category || category.userId !== req.user.id) {
//       return res.status(404).json({ error: 'Category not found' });
//     }
//     res.json(category);
//   } catch (error) {
//     res.status(500).json({ error: 'Error retrieving category' });
//   }
// };

// // Update a category by ID
// exports.updateCategory = async (req, res) => {
//   const { id } = req.params;
//   const { name, description } = req.body;

//   try {
//     const category = await Category.findByPk(id);
//     if (!category || category.userId !== req.user.id) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     category.name = name;
//     category.description = description;
//     await category.save();
    
//     res.json(category);
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating category' });
//   }
// };

// // Delete a category by ID
// exports.deleteCategory = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const category = await Category.findByPk(id);
//     if (!category || category.userId !== req.user.id) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     await category.destroy();
//     res.json({ message: 'Category deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting category' });
//   }
// };









// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
};

// Create a new category
exports.createCategory = async (req, res) => {
  const { name, type } = req.body;
  try {
    const newCategory = await Category.create({ name, type });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};

// Update a category
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, type } = req.body;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    category.name = name || category.name;
    category.type = type || category.type;
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    await category.destroy();
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
};
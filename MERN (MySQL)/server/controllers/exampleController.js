const { Example_model } = require('../models');

const createExample = async (req, res) => {
  try {
    const example = await Example_model.create(req.body);
    res.status(201).json(example);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllExamples = async (req, res) => {
  try {
    const examples = await Example_model.findAll();
    res.status(200).json(examples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExampleById = async (req, res) => {
  try {
    const example = await Example_model.findByPk(req.params.id);
    if (!example) {
      return res.status(404).json({ error: 'Example_model not found' });
    }
    res.status(200).json(example);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExample = async (req, res) => {
  try {
    const [updated] = await Example_model.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Example_model not found' });
    }
    const updatedExample = await Example_model.findByPk(req.params.id);
    res.status(200).json(updatedExample);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExample = async (req, res) => {
  try {
    const deleted = await Example_model.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Example_model not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExample,
  getAllExamples,
  getExampleById,
  updateExample,
  deleteExample
};

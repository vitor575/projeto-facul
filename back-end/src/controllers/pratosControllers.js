import db from "../config/database.js";

const createPlate = async (req, res) => {
  const { plate_name, price, img } = req.body;
  const [ results, fields ] = await db.query(
    "INSERT INTO plates (nome, preco, img) VALUES (?, ?, ?)",
    [plate_name, price, img]
  );
  res.status(201).send({
    message: "Product added successfully!",
    body: {
      plate: { plate_name, price, img }
    }
  });

};

const listPlates = async (req, res) => {
    const [ results ] = await db.query('SELECT * FROM plates ORDER BY nome ASC');
     res.status(200).send(results);
};

const findPlateById = async (req, res) => {
    const plateId = parseInt(req.params.id);
    const [ results ] = await db.query('SELECT * FROM plates WHERE id = ?', [plateId]);
    res.status(200).send(results[0]);
};

const updatePlateById = async (req, res) => {
    const plateId = parseInt(req.params.id);
    const { nome, preco, img } = req.body;
    const response = await db.query(
      "UPDATE plates SET nome = ?, preco = ?, img = ? WHERE id = ?",
      [nome, preco, img, plateId]
    );
    res.status(200).send({ message: "Product Updated Successfully!" });
};

const deletePlateById = async (req, res) => {
    const plateId = parseInt(req.params.id);
    await db.query('DELETE FROM plates WHERE id = ?', [
      plateId
    ]);
    res.status(200).send({ message: 'Product deleted successfully!', plateId });
};

const pratosController = {
  createPlate,
  listPlates,
  findPlateById,
  updatePlateById,
  deletePlateById
}

export default pratosController;
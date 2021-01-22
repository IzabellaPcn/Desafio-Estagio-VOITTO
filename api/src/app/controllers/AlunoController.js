import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll()
    res.json(alunos);
  }

  async read(req, res) {
    // TODO
  }

  async create(req, res) {
    const {cep, cidade, email, estado, id, nome } = req.body;
    const alunos = await Aluno.create({cep, cidade, email, estado, id, nome });
    res.json(alunos);
  }

  async update(req, res) {
    const alunos = await Aluno.update()
    res.json(alunos);
  }

  async delete(req, res) {
    const alunos = await Aluno.delete()
    res.json(alunos);
  }
}

export default new AlunoController();

const clientsModel = require('../models/clientsModel');

class clientsController {
    static async create(req, res){
        const { nome, cpf, email, cidade, telefone } = req.body;

        try{
            if(!nome || !cpf || !email || !cidade || !telefone){
                return res.status(400).json({ message: "Todos os campos são necessários" });
            }
            if(!email.includes("@") || !email.includes('.')){
                return res.status(400).json({ message: 'Preencha um email válido' });
            }
            
            const client = await clientsModel.create( {
                nome,
                cpf,
                email,
                cidade,
                telefone,
            } );

            if (!client){
                return res.status(500).json( { message: "Erro ao criar cliente" } );
            }

            return res.status(200).json( client );

        } catch(error){
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };

    static async findAll(req, res){
        try{
            const clients = await clientsModel.find();
            if (!clients){
                return res.status(500).json( { message: "Erro ao buscar clientes" } );
            }
            return res.status(200).json( clients );

        } catch(error){
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };

    static async findById(req, res){
        try{
            const client = await clientsModel.findById( req.params.id );
            if (!client){
                return res.status(500).json( { message: "Erro ao buscar cliente" } );
            }
            return res.status(200).json( client );

        } catch(error){
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };

    static async update(req, res){
        const { nome, cpf, email, cidade, telefone } = req.body;
        const id = req.params.id;

        try{
            if(!nome || !cpf || !email || !cidade || !telefone){
                return res.status(400).json({ message: "Todos os campos são necessários" });
            }
            if(!email.includes("@") || !email.includes('.')){
                return res.status(400).json({ message: 'Preencha um email válido' });
            }
            
            const clientUpdated =  {
                email,
                cpf,
                email,
                cidade,
                telefone,
            };

            const client = await clientsModel.findByIdAndUpdate(id, clientUpdated, { new: true });
            if(!client){
                return res.status(500).json({ message: "Erro ao atualizar cliente" });
            }

            return res.status(200).json(client);

        } catch(error){
            console.error(error);
            return res.status(500).json({ message: error.message });
        }

    }


    static async delete(req, res){
        const id = req.params.id;
        
        try{
            const validClient = await clientsModel.findById(id);
            if(!validClient){
                return res.status(404).json({ message: "Cliente não encontrado" });
            }

            const client = await clientsModel.findByIdAndDelete(id);
            if(!client){
                return res.status(500).json({ message: "Erro ao deletar cliente" });
            }
            return res.status(200).json( { client, message: "Deletado com sucesso" } );
        } catch(error){
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = clientsController;
const moment = require('moment');

const Wine = require('../models/wine.model');


module.exports = {

    addWine: async function (req, res) {
       
        try {
            const wineToAdd = new Wine();
            
            wineToAdd.titleId =  req.body.titleId;
            wineToAdd.title =  req.body.title;
            wineToAdd.characteristics = req.body.characteristics;
            wineToAdd.createdAt = moment().format('LLL')
            
            
            await wineToAdd.save();
            res.status(201).send(`El vino, ${req.body.title} con estas caracteristicas: ${req.body.characteristics} ha sido creado.`);
            
        } catch (e) {
            res.status(500).send(e);
        }
    },
    getWine: async function (_req, res) {

            const wine = await Wine.find(); 
    
           res.json(wine)
          
    },
    
    updateWine: async function (req, res) {
        
        try {
            await Wine.updateOne({
            
                titleId:req.body.titleId,
                title:req.body.title, 
                characteristics: req.body.characteristics,
                updatedAt: moment().format('LLL')   // relacionar perfil de admin de creador de partida
            });
    
            res.status(200).send(`Vino  modificado por el usuario: ${req.body.name} ${req.body.characteristics}`);

        } catch (e) {
            send.status(500);
        }
    },
    dropWine: async function (req, res) {

        try {
            await  Wine.deleteOne({

                titleId:req.body.titleId,
                title: req.body.title,
                characteristics: req.body.characteristics 
            });
            res.status(200).send(`Ha sido borrado el vino: ${req.body.title} y estas caracteristicas ${req.body.characteristics} en: ${moment().format('LLL')}.`);
        } catch (e) {
            send.status(500);
        } 
    } 
        
    
};
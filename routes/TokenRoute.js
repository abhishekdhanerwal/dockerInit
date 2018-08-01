var _ = require('lodash');
var moment = require('moment');
var Token = require('../models/Token');

var mongoose = require('mongoose');

module.exports = function(app) {

    app.get('/getTokens' , function (req , res) {
        Token.find({date:req.query.date}, function(err , response){
            if (err) {
                res.status(400).send({message: 'error during finding data', error: err});
            }
            else {
                res.status(200).send({
                    message: 'Tokens found successfully',
                    data: response
                })
            }
        })
    });

    app.post('/setTokens', function (req, res) {
        Token.findOne({date:req.query.date}, function(err , response){
            if (err) {
                res.status(400).send({message: 'error during finding data', error: err});
            }
            else {
                if(response == null){
                    var newToken = new Token({
                        date:req.body.date,
                        token:req.body.token
                    });
                    newToken.save(function (error, result) {
                        if (error){
                           res.status(400).send({message: 'error during saving data', error: error});
                        }                           
                        else {
                            res.status(200).send({
                                message: 'Tokens found successfully',
                                data: result
                            })                          
                        }
                    })
                }
                else {
                    _.merge(response, req.body);
                    response.save(function (error, result) {
                        if (error){
                           res.status(400).send({message: 'error during saving data', error: error});
                        }                           
                        else {
                            res.status(200).send({
                                message: 'Tokens found successfully',
                                data: result
                            })                          
                        }
                    })
                }
            }
        })
    })
};

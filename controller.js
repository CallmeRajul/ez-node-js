'use strict';

var response = require('./rest');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API KU berjalan",res);
};

// menampilkan data cenah

exports.tampilssemuasiswa = function(req,res){
    connection.query('SELECT * FROM siswa' ,function(error,rows,fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows,res);
        }
    });
};
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
            console.log(error);
        }else {
            response.ok(rows,res);
        }
    });
};

// menampilkan  semua dara mahasiswa berdasarkan id 

exports.tampilsemuasiswaberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM siswa WHERE id = ?', [id],
        function(error,rows,fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows,res);
            }
        });
};
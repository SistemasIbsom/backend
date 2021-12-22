const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM tbl_operador", (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});


routes.get('/:num_operador', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query("SELECT * FROM tbl_operador WHERE NUM_OPERADOR = ?", [req.params.num_operador], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

module.exports = routes;
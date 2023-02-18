var express = require("express");
var router = express.Router();
var connection = require("../config/db");

/* GET home page. */
router.get("/", function (req, res, next) {
  connection.query(
    "SELECT atlet.nama, atlet.alamat, atlet.kecamatan, atlet.pelatih FROM ((atlet INNER JOIN pelatih ON atlet.cabor = pelatih.cabor)INNER JOIN vanue ON atlet.kecamatan = vanue.kecamatan);",
    (err, index) => {
      if (err) {
        return console.log("error: " + err.message);
      }
      connection.query(
        "SELECT COUNT(id_pelatih) AS countPelatih FROM pelatih;",
        (err, countPelatih) => {
          if (err) {
            return console.log("error: " + err.message);
          }
          connection.query(
            "SELECT COUNT(id_vanue) AS countVanue FROM vanue;",
            (err, countVanue) => {
              if (err) {
                return console.log("error: " + err.message);
              }
              connection.query(
                "SELECT COUNT(id_atlet) AS countAtlet FROM atlet;",
                (err, countAtlet) => {
                  if (err) {
                    return console.log("error: " + err.message);
                  }
                  connection.query("SELECT * FROM atlet", (err, dataAtlet) => {
                    if (err) {
                      return console.log("error: " + err.message);
                    }
                    connection.query(
                      "SELECT * FROM pelatih",
                      (err, dataPelatih) => {
                        if (err) {
                          return console.log("error: " + err.message);
                        }
                        connection.query(
                          "SELECT * FROM vanue",
                          (err, dataCabor) => {
                            if (err) {
                              return console.log("error: " + err.message);
                            }
                            res.render("index", {
                              title: "Sistem Manajemen Atlet",
                              atlet: dataAtlet,
                              cabor: dataCabor,
                              pelatih: dataPelatih,
                              index,
                              countAtlet,
                              countPelatih,
                              countVanue,
                            });
                          }
                        );
                      }
                    );
                  });
                }
              );
            }
          );
        }
      );
    }
  );
});

module.exports = router;

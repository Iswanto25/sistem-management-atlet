var express = require("express");
var router = express.Router();
var connection = require("../config/db");

/* GET home page. */
router.get("/", function (req, res, next) {
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
                        res.render("admin/admin", {
                          titel: "Dashboard",
                          title: "Dashboard",
                          atlet: dataAtlet,
                          cabor: dataCabor,
                          pelatih: dataPelatih,
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
});

// add atlet
router.post("/save/atlet", (req, res) => {
  let data = {
    nik: req.body.nik,
    nama: req.body.nama,
    tempat_lahir: req.body.tempat_lahir,
    tgl_lahir: req.body.tgl_lahir,
    tgl_gabung: req.body.tgl_gabung,
    jns_kelamin: req.body.jns_kelamin,
    alamat: req.body.alamat,
    cabor: req.body.cabor,
    pelatih: req.body.pelatih,
    kecamatan: req.body.kecamatan,
  };
  let sql = "INSERT INTO atlet SET ?";
  connection.query(sql, data, (err) => {
    if (err) throw err;
    req.flash("success", "Data Berhasil Disimpan!");
    res.redirect("/admin");
  });
});

// atlet edit
router.post("/update/atlet", (req, res) => {
  let sql =
    "UPDATE atlet SET nik='" +
    req.body.nik +
    "', nama='" +
    req.body.nama +
    "',tempat_lahir='" +
    req.body.tempat_lahir +
    "',tgl_lahir='" +
    req.body.tgl_lahir +
    "',jns_kelamin='" +
    req.body.jns_kelamin +
    "',alamat='" +
    req.body.alamat +
    "',tgl_gabung='" +
    req.body.tgl_gabung +
    "',kecamatan='" +
    req.body.kecamatan +
    "',cabor='" +
    req.body.cabor +
    "',pelatih='" +
    req.body.pelatih +
    "' WHERE id_atlet=" +
    req.body.id_atlet;
  connection.query(sql, (err) => {
    if (err) throw err;
    req.flash("success", "Data Berhasid DI edit");
    res.redirect("/admin");
  });
});

// delete atlet
router.post("/delete/atlet", (req, res) => {
  let sql = "DELETE FROM atlet WHERE id_atlet=" + req.body.id_atlet + "";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    req.flash("error", "Data Berhasil Dihapus!");
    res.redirect("/admin");
  });
});

// add pelatih
router.post("/save/pelatih", (req, res) => {
  let data = {
    nik: req.body.nik,
    nama: req.body.nama,
    tempat_lahir: req.body.tempat_lahir,
    tgl_lahir: req.body.tgl_lahir,
    tgl_gabung: req.body.tgl_gabung,
    jns_kelamin: req.body.jns_kelamin,
    alamat: req.body.alamat,
    cabor: req.body.cabor,
    jabatan: req.body.jabatan,
    kecamatan: req.body.kecamatan,
  };
  let sql = "INSERT INTO pelatih SET ?";
  connection.query(sql, data, (err) => {
    if (err) throw err;
    req.flash("success", "Data Berhasil Disimpan!");
    res.redirect("/admin");
  });
});

// atlet edit
router.post("/update/pelatih", (req, res) => {
  let sql =
    "UPDATE pelatih SET nik='" +
    req.body.nik +
    "', nama='" +
    req.body.nama +
    "',tempat_lahir='" +
    req.body.tempat_lahir +
    "',tgl_lahir='" +
    req.body.tgl_lahir +
    "',jns_kelamin='" +
    req.body.jns_kelamin +
    "',alamat='" +
    req.body.alamat +
    "',tgl_gabung='" +
    req.body.tgl_gabung +
    "',kecamatan='" +
    req.body.kecamatan +
    "',cabor='" +
    req.body.cabor +
    "',jabatan='" +
    req.body.jabatan +
    "' WHERE id_pelatih=" +
    req.body.id_pelatih;
  connection.query(sql, (err) => {
    if (err) throw err;
    req.flash("success", "Data Berhasid DI edit");
    res.redirect("/admin");
  });
});

// delete pelatih
router.post("/delete/pelatih", (req, res) => {
  let sql = "DELETE FROM pelatih WHERE id_pelatih=" + req.body.id_pelatih + "";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    req.flash("error", "Data Berhasil Dihapus!");
    res.redirect("/admin");
  });
});


// add Vanue
router.post("/save/vanue", (req, res) => {
  let data = {
    nama: req.body.nama,
    tgl_bangun: req.body.tgl_bangun,
    alamat: req.body.alamat,
    cabor: req.body.cabor,
    kecamatan: req.body.kecamatan,
  };
  let sql = "INSERT INTO vanue SET ?";
  connection.query(sql, data, (err) => {
    if (err) throw err;
    req.flash("success", "Data Berhasil Disimpan!");
    res.redirect("/admin");
  });
});

// edit vanue
router.post("/update/vanue", (req, res) => {
  let sql =
    "UPDATE vanue SET nama='" +
    req.body.nik +
    "', nama='" +
    req.body.nama +
    "',alamat='" +
    req.body.alamat +
    "',kecamatan='" +
    req.body.kecamatan +
    "',cabor='" +
    req.body.cabor +
    "',tgl_bangun='" +
    req.body.tgl_bangun +
    "' WHERE id_vanue=" +
    req.body.id_vanue;
  connection.query(sql, (err) => {
    if (err) throw err;
    req.flash("success", "Data Berhasid DI edit");
    res.redirect("/admin");
  });
});

// delete vanue
router.post("/delete/vanue", (req, res) => {
  let sql = "DELETE FROM vanue WHERE id_vanue=" + req.body.id_vanue + "";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    req.flash("error", "Data Berhasil Dihapus!");
    res.redirect("/admin");
  });
});
module.exports = router;

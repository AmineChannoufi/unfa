import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import Nave_ss from "./Nave_ss";
import "./Demande.css";

const Demande = () => {
    const nav = useNavigate();
    const [adherentReg, setAdherentReg] = useState("");
    const [adresseReg, setAdresseReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [nomReg, setNomReg] = useState("");
    const [activiteReg, setActiviteReg] = useState("");
    const [teleReg, setTeleReg] = useState("");
    const [identReg, setIdentReg] = useState("");
    const [respReg, setRespReg] = useState("");
    const [cinReg, setCinReg] = useState("");
    const [personneReg, setPersonneReg] = useState("");
    const [ribReg, setRibReg] = useState("");
    const [caReg, setCaReg] = useState("");
    const [modeReg, setModeReg] = useState("");
    const [delaiReg, setDelaiReg] = useState("");
    const [encoursReg, setEncoursReg] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(true);
  
  
    Axios.defaults.withCredentials = true;
  
    const registerr = () => {
     
      Axios.post("http://localhost:3001/registerr", {
        adherent: adherentReg,
        adresse: adresseReg,
        username: usernameReg,
        nom: nomReg,
        activite: activiteReg,
        tele: teleReg,
        ident: identReg,
        resp: respReg,
        cin: cinReg,
        personne: personneReg,
        rib: ribReg,
        ca: caReg,
        mode: modeReg,
        delai: delaiReg,
        encours: encoursReg,
      })
        .then((res) => {
          setAdherentReg("");
          setAdresseReg("");
          setUsernameReg("");
          setNomReg("");
          setActiviteReg("");
          setTeleReg("");
          setIdentReg("");
          setRespReg("");
          setCinReg("");
          setPersonneReg("");
          setRibReg("");
          setCaReg("");
          setModeReg("");
          setDelaiReg("");
          setEncoursReg("");
          setMessage(res.data.message)
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    
    
<>
<div>
<div className="container" style={{ marginTop: "150px" }}>
          {/* <Alert message={message} show={show} 
          
          /> */}
           {/* <div className='col-8 form-group pt-2 mx-auto'>
            <input type="text" className="form control" placeholder="Subject" name="subject"/>
        </div> */}
            <div className='row pt-5 mx-auto'>

          <div className='col-2 form-group pt-2 mx-auto'>
            <label>Adherent :</label>
            <input
            className="form control"
              name="adherent"
              type="text"
              value={adherentReg}
              onChange={(e) => setAdherentReg(e.target.value)}
            />
          </div>
          <div className='col-2 form-group pt-2 mx-auto'>
            <label>Adresse :</label>
            <input
              className="input-fielde"
              name="adresse"
              type="text"
              value={adresseReg}
              onChange={(e) => setAdresseReg(e.target.value)}
            />
          </div>
          <div className="form-groupe">
            <label>Username :</label>
            <input
              className="input-fielde"
              name="username"
              type="text"
              value={usernameReg}
              onChange={(e) => setUsernameReg(e.target.value)}
            />
          </div>
         
           //
              <h3>renseignements sur l'acheteur</h3> 
            
            <table border="0"></table>
            <div className="form-groupe">
              <label>Nom ou raison sociale??: :</label>
              <input
                className="input-fielde"
                name="nom"
                type="text"
                value={nomReg}
                onChange={(e) => setNomReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Activit????:</label>
              <input
                className="input-fielde"
                name="activite"
                type="text"
                value={activiteReg}
                onChange={(e) => setActiviteReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>N?? de t??l??phone??:</label>
              <input
                className="input-fielde"
                name="tele"
                type="text"
                value={teleReg}
                onChange={(e) => setTeleReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">

              <label>N?? Identifiant Unique??:</label>
              <input
                className="input-fielde"
                name="tele"
                type="text"
                value={identReg}
                onChange={(e) => setIdentReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">

              <label>Nom et qualit?? du 1 er responsable??:</label>
              <input
                className="input-fielde"
                name="resp"
                type="text"
                value={respReg}
                onChange={(e) => setRespReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>CIN :</label>
              <input
                className="input-fielde"
                name="cin"
                type="text"
                value={cinReg}
                onChange={(e) => setCinReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Personne ?? contacter (comptabilit?? fournisseur):</label>
              <input
                className="input-fielde"
                name="personne"
                type="text"
                value={personneReg}
                onChange={(e) => setPersonneReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Domiciliation bancaire??: (RIB complet)</label>
              <input
                className="input-fielde"
                name="personne"
                type="text"
                value={ribReg}
                onChange={(e) => setRibReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>CA project?? avec cet acheteur</label>
              <input
                className="input-fielde"
                name="ca"
                type="text"
                value={caReg}
                onChange={(e) => setCaReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Mode de r??glement</label>
              <input
                className="input-fielde"
                name="mode"
                type="text"
                value={modeReg}
                onChange={(e) => setModeReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>D??lai de r??glement</label>
              <input
                className="input-fielde"
                name="delai"
                type="text"
                value={delaiReg}
                onChange={(e) => setDelaiReg(e.target.value)}
              />
            </div>
            <div className="form-groupe">
              <label>Encours demand??</label>
              <input
                className="input-fielde"
                name="encours"
                type="text"
                value={encoursReg}
                onChange={(e) => setEncoursReg(e.target.value)}
              />
            </div>
            <div className="button-box">
              <button className="submit-btn" onClick={registerr}>
               
              </button>
            </div>
            </div>
        </div>

        </div>
        </>      

  )
}

export default Demande
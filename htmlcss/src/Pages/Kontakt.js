import { useState } from "react";
import { Link, Route, Router, Routes } from 'react-router-dom';

function Kontakt() {


const [aadress, määraAadress] = useState("Valga");

const [telefon, määraTelefon] = useState("56234679");

const [email, määraEmail] = useState("bla@bla.com");


function määraBla() {
    määraAadress();
    määraTelefon();
    määraEmail();
    ; 
}


return(

    <div>
<div><p id="text1">{ aadress }</p></div>
<div><p id="text2">{ telefon }</p></div>
<div><p id="text3">{ email }</p></div>
<button onClick={() => määraBla}> Muuda inglise keelseks</button>
</div>







) 
}


export default Kontakt;




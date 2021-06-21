import React from "react";

const Main = () => {
    return (
    <div>
        <SegundoComponente msg="Exercício React do Serratec" />
    </div>
    );
}

function SegundoComponente(props) {
    return (
        <center>
            <h1>{props.msg}</h1>
        </center>
    );
}

export default Main;
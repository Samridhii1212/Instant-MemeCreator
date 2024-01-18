import React, { Component } from "react";
import Header from "./header";
import Main from "./main";

class Meme extends Component {
    render() {
        return (
            <>
                <div className="body">
                    <Header />
                    <Main />

                </div>
            </>

        );
    }
}


export default Meme;
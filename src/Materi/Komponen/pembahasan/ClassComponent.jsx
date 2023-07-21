import React from "react";

class ClassComponent extends React.Component {

    render() {
        return(
            <div>
            <h1>Komponen ini dibuat dengan class component</h1>
            <h2>Halo nama saya {this.props.nama}</h2>
            <h2>{this.props.nama} berasal dari {this.props.asal} Provinsi Jawa Barat</h2>
            <h2>{this.props.nama} berasal dari Lulusan Sarjana Statistika FMIPA IPB Tahun 2017</h2>
            <h2>{this.props.nama} memiliki passion bidang Data Scientist dan Programmer</h2>

            </div>
        )
    }
}

export default ClassComponent;
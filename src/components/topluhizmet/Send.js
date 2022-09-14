import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      kampanyaAd: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.setState({
      kampanyaAd: encodeURI(
        `https://wa.me/+905526350125?text=${e.target.value}`
      ),
    });
  }

  render() {
    return (
    
      <div
        class="col-12"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          
        }}
      >
        
       
          <div class="col-12" style={{ margin:"auto",padding:"0"}}>
            <div class="col-9" style={{ float: "left" }}>
              {/*<input value={this.state.value} onChange={this.handleChange} /> */}
              <TextField
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                label="Mesajınızı giriniz"
                id="fullWidth"
                style={{ width: "%100", zIndex: "+100" }}
              />
            </div>
            <div class="col-3" style={{ float: "left" }}>
              <Button
                onClick={() => window.open(this.state.kampanyaAd, "_blank")}
                variant="contained"
                endIcon={<SendIcon />}
                style={{ color: "#10b418" }}
              >
                Gönder
              </Button>
            </div>
          </div>
        </div>
     
     
    );
  }
}

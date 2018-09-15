import React, { Component } from 'react';

const Container = (props) => {
  return(
    <div className="row center-xs" style={{"width": "100%"}}>
      <div className="col-lg-9 col-md-8 cold-sm-12 col-xs-12">
        {props.children}
      </div>
    </div>
  );
}

export default Container;
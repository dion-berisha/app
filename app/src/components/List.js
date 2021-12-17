import React from "react";

const List = ({ results }) => {
  return (
    <div className="ui segment">
      {results.map((item) => { 
          return (
              <li key={item.pageid} className="ui list">
                  <h3>
                    <a 
                    href={"https://en.wikipedia.org?curid=" + item.pageid}
                    className="header"
                    target="_blank"
                    rel="noreferrer"
                    >{item.title}</a>
                  </h3>
                  <div className="ui segment" dangerouslySetInnerHTML={{__html: item.snippet}} />
              </li>
          )
      })}
    </div>
  );
};

export default List;

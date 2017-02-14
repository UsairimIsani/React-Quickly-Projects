import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
require("../../css/bootstrap.min.css");
import Tooltip from "./Tooltip.jsx";



export default class Excel extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      headers: [
        "Book", "Author", "Language", "Published", "Sales"
      ],
      data: [
        [
          "The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"
        ],
        [
          "Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"
        ],
        [
          "Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"
        ],
        [
          "And Then There Were None", "Agatha Christie", "English", "1939", "100 million"
        ],
        [
          "Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"
        ],
        [
          "The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"
        ],
        ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"]
      ],
     

      sortby: null, 
      descending: false,
    }
    this.sort = this.sort.bind(this);
  }
  sort(e) {
    let col = e.target.cellIndex;
    let data = Array.from(this.state.data);
    let descending = this.state.sortby === col && !this.state.descending;
    data.sort(function (a, b) {
      return descending ? (a[col] < b[col] ? 1 : -1): (a[col] > b[col] ? 1 : -1);

    });

    this.setState({data: data, sortby: col, descending: descending});

  }
  render() {
    return (
      <div>
        <table>
          <thead >
            <tr onClick={this.sort}>
              {this
                .state
                .headers
                .map((title, idx) => {
                  
                   if(this.state.sortby === idx){
                title += this.state.descending ? ' \u2191' : ' \u2193';
                        }
                  return (
                    <th key={idx}>{ 
                           <Tooltip text="Click once for Ascending and Twice for Descending">{title}</Tooltip>                                                                                                                          }</th>
                  )
                }, this)}
            </tr>
          </thead>

          <tbody>
            {this
              .state
              .data
              .map((row, rowidx) => {
                return (
                  <tr key={rowidx}>{row.map((cell, cellidx) => {
                      return (
                        <td key={cellidx}>{cell}</td>
                      )
                    })
}</tr>
                )
              })}

          </tbody>
        </table>
      </div>
    );
  }
}

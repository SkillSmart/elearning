import React, {Component} from 'react';
import styled from 'styled-components';

class _LibrarySearchHeader extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    let {className} = this.props;
    return (
      <div className={className}>
        <h3>Lesson Library</h3>
        
        <div className="filter">
          <form action="">

            <div className="input_group">
              <label htmlFor="courseFilter">Filter by Course</label>
              <select name="courseFilter">
                <option value="master negotiator">The Master Negotiator</option>
                <option value="better negotiator">The Better Negotiator</option>
                <option value="nicer negotiator">The Nicer Negotiator</option>
                <option value="master negotiator">The Helpful Negotiator</option>
              </select>
            </div>

            <div className="input_group">
              <label htmlFor="moduleFilter">Filter by Module</label>
              <select name="moduleFilter">
                <option value="master negotiator">Module1</option>
                <option value="better negotiator">Module2</option>
                <option value="nicer negotiator">Module2</option>
                <option value="master negotiator">Module2</option>
              </select>
            </div>

          </form>
        </div>

        <div className="sort">
          <form action="">

            {/* FILTER */}
            <div className="input_group">
              <label htmlFor="courseFilter">Sort by Course</label>
              <select name="courseSort">
                <option value="master negotiator">The Master Negotiator</option>
                <option value="better negotiator">The Better Negotiator</option>
                <option value="nicer negotiator">The Nicer Negotiator</option>
                <option value="master negotiator">The Helpful Negotiator</option>
              </select>
            </div>

            {/* SORT */}
            <div className="input_group">
              <label htmlFor="moduleSort">Sort by Module</label>
              <select name="moduleSort">
                <option value="master negotiator">Module1</option>
                <option value="better negotiator">Module2</option>
                <option value="nicer negotiator">Module2</option>
                <option value="master negotiator">Module2</option>
              </select>
            </div>
          </form>
        </div>

        <div className="search">
          <form action="">
            <input type="text"/>
            <button>search</button>
          </form>
        </div>
      </div>
    )
  }
}

export const LibrarySearchHeader = styled(_LibrarySearchHeader)`
     /* Layout */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
    ". sort filter search";

    /* Design */
    padding: 3.5rem;
    background: white;
    border-radius: 3px;


    .filter {
      grid-area: filter;
    }

    .sort {

    }

    .search {

    }
`;

import React from "react";
import "../styles.css";
import { FaPlus } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { FaWeightHanging } from "react-icons/fa";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="quarter">
        <h3>Q1 2019</h3>
        <h2>January - March</h2>
        <div className="task">
          <p>Re-designed the zero-g doggie bags. No more spills!</p>
          <div className="task-info">
            <FaWeightHanging color="#B7BDC9" size={16} />
            <p>64%</p>
            <div className="gap"></div>
            <IoIosMore color="#B7BDC9" size={20} />
          </div>
        </div>
        <div className="task">
          <p>Travel & Relocation Support</p>
          <div className="task-info">
            <FaWeightHanging color="#B7BDC9" size={16} />
            <p>12%</p>
            <div className="gap"></div>
            <IoIosMore color="#B7BDC9" size={20} />
          </div>
        </div>
        <div className="newtask">
          <FaPlus color="#5E20B3" size={16} />
          <button className="Button">Create new task</button>
        </div>
      </div>

      <div className="quarter">
        <h3>Q2 2019</h3>
        <h2>April - June</h2>
        <div className="task">
          <h3 id="task-description">No Task Available</h3>
        </div>
        <div className="newtask">
          <FaPlus color="#5E20B3" size={16} />
          <button className="Button">Create new task</button>
        </div>
      </div>

      <div className="quarter">
        <h3>Q3 2019</h3>
        <h2>July - September</h2>
        <div className="task">
          <p>Bundle interplanetary analytics for improved transmission</p>
          <div className="task-info">
            <FaWeightHanging color="#B7BDC9" size={16} />
            <p>90%</p>
            <div className="gap"></div>
            <IoIosMore color="#B7BDC9" size={20} />
          </div>
        </div>
        <div className="newtask">
          <FaPlus color="#5E20B3" size={16} />
          <button className="Button">Create new task</button>
        </div>
      </div>

      <div className="quarter">
        <h3>Q4 2019</h3>
        <h2>October - December</h2>
        <div className="task">
          <p>Data Migration: Performance & Culture End Game</p>
          <div className="task-info">
            <FaWeightHanging color="#B7BDC9" size={16} />
            <p>63%</p>
            <div className="gap"></div>
            <IoIosMore color="#B7BDC9" size={20} />
          </div>
        </div>
        <div className="newtask">
          <FaPlus color="#5E20B3" size={16} />
          <button className="Button">Create new task</button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

import React from 'react';
import "./PushTable.scss"

const PushTable = () => {
  return (
    <div className="">
      <h4 className="text-primary mb-4">PUSH</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">USER NAME</th>
            <th scope="col">TITLE</th>
            <th scope="col">Body</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="badge bg-primary">SKYCAP SUMAN</span>
            </td>
            <td>
              Lorem ipsum Lorem ipsum <br />
              Lorem ipsum Lorem ipsum..
            </td>
            <td>
              Lorem ipsum Lorem ipsum <br />
              Lorem ipsum Lorem ipsum..
            </td>
            <td>15-05-24 16:18:55</td>
            <td>
              <span className="badge bg-success">Delivered</span>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default PushTable;

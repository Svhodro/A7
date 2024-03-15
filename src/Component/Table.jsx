import React from "react";
function Table() {
    return (
        <>
            <div>
                <div className="content flex flex-col items-center w-full mb-4">
                    <p className="text-2xl font-bold ">Want to cook: 01</p>
                    <hr className="w-[60%] text-center" />
                </div>
                <div className="fast">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Ganderton</td>
                                    <td>Quality </td>
                                    <td>Blue</td>
                                    <td><button className="btn btn-sm btn-accent">Preparing</button></td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Hart </td>
                                    <td>Desktop Support</td>
                                    <td>Purple</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div className="content flex flex-col items-center w-full mb-4">
                    <p className="text-2xl font-bold ">Currently cooking: 02</p>
                    <hr className="w-[60%] text-center" />
                </div>
                <div className="fast">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Ganderton</td>
                                    <td>Quality </td>
                                    <td>Blue</td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Table
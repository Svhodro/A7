import React from "react";
function Card(data) {
  
    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={data.data.recipe_img} alt="Shoes" className="rounded-xl w-60 h-40" />
                </figure>
                <div className="card-body  text-left ">
                    <p className="font-bold">{data.data.recipe_name}</p>
                    <p>{data.short_description}</p>
                        <hr className="w-[95%]"/>
                        <p className="font-bold ">Ingredients:</p>
                        <ol className="list-disc list-inside text-left">
                            <li>{data.data.ingredients[0]}</li>
                            <li>{data.data.ingredients[1]}</li>
                            <li>{data.data.ingredients[2]}</li>
                        </ol>
                        <hr className="w-[95%] "/>
                        <div className="flex gap-4 justify-between">
                            <div>
                                <p>{data.data.preparing_time}</p>
                            </div>
                            <div>
                                <p>{data.data.calories}</p>
                            </div>
                        </div>
                    <div className="card-actions">
                    <button className="btn btn-accent">Want to Cook</button>
                    </div>
                </div>
            </div>        
        </>
    )
}
export default Card